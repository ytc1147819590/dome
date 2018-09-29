//async function f() {
//    throw new Error('出错了');
//}
//
//f().then(
//    v => console.log(v),
//    e => console.log(e)
//)
// Error: 出错了

async function f() {
    try {
        await Promise.reject('出错了');
    } catch(e) {
    }
    return await Promise.resolve('hello world');
}

f()
    .then(v => console.log(v))
// hello world