#!name = 咪咕视频
#!desc = 解锁会员
#!openUrl = https://apps.apple.com/app/id787130974
#!author = AppStore一键下载
#!homepage = https://github.com/IC58G/vpn_tool
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/Troy@2x.png
#!date = 

[Rewrite]
# > 开屏广告
^https://.*miguvideo\.com/request/sdk - reject-200
^https://common-sc\.miguvideo\.com/task/v7/task-list/cmvideo/visitor - reject-200

[Script]
# > 咪咕视频Vip会员
http-response ^https?:\/\/(play|dis).*miguvideo.com\/(play|dis)(url|play)\/.*$ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/mgsp.js, requires-body=true, timeout=60, tag=mgsp

http-request ^https?:\/\/play.miguvideo.com\/playurl\/v1\/play\/playurl\?2Kvivid=true?.*=true$ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/mgspck.js, timeout=60, tag=mgspck

[MITM]
hostname = *.miguvideo.com