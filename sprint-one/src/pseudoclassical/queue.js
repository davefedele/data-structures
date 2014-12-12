var Queue = function() {
    this.count = 0;
    
};

Queue.prototype = {
    
    enqueue : function(){
        this.count++;
    },
    
    dequeue : function(){
        if(this.count > 0){
        this.count--;
        }
    },
    
    size : function(){
        return this.count;
    }
}

