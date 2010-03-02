/**
 * @author Ben
 */
mikado.module({
    
    path: 'home.lang.Function',
    
    build: function(){
        
        var proto = Function.prototype,
            slice = Array.prototype.slice;
        
        proto.bind || (proto.bind = function(scope){
            var args = slice.call(arguments, 1), that = this;
            return function(){
                return that.apply(scope, args.concat(slice.call(arguments)));
            }
        });
        
        proto.defer || (proto.defer = function(miliseconds){
            var args = slice.call(arguments, 1), that = this;
            setTimeout(function(){
                that.apply(null, args);
            }, miliseconds);
        });
        
    }
    
});
