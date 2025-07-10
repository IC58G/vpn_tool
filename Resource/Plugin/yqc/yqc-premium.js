#!name = Loon yqc-premium专享 插件仓库
#!desc = yqc-premium专享 插件仓库，一键安装，方便快捷。
#!openUrl = https://🎈.com
#!author = 食用前必做操作
#!homepage = https://t.me/c/2107874396/10
#!icon = https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/yqc-premium.png
#!date = 2024-05-18

[Rule]
DOMAIN, gist.githubusercontent.com, PROXY

[Script]
http-request ^https?:\/\/xn--ck8h\.com script-path = https://gist.githubusercontent.com/IC58G/4bcc95753d634c7bf083e9a6caabe6da/raw/gallery.js, requires-body = true, timeout = 120, tag = Loon yqc-premium专享 插件仓库

[Mitm]
hostname = xn--ck8h.com