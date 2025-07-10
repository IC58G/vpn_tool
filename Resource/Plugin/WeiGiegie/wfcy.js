#!name = 悟饭触悦
#!desc = 解锁会员
#!openUrl = https://apps.apple.com/app/id6478100756
#!author = AppStore一键下载
#!homepage = https://github.com/IC58G/vpn_tool
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/Troy@2x.png
#!date = 

[Script]
# > 悟饭触悦 vip
http-response ^https?:\/\/iosv2.cjapi.5fun.com\/user\/ios_store_pay_edition\/members_login\/get_member_info script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/wfcy.js, requires-body=true, timeout=60, tag=wfcy

[MITM]
hostname = iosv2.cjapi.5fun.com