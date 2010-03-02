/**
 * @author Ben
 */
mikado.module({
    
    path: 'home.util.Cache',
    
    fetch: [
        {
            path: 'home.lang.Array',
            when: !Array.prototype.indexOf
        },
        {
            path: 'home.lang.Object',
            when: !Object.create
        }
    ], 
    
    build: function(){
        
        // api
        var _Cache = {
            set: function(key, value){
                if(typeof key === 'string') {
                    (this.strStorage || (this.strStorage = {}))[key] = value;
                } else {
                    'objStorage' in this || (this.objStorage = [[],[]]);
                    var i = this.objStorage[0].indexOf(key) || this.objStorage[0].length;
                    this.objStorage[1][i] = value;
                }
            },
            get: function(key){
                if(typeof key === 'string') {
                    return (this.strStorage || (this.strStorage = {}))[key];
                } else {
                    'objStorage' in this || (this.objStorage = [[],[]]);
                    var i = this.objStorage[0].indexOf(key);
                    return this.objStorage[1][i];
                }
            },
            remove: function(key){
                if(typeof key === 'string') {
                    delete (this.strStorage || (this.strStorage = {}))[key];
                } else {
                    'objStorage' in this || (this.objStorage = [[],[]]);
                    var i = this.objStorage[0].indexOf(key);
                    this.objStorage[0].splice(i, 1);
                    this.objStorage[1].splice(i, 1);
                }
            }
        };
        
        var Cache = Object.create(_Cache, {
            create: function(){
                return Object.create(_Cache,{
                    strStorage : {},
                    objStorage : [[],[]]
                });
            }
        });
        
        // return module
        return Cache;
        
    }
    
});