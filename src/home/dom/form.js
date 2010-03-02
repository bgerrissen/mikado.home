/**
 * @author Ben
 */
mikado.module({
    
    path: 'home.dom.form',
    
    build: function(){
        
        // implementation
        
        // api
        var form = {
            // setters
            set: function(form, fieldName, value){},
            // getters
            get: function(form, fieldName){},
            // utility
            serialise: function(form){
                // accepts form or a nodeList of formFields
            },
            disable: function(field){},
            enable: function(field){},
            check: function(field){},
            uncheck: function(field){}
        };
        
        // return module
        return form;
        
    }
    
});