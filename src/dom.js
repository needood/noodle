var Arr = require('array-like');
var each = require('array-like/utils').each;
var Noodle = require('./core');
Noodle.setAccessor("append",function(element){
    this.forEach(function(item){
        item.appendChild(element);
    });
});
Noodle.setGenerator("querySelector",function(Selector){
    var array = [];
    this.forEach(function(item){
        each(item.querySelectorAll(Selector),function(item){
            if(array.indexOf(item) === -1){
                array.push(item);
            }
        });
    });
    return Arr.apply(Arr,array);
});
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

