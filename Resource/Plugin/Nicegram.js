/*
 *
 *
#!name= Nicegram Premium 𝕏
#!desc= 对 Nicegram 学习探索;
#!author= binnichtaktiv
#!homepage = https://apps.apple.com/app/id1608870673
#!icon= https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/95/08/31/9508311c-9e94-3038-b267-5d4c8e39cb21/AppIconLLC-0-0-1x_U007epad-0-1-0-85-220.png/460x0w.webp
#!date = 2024-02-24 00:00:00

[Script]
http-response ^https?:\/\/nicegram\.cloud\/api\/v\d\/(ai-assistant\/purchase-list|user\/info|telegram\/auth) script-path=https://he2o.vercel.app/Resource/Plugin/Nicegram.js, requires-body=true, timeout=60, tag=Nicegram Premium 𝕏

[Mitm]
hostname = nicegram.cloud
*
*
*/





 
var body = $response.body;
body = body.replace(/"store_subscription":false/g, '"store_subscription":true');
body = body.replace(/"lifetime_subscription":false/g,'"lifetime_subscription":true');
body = body.replace(/"subscription":false/g,'"subscription":true');
$done({ body });