#!name= 联合国儿童基金会 𝕏
#!desc= 对【ONE.一个、海角社区】等应用的相关学习探索;
#!author= 联合国儿童基金会[https://t.me/Jsforbaby]
#!homepage= https://unicef-porn.vercel.app
#!icon= https://raw.githubusercontent.com/IC58G/vpn_tool/main/Resource/Icon/baby.png
#!date = 2025-07-21 03:00:00

[Argument]
plpl_button = switch,false,true,tag=啪哩啪哩,desc=关闭开关将不对啪哩啪哩生效
One_button = switch,false,true,tag=ONE.一个,desc=关闭开关将不对ONE.一个生效
ydm_button = switch,false,true,tag=淫荡猫系列,desc=关闭开关将不对淫荡猫系列生效
haijiao_button = switch,false,true,tag=海角社区,desc=关闭开关将不对海角社区生效
mjgshd_button = switch,false,true,tag=面具公社,desc=关闭开关将不对面具公社生效
mdsq_button = switch,false,true,tag=麻豆社区,desc=关闭开关将不对麻豆社区生效
Player = select,"Safari","Filebar","Forward","SenPlayer","yyb","yybx","Alook","Stay",tag=播放器,desc=选择你要使用的播放器
one2jj_button = switch,false,true,tag=无夜视频,desc=关闭开关将不对无夜视频生效
jtsp_button = switch,false,true,tag=加藤视频,desc=关闭开关将不对加藤视频生效
mr_button = switch,false,true,tag=Mr.好色,desc=关闭开关将不对Mr.好色生效
xvideos_button = switch,false,true,tag=xvideos,desc=关闭开关将不对xvideos生效
luping_button = switch,false,true,tag=直播录屏,desc=关闭开关将不对直播录屏生效
zks_button = switch,false,true,tag=足控社,desc=关闭开关将不对足控社生效
zmq_button = switch,false,true,tag=字母圈,desc=关闭开关将不对字母圈生效
ins_button = switch,false,true,tag=ins社区,desc=关闭开关将不对ins社区生效

[Rule]
DOMAIN,unicef-porn.vercel.app,PROXY

[Rewrite]
# 面具公社去广告
^https?:\/\/(mfjk|gnjk\d*|gnjk3|jk|buyaoda).+\.com\/request_game\/v3\/game\/list.*$ url reject-dict

# 加藤视频去广告
^https?://.+/shorter/resource/getAdInfoBySpaceId\?ad - reject
^https://.+/shorter/resource/bySpaceId\?adSpaceId - reject
^https://.+/shorter/game/moreList - reject

# 淫荡猫系列去广告
^https:\/\/[^\/]+\.(cloudfront\.net|(pxyzjmspfl|rnuozrryfq|looufegitw|h6b7f5t4n|x5t5d5a4c|djfrhyhtuo|gtlxb)\.work)\/api\/(sys\/partner\/list|activity\/indexActs|sys\/advertisement\/list|sys\/getImgAndVideoCdnList|aibox\/entranceConfig) - reject-200

# ins社区去广告
https://x2.ins620.com/party/common/advertising/public/adv/list - reject

[Script]
# ========== 啪哩啪哩 ========== https://web.jwybg.com
http-response ^https:\/\/(?:\S+\/video\/info\/.*\?token=\S+) script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/plpl.js, requires-body=true, timeout=60, tag=啪哩啪哩_提取高清视频&无限看会员视频, enable={plpl_button}

# ========== ONE.一个 ========== https://yg.one 
http-response ^https?:\/\/(api|jmtp)(.*-uat)?\.\w+\.com\/v2.5\/(bootstrap|user\/login|user\/avatarFrame|article\/discovery|navigation|article\/detail|vip\/download|my\/userExtraInfo) script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/One.js, requires-body=true, timeout=60, tag=ONE.一个_解锁所有内容(包含点播付费), 去除部分广告, enable={One_button}

