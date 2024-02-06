'use strict';

function transformToString(obj) {
    if (typeof obj === "object") {
        return JSON.stringify(obj);
    }
    return obj;
}
/**
 * 构建 Surge 响应体
 *
 * @param props 响应体属性
 * @description 该函数将会自动将对象转换为 JSON 字符串，因此你可以直接传入对象
 */
function buildResponse(props) {
    if (props.body) {
        props.body = transformToString(props.body);
    }
    $done({
        // response: {
        ...props,
        // },
    });
}
/**
 * 发送通知
 *
 * @param title 标题
 * @param subtitle 副标题
 * @param body 内容
 * @description 该函数将会自动将对象转换为 JSON 字符串，因此你可以直接传入对象
 */
function sendNotification(title, subtitle, body) {
    title = transformToString(title);
    subtitle = transformToString(subtitle);
    body = transformToString(body);
    $notification.post(title, subtitle, body);
}
const methods = ["get", "put", "delete", "head", "options", "patch", "post"];
/**
 * 发送请求
 * @param props 请求参数
 * @param callback 回调函数
 */
const httpClient = {};
for (let method of methods) {
    // @ts-ignore
    httpClient[method] = (props, callback) => {
        $httpClient[method](props, callback);
    };
}

/**
 * @url https://api.elpass.app/device/activate-with-key
 */
function elpassActivateWithKey() {
    buildResponse({
        body: {
            code: 0,
            license: "没有密钥 这个注入伪造信息是没有用的",
        },
    });
}

/**
 * @url https://api.elpass.app/device/management
 */
function elpassManagement() {
    buildResponse({
        body: {
            email: "QiuChenly@52pojie.com",
            subscriptionBillingPeriod: null,
            subscriptionEndDate: 99999502400,
            subscriptionSource: null,
            autoRenew: true,
            trial: false,
        },
    });
}
/**
 * @url https://api.elpass.app/device/init
 */
function elpassInit() {
    buildResponse({
        body: {
            code: 0,
            subscriptionBillingPeriod: null,
            subscriptionEndDate: 99999502400,
            subscriptionSource: null,
            autoRenew: true,
            trial: false,
        },
    });
}

/**
 * @url https://api.lemonsqueezy.com/v1/licenses/activate
 */
function lemonSqueezyActive() {
    buildResponse({
        body: {
            activated: true,
            instance: {
                id: "wibus-wee",
            },
            error: null,
        },
    });
}

function lemonsqueezyValidate() {
    buildResponse({
        body: {
            valid: true,
            error: null,
        },
    });
}

/**
 * Paddle activation
 * @url https://v3.paddleapi.com/3.2/license/activate
 */
function paddleActivate() {
    const body = $request.body;
    if (!body) {
        buildResponse({
            body: {
                success: false,
                response: {
                    error: "[Surge] Activator: No body found",
                },
            },
        });
        return;
    }
    let _body = body.split("&");
    let product_id = "";
    for (let k of _body) {
        if (k.indexOf("product_id") != -1) {
            product_id = k.split("=")[1];
        }
    }
    buildResponse({
        body: {
            success: true,
            response: {
                product_id: product_id,
                activation_id: "QiuChenly",
                type: "personal",
                expires: 1,
                expiry_date: 1999999999999,
            },
        },
    });
}

/**
 * Paddle verification
 * @url https://v3.paddleapi.com/3.2/license/verify
 */
function paddleVerify() {
    let body = {
        success: true,
        response: {
            type: "personal",
            expires: 1,
            expiry_date: 1999999999999,
        },
    };
    buildResponse({
        body,
    });
}

/**
 * @url https://backend.raycast.com/api/v1/me
 */
function raycastActivate() {
    // activeWithReRequest();
    activeWithResponse();
}
function activeWithResponse() {
    // sendNotification("Raycast", "Activate Inject", "Catched - Response Pattern");
    let body = JSON.parse($response.body);
    console.log("raycastActivate: body", body);
    buildResponse({
        headers: {
            ...$response.headers
        },
        body: {
            ...body,
            eligible_for_pro_features: true,
            has_active_subscription: true,
            eligible_for_ai: true,
            eligible_for_gpt4: true,
            eligible_for_ai_citations: true,
            eligible_for_developer_hub: true,
            eligible_for_application_settings: true,
            publishing_bot: true,
            has_pro_features: true,
            has_better_ai: true,
            can_upgrade_to_pro: false,
            admin: true,
            // name: "MITM YOU!",
        }
    });
    // sendNotification("Raycast", "Activate Success", "Done");
}

/**
 * @url https://backend.raycast.com/api/v1/me/trial_status
 */
function raycastTrialStatus() {
    const body = $request.body || "{}";
    const data = JSON.parse(body);
    data["organizations"] = [];
    data["trial_limits"] = {
        "commands_limit": 999,
        "quicklinks_limit": 999,
        "snippets_limit": 999
    };
    buildResponse({
        body: data
    });
}

