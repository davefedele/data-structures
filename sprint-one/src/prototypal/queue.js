var Queue = function() {
    var obj = Object.create(queueMethods);
    obj.count = 0;
    return obj;
};

var queueMethods = {
    
    enqueue: function(){
        this.count++;
    },
    
    dequeue: function(){
        
    },
    
    size: function(){
        return this.count;
    }
    
};


