var each = require('array-like/utils').each;
var rspace = require('./var/space');
var Noodle = require('./core');
var utils = require('./utils');
var trim = utils.trim;
Noodle.setAccessor("setClass",function(name){
    this.forEach(function(item){
        set(item,name);
    });
});
Noodle.setAccessor("hasClass",function(name){
    if(this.length!==0){
        return has(this[0], name);
    }else{
        return false;
    }
});
Noodle.setAccessor("removeClass",function(name){
    this.forEach(function(item){
        remove(item,name);
    });
});
Noodle.setAccessor("addClass",function(name){
    this.forEach(function(item){
        add(item,name);
    });
});




function set(elem,name) {
    elem.className = name;
    return elem;
}

function has(elem, name){
    return new RegExp('\\b(' + name.split(rspace).join('|') + ')\\b').test(elem.className);
}

function remove(elem, name){
    elem.className = name ? trim(
        elem.className.replace(
            new RegExp('\\b(' + name.split(rspace).join('|') + ')\\b', 'g'), '')
        .split(rspace)
        .join(' ')
    ) : '';

    return elem;
}
function add(elem, name){
    if (elem.className === '') {
        elem.className = name;
    } else {
        var ori = elem.className,
            nclass = [];
        each(name.split(rspace), function(item) {
            if (!new RegExp('\\b(' + item + ')\\b').test(ori)) {
                nclass.push(' ' + item);
            }
        });
        elem.className += nclass.join('');
    }
    return elem;
}
