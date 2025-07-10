#!name = 网易云音乐
#!desc = 解锁黑胶会员
#!openUrl = https://apps.apple.com/app/id590338362
#!author = AppStore一键下载
#!homepage = https://github.com/IC58G/vpn_tool
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/Troy@2x.png
#!date = 

[Script]
# 播放器会员皮肤
http-request ^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js, timeout=60, tag=wangyiyun

# 搜索结果会员歌曲
http-request ^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js, timeout=60, tag=wangyiyun

# 播放器会员歌曲
http-request ^https:\/\/interface3?\.music\.163\.com\/eapi\/v3\/song\/detail script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js, timeout=60, tag=wangyiyun

http-request ^https:\/\/interface3?\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js, timeout=60, tag=wangyiyun

http-request ^https:\/\/interface3?\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js, timeout=60, tag=wangyiyun

# 侧边栏会员等级
http-request ^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js, timeout=60, tag=wangyiyun

# 首页歌单会员歌曲
http-request ^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js, timeout=60, tag=wangyiyun

# 会员认证
http-request ^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js, timeout=60, tag=wangyiyun

[MITM]
hostname = *music.163.com