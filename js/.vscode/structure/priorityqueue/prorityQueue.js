class ProrityQueue{
  constructor(){
    this.queueList = [];
  }
  enqueue(data,priority){
    let node = new Node(data,priority);
    if(this.queueList.length === 0){
      this.queueList.push(node);
    }else{
      let flag = false;//havent been pushed into arr yet
      for(let i = 0;i < this.queueList.length;i++){
        if(priority > this.queueList[i].priority){
          this.queueList.splice(i,0,node);
          flag  = true;
          break;
        }
      }
      if(!flag){
        this.queueList.push(node);  
      }
    }
    console.log(this.queueList);
  }
  dequeue(){
    return this.queueList.shift();
  }
  clear(){
    return this.queueList = [];
  }
  isEmpty(){
    return this.queueList.length === 0;
  }
}

class Node{
  constructor(data,priority){
    this.data = data;
    this.priority = priority;
  }
}

// let pq = new ProrityQueue();
// pq.enqueue('a',6)
// pq.enqueue('b',6)
// pq.enqueue('c',10)
// pq.enqueue('d',2)
// pq.enqueue('e',4)


