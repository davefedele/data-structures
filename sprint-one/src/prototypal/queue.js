var Queue = function() {
    var obj = Object.create(queueMethods);
    obj.count = 0;
    obj.storage = {};
    return obj;
};

var queueMethods = {
    
    enqueue: function(value){
        this.count++;
        this.storage[this.count] = value;
    },
    
    dequeue: function(){
        var temp = this.storage[1];
        var buffer = {};
        delete this.storage[1];
        for (var key in this.storage) {
            buffer[key-1] = this.storage[key];
        }
        this.storage = buffer;
        if(this.count > 0) {
            this.count--;
        }
        return temp;
    },
    
    size: function(){
        return this.count;
    }
    
};


