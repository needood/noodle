var Arr = require('array-like');

function Noodle(el,str){
    if(arguments.length === 1){
        if(typeof el === "string"){
            str = el;
            el = document;
        }else{
            return Arr(el);
        }
    }
    var eles = el.querySelectorAll(str);
    return Arr.apply(Arr,eles);
}
Noodle.setAccessor = Arr.setAccessor;
Noodle.setMutator = Arr.setMutator;
Noodle.setGenerator = Arr.setGenerator;
module.exports = Noodle;
