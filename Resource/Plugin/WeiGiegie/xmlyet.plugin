#!name = 喜马拉雅儿童
#!desc = 去除开屏广告,解锁会员
#!openUrl = https://apps.apple.com/app/id1436675436
#!author = AppStore一键下载
#!homepage = https://github.com/IC58G/vpn_tool
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/Troy@2x.png
#!date = 

[Rewrite]
# > 开屏去广告
^https?://xxm\.ximalaya\.com/mobile/album/ad/asaActivate - reject-200

[Script]
# > 喜马拉雅儿童版会员
http-response ^https?:\/\/((.+ximalaya.+)|(.+xmcdn.+))(album\/v2\/trackRecord\/queryTrackRecordsByAlbumIdAndUid|queryByParentId|mobile\/user).*$ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/xmet.js, requires-body=true, timeout=60, tag=xmet

http-request ^https?:\/\/((.+ximalaya.+)|(.+xmcdn.+))(queryTrackRecordsByAlbumIdAndUid|album\/trackRecord\/querySampleTrack|album\/trackRecord\/palyTrack).*$ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/xmck.js, timeout=60, tag=xmck

[MITM]
hostname = xxm.ximalaya.com, *.ximalaya.*, 180.153.255.123, 61.172.194.187
