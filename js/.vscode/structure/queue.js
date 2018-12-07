class Queue{
  constructor(){
    this.elements = [];
  }
  enqueue(element){
    this.elements.push(element);
  }
  dequeue(){
    this.elements.shift();
  }
  front(){
    if(this.elements.length === 0) return false;
    return this.elements[0];
  }
  back(){
    if(this.elements.length === 0) return false;
    return this.elements[this.elements.length - 1]
  }
  isEmpty(){
    return this.elements.length === 0;
  }
  clear(){
    this.elements = [];
  }
  size(){
    return this.elements.length;
  }
  show(){
    return this.elements;
  }
}

let q = new Queue();
for(let i = 0;i<10;i++){
  q.enqueue(i);
}
// q.dequeue();
// q.clear();
// console.log(q.front());
// console.log(q.back());
// console.log(q.isEmpty());
// console.log(q.size());
// console.log(q.show());
