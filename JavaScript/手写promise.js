class Event {
    eventList = {};
    on(eventName,cb){
        this.eventList[eventName] = cb;
    }
    emit(eventName, payload){
        if(this.eventList[eventName]){
            this.eventList[eventName](payload)
        }
    }
}

function _Promise(callback){
    let res = undefined;
    let err = undefined;
    let status = 'pending';
    let event = new Event();
    function resolve(result){
        res = result;
        status = 'fulled';
        event.emit('fulled',result)
    }
    function reject(error){
        err = error;
        status = 'rejected';
        event.emit('rejected',error)
    }
    function then(successCallback, errorCallback){
        if(successCallback){
            event.on('fulled',(result) => {
                successCallback(result);
            })
        }
        if(errorCallback){
            event.on('rejected',(error) => {
                errorCallback(error);
            })
        }
    }
    callback(resolve,reject)
    return {
        then
    }
}

let p = new _Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('啦啦啦')
    },1000)
})

p.then(res => {
    console.log('结果:',res)
})