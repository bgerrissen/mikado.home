/**
 * @author Ben
 */
mikado.module({
    
    path: 'home.dom.event',
    
    build: function(M){
        
        // implementation
        
        // api
        var event = {
            addListener: function(){},
            removeListener: function(){},
            fire: function(){}
        };
        
        // return module
        return event;
    }
    
});
