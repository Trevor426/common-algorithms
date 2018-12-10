class Node{
  constructor(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(element){
    //如果是空链表
    let node = new Node(element);
    if(this.length === 0){
      this.head = node;
      this.tail = node;
    }else{
      // sol1:通过操作尾指针来实现向表尾添加
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      // sol2:通过头部指针找到链表尾部添加（单链表衍生）
      // let current = this.head;
      // while(current.next){
      //   current = current.next;
      // }
      // current.next = node;
      // node.prev = current;
      // this.tail  = node;
    }
    this.length++;
  }
  insert(pos,element){
    if(pos<0||pos>this.length) return false;
    let node = new Node(element);
    //when the list is empty and insert element after tail
    //if we dont solv this situation with this way, it will make mistakes
    if(this.length === 0 || this.length === pos){
      this.append(element);
      return true; //need to end the continuous exec
    }else if(pos === 0){
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }else{
      let index = 0,current = this.head,prev;
      while(index++ < pos){
        prev = current;
        current = current.next;
      }
      node.next = current;
      current.prev = node;
      prev.next = node;
      node.prev = prev;
      current = null;
    }
    this.length++;
    return 
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
    this.removeAt(index);
  }
  removeAt(pos){
    console.log(this.length);
    console.log(pos);
    if(pos<0||pos>this.length-1) return false;

    let prev,current = this.head,index = 0;
    //删除头部 
    if(pos === 0){
      this.head = current.next;
      this.head.prev = null;
      if(this.length === 1){
        this.tail = null;
      }
    //删除尾部  
    }else if(pos === this.length - 1){
     current = this.tail;
     this.tail = current.prev;
     current.prev = null;
     this.tail.next = null; 
    }else{
      while(index++ < pos){
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      current.next.prev = prev;
      current.prev = null;
      current.next = null;
    }
    this.length --;
    return current.element;
  }
  showHead(){
    return this.head;
  }
  showTail(){
    return this.tail;
  }
  toArray(){
    if(this.length=0) return false;
    let arr = [],current = this.head;
    while(current){
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }
  reverse(){
    let current = this.head,prev = null,next = null;
    while(current){
      //record next
      next = current.next;
      //ps:there is diffrent from single link list
      prev = current.prev;
      //change current next and prev
      current.next = prev;
      current.prev = next;
      //update prev and current node
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }
}

// var dll = new DoubleLinkedList();
// dll.insert(0,12);
// dll.insert(0,11);
// for(let i = 0;i<5;i++){
//   dll.append(i*5);
// }
// dll.insert(3,9);
// dll.insert(2,3);
// dll.removeAt(5);
// console.log(dll.toArray());
// console.log(dll.showHead().next.next.next);
// console.log(dll.showTail());