// *://audio-ak-spotify-com.akamaized.net/*$header=content-range:/\/\d\d\d\d\d\d$/,redirect=noop-0.5s.mp3
// *://audio-akp-quic-spotify-com.akamaized.net/*$header=content-range:/\/\d\d\d\d\d\d$/,redirect=noop-0.5s.mp3
// *://audio-fa.scdn.co/*$header=content-range:/\/\d\d\d\d\d\d$/,redirect=noop-0.5s.mp3
// *://creativeservice-production.scdn.co/*$header=content-range:/\/\d\d\d\d\d\d$/,redirect=noop-0.5s.mp3
/**
 * @url audio-ak-spotify-com.akamaized.net
 * @url audio-akp-quic-spotify-com.akamaized.net
 * @url audio-fa.scdn.co
 * @url creativeservice-production.scdn.co
 *
 * @redirect https://raw.githubusercontent.com/texnikru/blank-mp3s/master/1sec.mp3
 */
function spotifyRemoveAds() {
    sendNotification("Spotify Remove Ads", "请求 MP3", "");
    const mp3 = "https://raw.githubusercontent.com/texnikru/blank-mp3s/master/1sec.mp3";
    httpClient.get({ url: mp3 }, (error, response, data) => {
        if (error) {
            sendNotification("Spotify Remove Ads", "MP3 请求失败", error);
            return buildResponse({
                status: 500,
                body: error
            });
        }
        buildResponse({
            status: response.status,
            headers: response.headers,
            body: data,
        });
    });
}

const activator = {
    lemonSqueezy: {
        base: "https://api.lemonsqueezy.com/v1/licenses",
        activate: lemonSqueezyActive,
        validate: lemonsqueezyValidate,
    },
    paddle: {
        base: "https://v3.paddleapi.com/3.2/license",
        activate: paddleActivate,
        validate: {
            base: "verify",
            func: paddleVerify,
        },
    },
    // craft: {
    //   base: "https://api.craft.do/auth/v3",
    //   activate: {
    //     base: "profile",
    //     func: craftActivate,
    //   },
    // },
    elpass: {
        base: "https://api.elpass.app/device",
        activate: {
            base: "activate-with-key",
            func: elpassActivateWithKey,
        },
        customs: [
            {
                base: "management",
                func: elpassManagement,
            },
            {
                base: "init",
                func: elpassInit,
            },
        ],
    },
    spotify: {
        base: [
            // "https://audio-ak-spotify-com.akamaized.net", // 这个好像是真正的音乐获取地址...
            "https://audio-akp-quic-spotify-com.akamaized.net",
            "https://audio-fa.scdn.co",
            "https://creativeservice-production.scdn.co",
            "https://audio4-fa.scdn.co"
        ],
        customs: [
            {
                base: "*",
                func: spotifyRemoveAds,
            },
        ]
    },
    raycast: {
        base: "https://backend.raycast.com/api/v1",
        activate: {
            base: "me",
            func: raycastActivate,
            type: "http-response",
        },
        customs: [
            {
                base: "me/trial_status",
                func: raycastTrialStatus,
            }
        ]
    }
};

const url = $request.url;
/**
 * Determine whether the URL matches the base
 */
function isMatchBase(url, base) {
    if (Array.isArray(base)) {
        for (let item of base) {
            if (url.includes(item)) {
                return true;
            }
        }
        return false;
    }
    return url.includes(base);
}
/**
 * Automatic execution of the corresponding function according to the URL
 */
function launch() {
    for (let module in activator) {
        if (isMatchBase(url, activator[module].base)) {
            for (let key in activator[module]) {
                if (key === "base")
                    continue;
                if (Array.isArray(activator[module][key])) {
                    for (let custom of activator[module][key]) {
                        if (url === `${activator[module].base}/${custom.base}`) {
                            return custom.func();
                        }
                    }
                    continue;
                }
                if (typeof activator[module][key] === "object") {
                    if (url ===
                        `${activator[module].base}/${activator[module][key].base}`) {
                        return activator[module][key].func();
                    }
                }
                else if (!url.includes(`${activator[module].base}/${key}`)) {
                    return;
                }
                if (typeof activator[module][key] === "function") {
                    return activator[module][key]();
                }
            }
        }
    }
    console.log(`[activator] ${url} is not matched`);
    returnDefaultResponse();
    // $done();
    return;
}
function returnDefaultResponse() {
    console.log(`[activator] returnDefaultResponse: ${url} - ${$request.method.toLowerCase()}`);
    // @ts-expect-error
    httpClient[$request.method.toLowerCase()]({
        url: $request.url,
        headers: $request.headers
    }, (err, response, _data) => {
        if (!_data) {
            console.log("returnDefaultResponse: _data is null", err);
            buildResponse({
                status: 500,
                body: {}
            });
        }
        const res = {
            status: response.status,
            headers: response.headers,
            body: _data
        };
        buildResponse(res);
    });
}

launch();
