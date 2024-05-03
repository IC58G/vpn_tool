#!name = 芒果TV
#!desc = 去广告,解锁会员
#!openUrl = https://apps.apple.com/app/id629774477
#!author = AppStore一键下载
#!homepage = https://github.com/IC58G/vpn_tool
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/Troy@2x.png
#!date = 

[Rewrite]
^https?://mobile.da.mgtv.com\/m\/page - reject

[Script]
# > 芒果TV,Vip+会员画质+去广告,页面优化
http-response ^https?:\/\/.*mgtv.com.*(GetUserInfo|module\/list\?_support|app\/bdboot|pullReleaseInfo|floor\/detail|video\/source|entry\?_support).*$ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/mgtv.js, requires-body=true, timeout=60, tag=mgtv

http-request ^https?:\/\/mobile-stream\.api\.mgtv\.com\/v1\/video\/source\? script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/mgtk.js, timeout=60, tag=mgtk

[MITM]
hostname = *mgtv.com