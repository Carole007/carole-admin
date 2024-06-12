<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>Carole-admin后台管理框架</h2>
        <p>
          一款Nestjs+Prisma+Vue+Vite前后端分离的后台框架,
          前端基于<el-link type="primary" href='https://github.com/yangzongzhuan/RuoYi-Vue3'>若依</el-link>。
        </p>
        <p><el-link type="primary" href="https://github.com/Carole007/carole-admin?tab=readme-ov-file#%E6%96%87%E6%A1%A3" icon="document">查看文档</el-link></p>
        <ul style="list-style: circle;padding-left: 15px;">
          <li>前端采用Vue3、Element-Plus、Vite。</li>
          <li>后端采用Nest、Prisma、Redis &amp; Jwt。</li>
          <li>权限认证使用Jwt，支持多终端认证系统。</li>
          <li>支持加载动态权限菜单，多方式轻松权限控制。</li>
          <li>支持接口限流</li>
          <li>高效率开发，使用代码生成器可以一键生成前后端代码。</li>
        </ul>

        
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
        <p>
          <el-tag type="danger">&yen;免费开源</el-tag>
        </p>
        <p>
          <el-button type="primary" plain @click="goTarget('https://github.com/Carole007/carole-admin')"> <svg-icon
              icon-class="github" />github</el-button>
          <el-button type="primary" icon="Cloudy" plain
            @click="goTarget('https://gitee.com/Carole007/carole-admin')">gitee</el-button>
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>技术选型</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <h4>后端技术</h4>
            <ul>
              <li>Node</li>
              <li>Nestjs</li>
              <li>JWT</li>
              <li>Mysql</li>
              <li>Prisma</li>
              <li>Redis</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue3</li>
              <li>Vuex</li>
              <li>Element-plus</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Quill</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>联系信息</span>
            </div>
          </template>
          <div class="body">
            <p>
              <i class="el-icon-user-solid"></i> QQ群：<el-link type="primary" href="https://qm.qq.com/q/CspBa2r6h2"
                target="_blank">952834924</el-link>
              <img src="@/assets/images/qun.jpg" style="width: 80%;object-fit:cover" alt="qun" />
            </p>
            <p>
              <i class="el-icon-chat-dot-round"></i> 微信：<a href="javascript:;">/ luotianyi_y</a>
            </p>
            <p>
              <i class="el-icon-money"></i> qq：<a href="javascript:;" class="qq信息">/ 2282169525</a>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>更新日志</span>
            </div>
          </template>
          <el-collapse accordion>
            <el-collapse-item title="v1.0.0 - 2024-06-11">
              <ol>
                <li>carole-admin系统发布</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="Index">
const version = ref('1.0.0')

function goTarget(url) {
  window.open(url, '__blank')
}
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans",
  "Helvetica Neue",
  Helvetica,
  Arial,
  sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>
