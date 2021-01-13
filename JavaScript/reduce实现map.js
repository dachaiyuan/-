Array.prototype.mapClone = function(cb){
    return this.reduce((r,c,i)=>{
      let item =cb(c,i);
      return [...r,item];
    },[])
}

let a = new Array(1,2,3,4);
console.log(a.mapClone((item,index) => { console.log(item,index); return item +1;  }))