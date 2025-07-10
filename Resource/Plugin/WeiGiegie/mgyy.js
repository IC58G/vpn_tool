#!name = 咪咕音乐
#!desc = 解锁会员
#!openUrl = https://apps.apple.com/app/id725215315
#!author = AppStore一键下载
#!homepage = https://github.com/IC58G/vpn_tool
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/Troy@2x.png
#!date = 

[Rewrite]
^https://app\.c\.nf\.migu\.cn/member/api/marketing/text - reject
^https://app\.c.nf\.migu\.cn/payment/watch-ad - reject-200
^https://h5\.nf\.migu\.cn/app/v4/p/pendant-ad/index - reject

[Script]
# > 咪咕音乐vip、音质、下载
http-response ^https?:\/\/(u|c|app).(musicapp|c.nf).migu.cn.*(user\/(queryUserInfo.do|member\/center))|column\/(startup-pic-with-ad|marketing\/advertising)|resource\/skin\/list\/.*$ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/miguyinyue.js, requires-body=true, timeout=60, tag=miguyinyue

http-request ^https?:\/\/app.(c|pd).nf.migu.cn\/.*\/(listen-url|music\/batchQueryMusicPolicy|download-url).*$ script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/migu.js, timeout=60, tag=migu

[MITM]
hostname = app.pd.nf.migu.cn, c.musicapp.migu.cn, u.musicapp.migu.cn, app.c.nf.migu.cn, h5.nf.migu.cn