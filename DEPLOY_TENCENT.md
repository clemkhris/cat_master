# MIAO · CloudBase 部署

正式入口 https://kelve.cn/miao 。Next.js basePath 固定为 /miao（构建时生效）。

| 路径 | 内容 |
| --- | --- |
| /miao | MIAO 首页 |
| /miao/quiz | 原有趣味测评主题目录（具体答题仍是原有占位内容） |
| /miao/petfelt | Petfelt 产品线筹备页 |
| /miao/trends | 潮流资讯筹备页 |
| /miao/studio | 大片定制筹备页 |

## 部署步骤

1. 将本项目提交到其 Git 仓库。在现有 CloudBase 环境新建独立云托管服务 `miao-web`，选择本仓库的实际分支。
2. 构建目录 `.`，Dockerfile `Dockerfile`，容器端口 `8080`。不要使用关系测评项目的仓库或覆盖 emotion-h5 服务。
3. 本次公开站点无需配置 Supabase 密钥。Docker 构建排除了 .env 文件；原有登录模板保留，但海外 Supabase 登录尚未做大陆迁移，也未作为公开站点上线能力验证。
4. HTTP 网关 → 已绑定的 kelve.cn → 添加路由：访问路径 `/miao`，关联云托管 `miao-web`，开启路径透传，关闭网关身份认证与跨域设置。
5. 保留现有关系测评路由。`/miao` 与 `/relationship/partner` 关联各自的服务；不要将域名整个 CNAME 改到新服务。共用现有域名网关和证书即可。
6. 若也需要 www.kelve.cn/miao，需先确认 www.kelve.cn 已绑定、配置 DNS，然后为这个域名添加相同 /miao 路由。
7. 部署后检查 /miao/healthz，并逐页访问四个栏目、刷新页面、确认样式与导航正常。访问 /miao/_next/... 的请求也必须原样转发。

MIAO 不使用关系测评的 APP_ORIGIN。关系测评现有 APP_ORIGIN 保持它自己的域名。

## 本机验证

npm ci
npm run build
npm start -- --port 3000

打开 http://localhost:3000/miao 。Docker 使用 Next.js standalone 服务启动。未来新增 public 文件夹时，需要在 Dockerfile runner 阶段复制该文件夹；当前项目没有 public 文件夹。

证书与 ICP 备案继续使用对应域名的现有配置；上线前确认网关与云托管处于正常运行状态。

## 本次验证

生产构建及 TypeScript 检查通过；ESLint 通过。本机 standalone 服务的五个页面、/miao/healthz 与 11 个静态资源均返回 200，栏目链接包含 /miao 前缀。Docker daemon 未启动，未执行镜像构建；实际 CloudBase 部署、域名访问和大陆手机网络仍待验证。代码尚未推送。
