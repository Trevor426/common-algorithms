//stack's function is all base on the function of Array type in JS
class Stack{
  constructor(){
    this.elements = [];
  }
  push(element){
    this.elements.push(element);
  }
  pop(){
    this.element.pop();
  }
  clear(){
    this.elements = [];
  }
  peek(){
    if(this.elements.length === 0) return false;
    return this.elements[this.elements.length - 1];
  }
  size(){
    return this.elements.length;
  }
  isEmpty(){
    return this.elements.length === 0;
  }
  show(){
    return this.elements;
  }
}