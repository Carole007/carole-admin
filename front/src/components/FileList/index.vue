<template>
  <div>
    <ul v-if="list.length">
      <li v-for="v in list" class="file-item">
        <img :src="`${baseUrl}${v.url}`" width="80%" height="80%" style="object-fit: cover;"
          v-if="['png', 'jpg', 'jpeg', 'gif'].includes(getFileSuffix(v.name))" />
        <a :href="`${baseUrl}${v.url}`" target="_blank" v-else style="color:currentColor"> {{ v.name }}
        </a>
        <i class="el-icon-download" :title="'下载' + v.name" @click="download(`${v.url}`)" />
      </li>
    </ul>
    <div v-else> <el-tag type="warning">未上传</el-tag></div>
  </div>
</template>
<script setup>
import { getFilePath } from "@/utils/ruoyi.js"
const props = defineProps({
  fileList: {
    type: [Array, String],
    default: () => []
  },
})
const { proxy } = getCurrentInstance();
const baseUrl = ref(import.meta.env.VITE_APP_BASE_API)

const list = computed(() => {
  let val = props.fileList
  if (val) {
    if (!val) return []
    // 首先将值转为数组
    const list = Array.isArray(val) ? val : val.split(',');
    return list.map(item => {
      if (typeof item === "string") {
        item = { name: getFileName(item), url: item };
      } else {
        item.name = item.name || item.fileName
        item.url = item.url || item.filePath
      }
      item.url = getFilePath(item.url)
      return item;
    });
  } else {
    return [];
  }
})
function down(file) {
  proxy.$download.name(file.url).then(res => {
    this.$message.success("文件下载成功！")
  }).catch(err => {
    this.$message.error("文件下载失败！")
  })
}
// 获取文件名称
function getFileName(name) {
  if (name.lastIndexOf("/") > -1) {
    return name.slice(name.lastIndexOf("/") + 1);
  } else {
    return "";
  }
}
function getFileSuffix(str) {
  return str.slice(str.lastIndexOf(".") + 1)
}
</script>
<style lang="scss" scoped>
ul,
li {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.file-item {
  margin-top: 4px;
  color: #409eff;

  .el-icon-download {
    color: rgb(243, 159, 4);
    cursor: pointer;
  }

  &:hover {
    background-color: #f5f7fa;
  }

  .link {
    &:hover {
      text-decoration: underline;
      background-color: #f5f7fa;
    }

  }

  .el-icon-close {
    cursor: pointer;
    color: #2a3a4a;
  }
}
</style>
