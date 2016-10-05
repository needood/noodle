function strToDom(html) {
    var el = document.createElement('div');
    el.innerHTML = html;
    return el.children[0];
}
var Arr = require('array-like');
var each = require('array-like/utils').each;
var Noodle = require('./core');
Noodle.setAccessor("append",function(element){
    if(typeof element ==="string"){
        element = strToDom(element);
    }
    this.forEach(function(item){
        item.appendChild(element);
    });
});
Noodle.setAccessor("querySelector",function(Selector){
    var array = [];
    this.forEach(function(item){
        each(item.querySelectorAll(Selector),function(item){
            if(array.indexOf(item) === -1){
                array.push(item);
            }
        });
    });
    return array;
},{forceChain:true});
Noodle.setAccessor("html",function(string){
    if(arguments.length===0){
        if(this.length!==0){
            return this[0].innerHTML;
        }
    }else{
        this.forEach(function(item){
            item.innerHTML = string;
        });
    }
});
Noodle.setAccessor("remove",function(string){
    this.forEach(function(item){
        if(item.remove){
            item.remove();
        }else{
            item.parentElement.removeChild(item);
        }
    });
});
