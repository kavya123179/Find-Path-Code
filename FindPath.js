var obj = {
    a: {
        b: {
            c: 12
        }
    }
};

obj.findPath = function(params){
    const keys = params.split(".");
    return keys.reduce((Prev,curr)=>{
        return Prev && Prev[curr];
    },this);
    
    
    
    
}




console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined
