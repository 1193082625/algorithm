// 对数器
export function checkSort(fun: Function) {
    // 执行前
    console.time();
    let time = 500;
    const maxLen = 500;
    const maxVal = 200;
    const arr1 = new Array(Math.floor(Math.random() * maxLen)).fill(0).map(() => Math.floor(Math.random() * maxVal));
    const arr2 = [...arr1];
    let successed = true;
    while(time >= 0) {
        if(fun(arr1).join('') !== arr2.sort((a, b) => a - b).join('')) {
            successed = false;
        }
        time--;
    }
    // 执行前
    console.timeEnd();
    return successed ? '方法校验通过' : '方法校验失败';
}
