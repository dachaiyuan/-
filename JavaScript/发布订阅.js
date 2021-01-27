class Event {
    eventObj = {}
    on(eventName,callBack){
        this.eventObj[eventName] = callBack;
    }

    emit(eventName, payload){
        if(this.eventObj[eventName]){
            this.eventObj[eventName](payload)
        }
    }

    off(eventName){
        delete this.eventObj[eventName]
    }
}

let e = new Event();

e.on('test',(contentText) => {
    console.log('test----',contentText)
})

e.emit('test', '1')
e.emit('test', '2')
e.emit('test', '3')
e.emit('test', '4')
e.emit('test', '5')
console.log(e)
e.off('test')
console.log(e)
e.emit('test', '8')
