// 3. 实现一个函数 find(obj, str)，满足:
// 如var obj = {a:{b:{c:1}}};
// find(obj,'a.b.c') //1
// find(obj,'a.d.c') //undefined

var obj = {a:{b:{c:1}}};

function find(obj,str){
    let arr = str.split('.');
    let res = undefined;
    arr.reduce((r,c) => {
        if(r[c]){
            res = r[c];
            r = r[c];
        }else{
            res = undefined;
        }
        return r;
    },obj)
    return res;
}

console.log(find(obj,'a.r.c'));