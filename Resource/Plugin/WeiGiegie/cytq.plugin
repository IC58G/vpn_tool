#!name = 彩云天气
#!desc = 去广告，解锁会员。
#!openUrl = https://apps.apple.com/app/id847764912
#!author = AppStore一键下载
#!homepage = https://github.com/IC58G/vpn_tool
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/Troy@2x.png
#!date = 

[Rewrite]
# 普通版广告
^https:\/\/ad\.cyapi\.cn\/v2\/req\?app_name=weather - reject-dict

[Script]
# 赏叶赏花
http-response ^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\?app_name=weather script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/cytq.js, requires-body=true, timeout=60, tag=cytq

# 解锁vip
http-response ^https:\/\/biz\.cyapi\.cn\/v2\/user script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/cytq.js, requires-body=true, timeout=60, tag=cytq

# 卫星云图 48小时预报
http-request ^https:\/\/wrapper\.cyapi\.cn\/v1\/(satellite|nafp\/origin_images) script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/cytq.js, timeout=60, tag=cytq

[MITM]
hostname = *.cyapi.cn