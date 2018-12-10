class Node{
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
  }
  append(element){
    let node = new Node(element);
    if(this.length === 0){
      this.head = node;
    }else{
      var current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  insert(pos,element){
    if(pos<0||pos>this.length) return false;
    let node = new Node(element);
    let prev,
        current = this.head,
        index = 0;
    if(pos === 0){
      this.head = node;
      node.next = current;
      //？内存溢出
      //this.head.next = node;
      //node.next = current;
    }else{
      while(index++ < pos){
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
    }
    this.length++;
    return true;
  }
  indexOf(element){
    if(this.length<0) return -1;
    let index = 0;
    let current = this.head;
    while(current){
      if(current.element === element){
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  remove(element){
    let index = this.indexOf(element);
    return this.removeAt(index);
  }
  removeAt(pos){
    if(pos<0||pos>this.length-1) return false;
    let prev,
        current= this.head,
        index = 0;
    if(pos === 0){
      this.head = current.next;
    }else{
      while(index++ < pos){
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      current.next = null;//销毁
    }
    this.length--;
    return current.element;
  }
  toString(){
    let current = this.head,str = '';
    while(current){
      str += current.element;
      current = current.next;
    }
  }
  toArray(){
    let current = this.head,arr = [];
    while(current){
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }
  getHead(){
    return this.head;
  }
  isEmpty(){
    return this.length === 0;
  }
  reverse(){
    let current = this.head,prev = null, next = null;
    while(current){
      //record next node
      next = current.next;
      //change current's next node
      current.next = prev;
      //prev node became to current
      prev = current;
      //current  became to next
      curent = next;  
    }  
    //exchange tail and head
    this.tail = this.head;
    //prev is at the tail position
    this.head = prev;
    return this;
  }
}

var linklist = new LinkedList();

for(var i = 0; i<10; i++){
  linklist.append(i*2);
}
// linklist.removeAt(10);
// linklist.insert(9,10);
// linklist.remove(18);
// linklist.insert(0,1);

console.log(linklist.toArray());
// console.log(linklist.toArray());
// console.log(linklist.indexOf(0));
