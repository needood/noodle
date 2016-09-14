var Noodle = require('./core');
Noodle.setAccessor('addEventListener',function(eventType,fn,options){
    var args = arguments;
    this.forEach(function(item){
        item.addEventListener.apply(item,args);
    });
    return fn;
});
Noodle.setAccessor('one',function(eventType,fn,options){
    var eventCb = function(event){
        fn.call(this, event);
        this.removeEventListener(eventType,eventCb,options);
    };
    var args = arguments;
    this.forEach(function(item){
        item.addEventListener.call(item,eventType,eventCb,options);
    });
    return eventCb;
});
Noodle.setAccessor('on',function(eventType, elementQuerySelector, fn,options){
    var eventCb = function(event){
        var qs = this.querySelectorAll(elementQuerySelector);
        if (qs) {
            var el = event.target, index = -1;
            while(el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
                el = el.parentElement;
            }
            if (index > -1) {
                fn.call(el, event);
            }
        }
    };
    this.forEach(function(item){
        item.addEventListener(eventType,eventCb,options);
    });
    return eventCb;
});
Noodle.setAccessor('removeEventListener',function(eventType, fn,options){
    this.forEach(function(item){
        item.removeEventListener(eventType,fn,options);
    });
});
