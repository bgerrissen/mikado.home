/**
 * @author Ben
 */
mikado.module({
    
    path: 'home.lang.object',
    
    build: function(){
        
        function empty(){}
        
        Object.augment = function(receiver, provider, override, remap){
            var prop, remap = remap || {};
            for(var property in provider) {
                if(provider.hasOwnProperty(property)) {
                    if(!receiver[prop] || override) {
                        prop = remap[property] || property;
                        receiver[prop] = provider[property];
                    }
                }
            }
            return receiver;
        }
        
        // use #augment if more static Object methods are added.
        Object.create = function(obj){
            empty.prototype = obj;
            return new empty();
        }
        
    }
    
});
