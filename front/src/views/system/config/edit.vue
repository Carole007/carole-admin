<template>
  <div class="app-container">
    <aside>
      <el-select v-model="selectedKey" placeholder="请选择文件" style="width: 300px;" @change="loadData">
        <el-option
          v-for="(item, key) in keyMap"
          :key="key"
          :label="`${key} - ${item.desc}`"
          :value="key"
        />
      </el-select>
    </aside>

    <div v-if="selectedKey" style="height: 600px; margin-top: 10px;">
      <vue-monaco-editor
        v-model:value="code"
        theme="vs-dark"
        language="json"
        :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount"
      />
    </div>

    <el-button
      v-if="selectedKey"
      type="primary"
      @click="handleSave"
      style="margin-top: 10px;"
    >
      保存
    </el-button>
  </div>
</template>

<script setup name="appinfo">
import { ref, shallowRef, onMounted } from 'vue'
import { getKeys, getInfoByKey, updateInfoByKey } from '../../../api/system/config'
import { ElMessage } from 'element-plus'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

const keyMap = ref({})
const selectedKey = ref('')
const code = ref('')
const editorRef = shallowRef()

const handleMount = (editor) => {
  editorRef.value = editor

  // 添加 Ctrl+S 保存快捷键
  editor.addCommand(
    monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
    () => {
      handleSave()
    }
  )
}


const formatCode = () => {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}

// 加载 key 列表并默认选第一个 key
const loadKeys = async () => {
  try {
    const { data } = await getKeys()
    keyMap.value = data
    const keys = Object.keys(data)
    if (keys.length > 0) {
      selectedKey.value = keys[0]
      await loadData()
    }
  } catch (e) {
    ElMessage.error('获取 key 列表失败')
  }
}

// 加载当前选中的 key 的数据
const loadData = async () => {
  if (!selectedKey.value) return
  try {
    const { data } = await getInfoByKey(selectedKey.value)
    code.value = JSON.stringify(data, null, 2)
    formatCode()
  } catch (e) {
    ElMessage.error('获取数据失败')
  }
}

// 保存
const handleSave = async () => {
  try {
    const parsedData = JSON.parse(code.value)
    await updateInfoByKey(selectedKey.value, parsedData)
    ElMessage.success('保存成功')
  } catch (e) {
    ElMessage.error('保存失败，请检查 JSON 格式')
  }
}

onMounted(() => {
  loadKeys()
})
</script>


<style scoped>
.app-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