# ========== 淫荡猫系列 ========== 
http-response ^https:\/\/[^\/]+\.(cloudfront\.net|(pxyzjmspfl|rnuozrryfq|looufegitw|h6b7f5t4n|x5t5d5a4c|djfrhyhtuo|gtlxb)\.work)\/api\/user\/base\/info script-path=https://raw.githubusercontent.com/chmg2025/js/main/ydm.js, requires-body=true, timeout=60, tag=淫荡猫系列_解锁vip, enable={ydm2_button}
http-response ^https:\/\/[^\/]+\.(cloudfront\.net|(pxyzjmspfl|rnuozrryfq|looufegitw|h6b7f5t4n|x5t5d5a4c|djfrhyhtuo)\.work)\/api\/video\/getVideoById script-path=https://raw.githubusercontent.com/chmg2025/js/main/ydm.js, requires-body=true, timeout=60, tag=淫荡猫系列_解锁视频, enable={ydm2_button}
http-response ^https:\/\/[^\/]+\.(cloudfront\.net|(pxyzjmspfl|rnuozrryfq|looufegitw|h6b7f5t4n)\.work|x5t5d5a4c|djfrhyhtuo)\/api\/community\/dynamic\/dynamicInfo script-path=https://raw.githubusercontent.com/chmg2025/js/main/ydm.js, requires-body=true, timeout=60, tag=淫荡猫系列_解锁社区, enable={ydm_button}

# ========== 海角社区 ========== https://haijiao.com
http-response ^https?:\/\/haijiao\.com\/api\/(topic\/\d+|banner\/banner_list)$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/haijiao.js, requires-body=true, timeout=60, tag=海角社区_解锁付费会员视频, enable={haijiao_button}
 
# ========== 面具公社 ========== https://xa1jgfbdlwf2ncxq.411108.xyz:8283
http-response ^https?:\/\/((mfjk|gnjk\d*|buyaoda).*\.com|jk\.bnhwq672q3\.com)\/(playerinfo|api\/home\/popup|api\/get_?advert).*$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/mjgsad.js, requires-body=true, timeout=60, tag=面具公社_解锁会员, enable={mjgshd_button}
http-response ^https?:\/\/(mfjk|gnjk\d*|buyaoda|gnjk2\.kzfbz|jk\.bnhwq672q3)\..*\.com\/(api\/(comic|video|short_movie_info|novel|gallery|vip|index|video\/info)|request_rust_video\/ai\/init_info).*$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/mjgshd.js, requires-body=true, timeout=60, tag=解锁会员, enable={mjgshd_button}

# ========== 麻豆社区 ========== https://d1skbu98kuldnf.cloudfront.net
http-response ^https://d1skbu98kuldnf.cloudfront.net/api/app/media/play script-path=https://raw.githubusercontent.com/LovedGM/Task/main/md.js, requires-body=true, timeout=10, tag=麻豆社区_解锁站内所有付费&会员视频, enable={mdsq_button}, argument=[{Player}]

