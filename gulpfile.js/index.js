    const {series,parallel,src,dest} = require('gulp');
    const {exec} = require('child_process');
    const {EventEmitter} = require('events');
// 创建 task 和 导出 task
// 1.公开任务 - 直接导出,被 gulp 命令执行
// 2.私有任务 - 内部使用，通常结合 series 或 parallel 使用
    /*
    function clean(callback) {
        // ...
        callback()
    }
    function build(callback) {
        // ...
        callback();
    }
    exports.build = build;
    exports.default = series(clean,build);
    */

// 组合 task
// 1. series - 继发执行
// 2. parallel - 最大并发执行
// 3. 以上两者组合可被嵌套至任意深度
/*
    function clean(callback) {
        // ...
        callback();
    }
    function build(callback) {
        // ...
        callback();
    }
    // exports.default = series(clean,build);
    exports.default = parallel(clean,build);
*/
// 异步执行
// 1.返回 stream
/*
    function streamTask() {
        return src('*.js')
            .pipe(dest('output'));
    }
    exports.default = streamTask;
*/
// 2. 返回 promise
/*
    function promiseTask() {
        return Promise.resolve('promise task');
    }
    exports.default = promiseTask;
*/
// 3. 返回 child process
/*
    function childProcessTask() {
        console.log( exec('date') );
        return exec('date');
    }
    exports.default = childProcessTask;
*/

// 3. 返回 EventEmitter 
/*
    function EventEmitterTask() {
        const emmiter = new EventEmitter();
        setTimeout(()=>emmiter.emit('finish'),250);
        return emmiter
    }
    exports.default = EventEmitterTask;
*/

// 4. 使用 callback
/*
    function callbackTask(callback) {
        // ...
        callback();
    }
    exports.default = callbackTask;
*/
/*
    const fs = require('fs');
    function passingCallback(callback) {
        fs.access('gulpfile.js',callback); // fs.access('') 判断文件存不存在
    }
    exports.default = passingCallback; */


// 5. 返回 observable - can't test

// 6. ** gulp 不在支持同步任务, 要使用以上 5 种方式编写任务， 或使用 async or await
    const fs = require('fs');
    async function test() {
        const fileBuffer = fs.readFileSync('package.json');
        console.log('fileBuffer',fileBuffer);
        await Promise.resolve('result');
    }
    exports.default = test;

    


