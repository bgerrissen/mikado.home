/**
 * @author Ben
 */
mikado.module({
    
    path: 'home.lang.Object',
    
    build: function(){
        
        Object.augment || (Object.augment = function(receiver, provider, override){
            if(!provider || !receiver) {
                return receiver;
            }
            for(var property in provider) {
                if(!receiver[property] || override) {
                    receiver[property] = provider[property];
                }
            }
            return receiver;
        });
        
        Object.create || (Object.create = function(){
           var a = {i:1}, b = {__proto__:a}, empty = function(){}
           return a.i ? function(object, properties){
               return properties ? Object.augment({__proto__:object}, properties) : {__proto__:object};
           } : function(object, properties){
               empty.prototype = object;
               object = new empty();
               return properties ? augment(object, properties) : object;
           } 
        }());
        
    }
    
});
