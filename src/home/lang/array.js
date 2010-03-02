/**
 * @author Ben
 */
mikado.module({
    
    path: 'home.lang.Array',
    
    build: function(){
        
        var proto = Array.prototype,
            slice = proto.slice;
        
        // javascript 1.6
        proto.indexOf || (proto.indexOf = function(target, fromIndex){
            var i = isNaN(parseInt(fromIndex, 10)) ? 0 : parseInt(fromIndex, 10),
                len = this.length;
            for(;i < len;i++){
                if(i in this && this[i] === target) {
                    return i;
                }
            }
            return -1;
        });
        
        // javascript 1.6
        proto.lastIndexOf || (proto.lastIndexOf = function(target, fromIndex){
            var i = isNaN(parseInt(fromIndex, 10)) ? this.length-1 : parseInt(fromIndex, 10);
            while(i--){
                if(i in this && this[i] === target) {
                    return i;
                }
            }
            return -1;
        });
        
        // javascript 1.6
        proto.filter || (proto.filter = function(func, scope){
            if(typeof func !== 'function') {
                throw new TypeError();
            }
            var len = this.length,
                result = [],
                i = 0,
                value;
             for(;i<len;i++){
                 if(!(i in this)) {
                     continue;
                 }
                 value = this[i];
                 if(func.call(scope, value, i, this)){
                     result.unshift(value);
                 }
             }
             return result;
        });
        
        // javascript 1.6
        proto.forEach || (proto.forEach = function(func, scope){
            if(typeof func !== 'function') {
                throw new TypeError();
            }
            var len = this.length,
                i = 0;
            for(;i<len;i++){
                if(i in this){
                    func.call(scope, this[i], i, this);
                }
            }
        });
        
        // convenience
        proto.each || (proto.each = proto.forEach);
        
        
        
    }
    
});
