#!name = 蜻蜓FM
#!desc = 解锁vip，(不能登录账号)
#!openUrl = https://apps.apple.com/app/id506685538
#!author = AppStore一键下载
#!homepage = https://github.com/IC58G/vpn_tool
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/Troy@2x.png
#!date = 

[Rewrite]
^https://ad\.qtfm\.cn/api/ - reject
^https://ip\.qtfm\.cn/ip - reject
^https://adlaunch\.qtfm\.cn/launch - reject
^https://woqt2\.qtfm\.cn/v2/userConfig - reject

[Script]
# > 蜻蜓fm 解锁vip，(不能登录账号)
http-response ^https?:\/\/(app|user|recpage-c|entry).qtfm.cn\/(m-bff\/v2\/channel|u2\/api\/v5\/user|v5\/vippage|api\/v1\/personal|m-bff\/v1\/channelpage|m-bff\/v1\/purchase).*$ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/qtfm.js, requires-body=true, timeout=60, tag=qtfm

http-request ^https?:\/\/app\.qtfm\.cn\/m-bff\/v1\/audiostreams\/channel\/ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/qtfmtk.js, timeout=60, tag=qtfmtk

[MITM]
hostname = app.qtfm.cn, user.qtfm.cn, recpage-c.qtfm.cn, entry.qtfm.cn, ad.qtfm.cn, ip.qtfm.cn, adlaunch.qtfm.cn, woqt2.qtfm.cn