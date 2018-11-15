/**
 * 1、WebStorm配置自动编译
 *   第一步   tsc --init 生成tsconfig.json   改 "outDir": "./js"
 */
function getDate(data: string) {
    console.log(data);
}
let str: string = "Hello TypeScript";
getDate(str);