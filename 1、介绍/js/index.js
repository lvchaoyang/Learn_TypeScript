"use strict";
/**
 * 1、WebStorm配置自动编译
 *   第一步   tsc --init 生成tsconfig.json   改 "outDir": "./js"
 */
function getDate(data) {
    console.log(data);
}
var str = "Hello TypeScript";
getDate(str);
