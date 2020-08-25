
// *异步背后的就是靠event loops，在HTML standard定义的
// *事件，用户交互，脚本，渲染，网络这些都是我们所熟悉的东西，他们都是由event loop协调的。触发一个click事件，进行一次ajax请求，背后都有event loop在运作。

// ?task
// *一个event loop 有一个或者多个task队列
// *task队列就是一个先进先出的队列，由指定的任务源去提供任务

// ?哪些是task的任务源呢
// *1.DOM操作任务源 进行相应的DOM操作
// *2.用户交互任务源：进行click，input之类的操作
// *3.网络任务源：被用来响应网络活动
// *4.history traversal任务源: 当调用history.back()等类似的api时，将任务插进task队列

// 包含：
// *setTimeout，setInterval, I/O, UI rendering

// ?microtask(微任务)
// * 每一个event loop都有一个microtask队列，一个microtask会被排进microtask队列而不是task队列
// * 跟task有些类似，都是先进先出的队列，不同的是一个event loop只有一个microtask

// 哪些是microtask的任务源呢
// *1. process.nextTick
// *2. promises
// *3. Object.observe
// *4. MutationObserver 观察Dom的变化

//? macro-task 宏任务

// ? event loops
// 有两种event loops，一种是在 浏览器上下文，一种是在 workers 中
// 每一个用户代理至少有一个浏览器上下文
// 一个worker对应一个event loop

// ? event loop的处理过程(processing model)
// *1.在task队列选择，最先进入的队列，没有的话就跳到microtasks步骤
// *2.设置成正在运行，运行完毕后，从队列里移除它，然后执行 microtasks 任务检查点
// *3.更新渲染，返回到第一步

// ? microtasks 任务检查点





// ?浏览器与node的事件循环（Event Loop）有何区别

// ?进程与线程