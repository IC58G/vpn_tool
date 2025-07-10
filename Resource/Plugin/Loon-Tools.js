#!name= Loon基础工具
#!desc= 对【Script Hub(β)、Sub-Store、BoxJs】等功能增强相关学习探索
#!author= @小白脸 @xream @keywos @ckyb、Peng-YM、chavyleung
#!homepage= https://loon-tools.vercel.app
#!icon= https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/Loon/TieTie@2x.png
#!input=Parser_body_max
#!input=Parser_http_timeout
#!select=启用插件随机图标, 启用, 禁用
#!select=替换原始插件图标, 启用, 禁用
#!select=插件随机图标合集, Doraemon(100P),Shin-chan(100P),Weslie-Wolffy(100P),Tom-Jerry(100P),Genshin(160P),Shin-Miya(100P),OnePiece(100P),Stitch(100P),Pokemon(112P),PokemonGif(56P),Digimon(56P),Transformers(48P),Maruko-chan(100P),AttackOnTitan(84P),Naruto(284P)
#!select=Script Hub通知, 开启通知, 关闭通知, 跟随链接
#!select = 节点缓存有效期,1分钟,5分钟,10分钟,30分钟,1小时,2小时,3小时,6小时,12小时,24小时,48小时,72小时,参数传入
#!select = 响应头缓存有效期,1分钟,5分钟,10分钟,30分钟,1小时,2小时,3小时,6小时,12小时,24小时,48小时,72小时,参数传入
#!tag = 功能增强

[Argument]
script-hub.beta_button = switch,false,true,tag=Script Hub(β),desc=关闭开关将不对Script Hub(β)生效
sub-store_button = switch,false,true,tag=Sub-Store,desc=关闭开关将不对Sub-Store生效
chavy.boxjs_button = switch,false,true,tag=BoxJs,desc=关闭开关将不对BoxJs生效

[General]
force-http-engine-hosts = script.hub, *.script.hub

[Rule]
DOMAIN,loon-tools.vercel.app,PROXY

DOMAIN,scripthub.vercel.app,PROXY

DOMAIN,sub-store.vercel.app,PROXY

DOMAIN-SUFFIX,jsdelivr.net,PROXY

[Script]
# ========== Script Hub(β): 重写 & 规则集转换 ==========
http-request ^https?:\/\/script\.hub\/($|edit\/|reload) script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/script-hub.beta.js, timeout=300, tag=Script Hub: 前端, enable={script-hub.beta_button}
http-request ^https?:\/\/script\.hub\/file\/_start_\/.+type=(?:qx-rewrite|surge-module|loon-plugin|all-module) script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/Rewrite-Parser.beta.js, timeout=300, tag=Script Hub: 重写转换, enable={script-hub.beta_button}
http-request ^https?:\/\/script\.hub\/file\/_start_\/.+type=rule-set script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/rule-parser.beta.js, timeout=300, tag=Script Hub: 规则集转换, enable={script-hub.beta_button}
http-request ^https?:\/\/script\.hub\/convert\/ script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/script-converter.beta.js, timeout=300, tag=Script Hub: 脚本转换, enable={script-hub.beta_button}

# ========== Sub-Store ==========
http-request ^https?:\/\/sub\.store\/((download)|api\/(preview|sync|(utils\/node-info))) script-path=https://raw.githubusercontent.com/sub-store-org/Sub-Store/release/sub-store-1.min.js, requires-body=true, timeout=120, tag=Sub-Store Core
http-request ^https?:\/\/sub\.store script-path=https://raw.githubusercontent.com/sub-store-org/Sub-Store/release/sub-store-0.min.js, requires-body=true, timeout=120, tag=Sub-Store Simple
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/sub-store-org/Sub-Store/release/cron-sync-artifacts.min.js, timeout=120, tag=Sub-Store Sync

# ========== BoxJs ==========
http-request ^https?:\/\/(.+\.)?boxjs\.(com|net) script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/box/chavy.boxjs.js, requires-body=true, timeout=120, tag=BoxJs, enable={chavy.boxjs_button}

[Mitm]
hostname = script.hub,*.script.hub, sub.store, boxjs.com,boxjs.net,*.boxjs.com,*.boxjs.net