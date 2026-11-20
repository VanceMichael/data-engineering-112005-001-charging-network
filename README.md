# 充换电设施目录

该项目汇集运营方公开的站点、枪口、漫游关系和维护公告，供设施规划与车辆服务查询使用。`fixtures/observations.json` 是用于本地联调的合成来源记录，保留运营方、记录身份、采集顺序及各来源发布的事实，不代表真实设施或实时状态。

本地环境使用 Node.js 22。运行 `npm test` 可检查合成资料是否可解析；容器环境可运行 `docker build -t charging-network-catalog .`，随后运行 `docker run --rm charging-network-catalog`。
