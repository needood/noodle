var Noodle = require('./core');

Noodle.setAccessor("setAttribute",function(name,value){
    this.forEach(function(item){
        set(item,name,value);
    });
});
Noodle.setAccessor("getAttribute",function(name){
    if(this.length!==0){
        return get(this[0], name);
    }else{
        return "";
    }
});
function set(elem,name,value) {
    elem.setAttribute(name,value);
    return elem;
}
function get(elem,name) {
    return elem.getAttribute(name);
}
