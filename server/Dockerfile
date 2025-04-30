# 使用多阶段构建减少最终镜像体积
FROM node:22-alpine AS base


# 参数和变量定义
#dockerfile 是构建时, docker compose 是docker 运行时
# ARG 对于名称,可以在构建时传入
ARG PROJECT_DIR="/app"
ENV PNPM_HOME="/pnpm" \
  PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=productio
# 安装全局依赖 npm
RUN npm i -g pm2
RUN corepack enable && corepack prepare pnpm@latest --activate

# 设置工作目录
WORKDIR $PROJECT_DIR 
RUN echo "项目目录设置为: $PROJECT_DIR"


# nest 打包构建有些多，直接全带走
# COPY .  ./  相等
COPY .  ./


# 设置时区
RUN apk add --no-cache tzdata && \
  ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
  echo 'Asia/Shanghai' > /etc/timezone

# 生产依赖阶段
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --prod --frozen-lockfile
# 构建阶段
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --frozen-lockfile && \
  pnpm run build

# --- 生产阶段 ---
FROM base AS production
# 复制生产依赖
COPY --from=prod-deps $PROJECT_DIR/node_modules $PROJECT_DIR/node_modules
# 复制构建产物
COPY --from=build $PROJECT_DIR/dist $PROJECT_DIR/dist

# 暴露端口
EXPOSE ${APP_PORT}

# 启动命令
CMD ["pm2-runtime", "dist/main.js"] 
