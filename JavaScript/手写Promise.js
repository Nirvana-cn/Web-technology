// Promise有两种实现思路
// 其一：从异步出发,通过setTimeout模拟支持同步任务
// 博客地址 https://juejin.im/post/5b16800fe51d4506ae719bae

// 其二：从同步出发，通过发布订阅模式来支持异步任务，如下
// 博客地址 https://juejin.im/post/5b88df2a51882542e56e62c9

// 链式调用的核心：返回一个Promise，返回的新的Promise状态并不发生变化，而是在上一层Promise状态改变后才改变
function Promise(executor) {
    let _this = this;
    this.state = 'pending'; //状态
    this.value = undefined; //成功结果
    this.reason = undefined; //失败原因
    this.onFulfilledFunc = [];//保存成功回调
    this.onRejectedFunc = [];//保存失败回调

    try{
        executor(resolve, reject);
    }catch(e) {
        reject(e)
    }

    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject);
        }
        //当状态为pending时再做更新
        if (_this.state === 'pending') {
            setTimeout(()=>{
                _this.value = value;//保存成功结果
                _this.onFulfilledFunc.forEach(fn => fn(value));
                _this.state = 'resolved';
            })
        }
    }

    function reject(reason) {
        //当状态为pending时再做更新
        if (_this.state === 'pending') {
            setTimeout(()=>{
                _this.reason = reason;//保存失败原因
                _this.onRejectedFunc.forEach(fn => fn(reason));
                _this.state = 'rejected';
            })
        }
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    let self=this;
    let bridgePromise;
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };

    if (this.state === 'resolved') {
        if (typeof onFulfilled === 'function') {
            return bridgePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(bridgePromise, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            })
        }
    }
    if (this.state === 'rejected') {
        if (typeof onRejected === 'function') {
            return bridgePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(bridgePromise, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    }
    //等待态，此时异步代码还没有走完
    if (this.state === 'pending') {
        return bridgePromise = new Promise((resolve, reject) => {
            self.onFulfilledFunc.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
            self.onRejectedFunc.push((error) => {
                try {
                    let x = onRejected(error);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }

    //用来解析回调函数的返回值x，x可能是普通值也可能是个promise对象
    function resolvePromise(bridgePromise, x, resolve, reject) {
        let called = false
        // 避免循环引用
        if (bridgePromise === x) {
            return reject(new TypeError('Circular reference'));
        }
        //如果x是一个promise
        if (x instanceof Promise) {
            //如果这个promise是pending状态，就在它的then方法里继续执行resolvePromise解析它的结果，直到返回值不是一个pending状态的promise为止
            if (x.status === "pending") {
                x.then(y => {
                    resolvePromise(bridgePromise, y, resolve, reject);
                }, error => {
                    reject(error);
                });
            } else {
                x.then(resolve, reject);
            }
            // 2.3.3规范，如果x为对象或者函数
        } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
            try {
                // 是否是thenable对象（具有then方法的对象/函数）
                //2.3.3.1 将 then 赋为 x.then
                let then = x.then;
                if (typeof then === 'function') {
                    //2.3.3.3 如果 then 是一个函数，以x为this调用then函数，且第一个参数是resolvePromise，第二个参数是rejectPromise
                    then.call(x, y => {
                        if (called) return;
                        called = true;
                        resolvePromise(bridgePromise, y, resolve, reject);
                    }, error => {
                        if (called) return;
                        called = true;
                        reject(error);
                    })
                } else {
                    //2.3.3.4 如果 then不是一个函数，则 以x为值fulfill promise。
                    resolve(x);
                }
            } catch (e) {
                //2.3.3.2 如果在取x.then值时抛出了异常，则以这个异常做为原因将promise拒绝。
                if (called) return;
                called = true;
                reject(e);
            }
        } else {
            resolve(x);
        }
    }
};

Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
}

Promise.all = function(promises) {
    return new Promise(function(resolve, reject) {
        let result = [];
        let count = 0;
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(function(data) {
                result[i] = data;
                if (++count == promises.length) {
                    resolve(result);
                }
            }, function(error) {
                reject(error);
            });
        }
    });
}

Promise.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(function(data) {
                resolve(data);
            }, function(error) {
                reject(error);
            });
        }
    });
}

Promise.resolve = function(value) {
    return new Promise(resolve => {
        resolve(value);
    });
}

Promise.reject = function(error) {
    return new Promise((resolve, reject) => {
        reject(error);
    });
}

module.exports = Promise;