var Arr = require('array-like');

function Noodle(el,str){
    if(arguments.length === 1){
        str = el;
        el = document;
    }
    var eles = el.querySelectorAll(str);
    return Arr.apply(Arr,eles);
}
Noodle.setAccessor = Arr.setAccessor;
Noodle.setMutator = Arr.setMutator;
Noodle.setGenerator = Arr.setGenerator;
module.exports =Noodle;
