<template>
  <el-dialog title="执行sql" v-model="visible" width="800px" top="5vh" append-to-body>
    <el-input type="textarea" :rows="10" placeholder="请输入执行的sql" v-model="content"></el-input>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="submit" v-hasRole="['admin']">确 定</el-button>
        <el-button @click="visible = false">取 消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { excuteSql } from "@/api/tool/gen";

const visible = ref(false);
const content = ref("");
const { proxy } = getCurrentInstance();
const emit = defineEmits(["ok"]);

/** 显示弹框 */
function show() {
  visible.value = true;
}

/** 确定按钮操作 */
function submit() {
  if (content.value === "") {
    proxy.$modal.msgError("请输入执行的语句");
    return;
  }
  excuteSql({ sql: content.value }).then(res => {
    proxy.$modal.msgSuccess(res.msg);
    if (res.code === 200) {
      visible.value = false;
      content.value = ""
      emit("ok");
    }
  });
}

defineExpose({
  show,
});
</script>