# ========== 无夜视频 ========== https://one2jj.com
http-response ^https?:\/\/((cdn\.a2pi3\.com|xiapo6\.com|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(\/api\/vodapi\.html|\/Vodapi\.html|\/vodapi\.html))$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/one2jj.js, requires-body=true, timeout=60, tag=无夜视频_解锁会员, enable={one2jj_button}

# ========== 加藤视频 ========== https://www.jt10.live
http-response ^https?:\/\/.+\/shorter\/(video\/longvideoinfo|resource\/adInfoPageList\?adSpaceId|user\/getUser|resource\/getWindowNotice|tabIconConfigView|user\/getVipPvg|video\/home|video\/search).*$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/jtsploon.js, requires-body=true, timeout=60, tag= 加藤视频_vip解锁,付费视频解锁,下载,会员线路,去广告++, enable={jtsp_button}, argument=[{Player}]
http-request ^https?://.+\/shorter\/anime\/tbookchapter0\/info\?bookId script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/jtsploon.js, timeout=60, tag= 加藤视频_解锁漫画, enable={jtsp_button}, argument=[{Player}]

# ========== Mr.好色 ========== https://d2kz22zwxc5env.cloudfront.net
 http-response https://((cpmg23|3e8qs).com|[^\/]+\.cloudfront.net)/api/app/mine/info script-path=https://raw.githubusercontent.com/chmg2025/js/main/mr.js, requires-body=true, timeout=60, tag=Mr.好色_会员解锁, enable={mr_button}
 http-response ^https:\/\/((cpmg23|3e8qs)\.com|[^\/]+\.cloudfront\.net)\/api\/app\/vid\/info\?data=.*$ script-path=https://raw.githubusercontent.com/chmg2025/js/main/mr.js, requires-body=true, timeout=60, tag=Mr.好色_视频解锁, enable={mr_button}
 http-response https://((cpmg23|3e8qs).com|[^\/]+\.cloudfront.net)/api/app/ping/domain/h5 script-path=https://raw.githubusercontent.com/chmg2025/js/main/mr.js, requires-body=true, timeout=60, tag=Mr.好色_广告去除, enable={mr_button}

# ========== xvideos ========== https://dlqrowpypqqsg.cloudfront.net
http-response ^https?:\/\/([a-z0-9-]+\.)*cloudfront\.net\/api\/app\/mine\/info script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/xvideos.js, requires-body=true, timeout=60, tag=xvideos_解锁会员&金币视频, enable={xvideos_button}

# ========== 直播录屏 ========== https://www.lupingik.top
http-response ^https:\/\/[^\/]+\/.*vod\/play\/id\/.*\.html$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/luping.js, requires-body=true, timeout=60, tag=直播录屏_解锁会员&金币视频, enable={luping_button}

# ========== 足控社 ========== https://w2.zks01.shop
http-response ^https?:\/\/.+\/appapi\/(detail|buyPicture|getUserInfo|goldBuyVideo)\/ script-path=https://raw.githubusercontent.com/chmg2025/script/main/zks.js, requires-body=true, timeout=60, tag=足控社区_解锁会员&金币视频, enable={zks_button}

# ========== 字母圈 ========== https://www.zmqurl3.top
http-response ^https?:\/\/[^\/]+\/index\.php\/vod\/play\/id\/\d+\/sid\/\d+\/nid\/\d+\.html script-path=https://raw.githubusercontent.com/chmg2025/js/main/zmq.js, requires-body=true, timeout=60, tag=字母圈_解锁VIP&金币视频, enable={zmq_button}

# ========== ins社区 ========== https://ins340.com
http-request https:\/\/x2\.ins620\.com\/post\/app\/p\/post\/private\/(info|page|similar\/page) script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/insck.js, timeout=60, tag=ins社区_解锁VIP&金币 付费视频, enable={ins_button}
http-response https://x2.ins620.com/user/app/u/user/private/info script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/ins.js, requires-body=true, timeout=60, tag=ins社区_解锁VIP&金币 付费视频, enable={ins_button}

[Mitm]
hostname = apiaws.*.com,apiaws.*.cn,*apiaws*,api.pjq6he.com,qqcapi.*.com,www.nj5byj6j.com,api.f38khx.com,api.3459381.com,api.61c76a0.com,api.87735d5.com,api.afe9a49.com,api.c6dd5cc.com,api.2b37894.com,api.35a46dd.com,api.43b8477.com,api.5ce3771.com,api.632d809.com,api.b675211.com,api.a9a2bc4.com,api.8eb269a.com,api.4c86d03.com,api.979bb9e.com,api.988068b.com,api.9cbd862.com,api.c2e777b.com,api.b676039.com,api.ab1e7ee.com,api.5ed249d.com,api.2b1daea.com,api.4934430.com,api.645fb8d.com,api.53cuk7g.com,api.5ebd5d.com,api.em1oifd0.com,api*-uat.*.com,jmtp.*.com,api.k55n2r.com,api.zbdk8ws.com,api.26bb4xt.com,api.vf5x3hv.com,*.cloudfront.net,*.pxyzjmspfl.work,*.rnuozrryfq.work,*.looufegitw.work,*.h6b7f5t4n.work,*.x5t5d5a4c.work,*.djfrhyhtuo.work,*.gtlxb.work,haijiao.com,gnjk.*.com,mfjk.*.com,buyaoda.*.com,jk.*.com,gnjk3.*.com,*.cloudfront.net,cdn.a2pi3.com,xiapo6.com,e6xun6l.wy6z0uq.xyz,ldyc3rs.0mlptkl.xyz,58z8gxu.pzmn7ku.xyz,117.62.22.92:56753,5jsd6q7.jnfkdtm.xyz,yw4pk9h.7fw2snb.xyz,m3pkeg2.v4l0p7y.xyz,ip6vu33.im0684h.xyz,bor4lch.8l6ldmz.xyz,zqlhcn.kl9117.xyz,hkg2zx.stejnu.xyz,zvqldx.xv8gvn.xyz,kuhikr.1t3vwf.xyz,s4788x.taqndh.xyz,xkewutdekf873sr.chairsr.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,hkg2zx.stejnu.xyz,zvqldx.xv8gvn.xyz,kuhikr.1t3vwf.xyz,s4788x.taqndh.xyz,xkewutdekf873sr.chairsr.com,103.85.254.233,omfnmh.x2b3w6.xyz,sgwitxgwit231sr.xunwxc.com,zqlhcn.kl9117.xyz,ssgwew231s.uzqew4qi.info,ykofye.qklmoq.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,lieeys42jdi2kd.cx4c5mv7.info,fjboni.jn6588.xyz,rylzit.wqws5z.xyz,riwnkx.sw05uv.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,lieeys42jdi2kd.cx4c5mv7.info,fjboni.jn6588.xyz,rylzit.wqws5z.xyz,riwnkx.sw05uv.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,rylzit.wqws5z.xyz,riwnkx.sw05uv.xyz,bsxqtd.xk8q7w.xyz,grvgdq.81fbg2.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,rylzit.wqws5z.xyz,riwnkx.sw05uv.xyz,bsxqtd.xk8q7w.xyz,grvgdq.81fbg2.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,rdxijq.vo9ugl.xyz,bpitbu.ouxf9g.live,tjactb.xk2nsy.live,us6tp7.dkr9cv.live,qsukip.9jts57.live,wkqyx6.qdokqj.live,fqohbx.bkljtx.live,zihjyv.jajrc1.live,y7uyqg.hl8dbl.live,qrdure.youngnoble.cn,kpoe2e.x8w7t3.live,*jttv*,kpoe2e.x8w7t3.live,zihjyv.jajrc1.live,fceyeg.johjxe.com,*.vo9ugl.xyz,zqlhcn.kl9117.xyz,bsxqtd.xk8q7w.xyz,grvgdq.81fbg2.xyz,vcryyw.uc86fy.xyz,xospby.mldo9k.xyz,pmmqls.gregdoro.com,103.85.254.233,roa6fi.lyr6if.live,gp1wpm.xcg3zr.xyz,nfmq0v.lknlqz.xyz,nhppjkb.z5x6pzr.xyz,fwroeor.revxcvx.xyz,uetuys234ls.pbog5txn.app,fwroeor.revxcvx.xyz,hrp27mr.1ugq1uf.xyz,nhppjkb.z5x6pzr.xyz,zd7uwox.8ewxvhz.xyz,xkewutdekf873sr.chairsr.com,5tlsw6r.7n26ytu.xyz, www.lupingik.top,lupingik.top, suning.679134.xyz, zimuquan.top,*.zimuquan.top,*.zimuquan3.top,*.zimuquan10.uk, x2.ins620.com