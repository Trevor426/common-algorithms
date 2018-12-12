class heap{
  constructor(){
    this.heapContainer = [];
  }
  getLeftChildIndex(parentIndex){
    return parentIndex*2+1;
  }
  getRightChildIndex(parentIndex){
    return parentIndex*2+2;
  }
  getParentIndex(childIndex){
    return Math.floor((childIndex-1)/2);
  }
  hasParent(childIndex){
    return this.getParentIndex(childIndex) >=0;
  }
  hasLeftChild(parentIndex){
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }
  hasRightChild(){
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }
  getLeftChild(parentIndex){
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }
  getRightChild(parentIndex){
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }
  getParent(childIndex){
    return this.heapContainer[this.getParentIndex(childIndex)];
  }
  swap(indexOne,indexTwo){
    let temp = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = temp;
  }
  peek(){
    if(this.heapContainer.length === 0){
      return null;
    }
    return this.heapContainer[0];
  }
  poll(){
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    // Move the last element from the end to the head.
    this.heapContainer[0] = this.heapContainer.pop();

    this.heapifyDown();

    return item;

  }
  //add item one by one
  add(item){
    this.heapContainer.push(item);
    this.heapifyUp();
    console.log(this.heapContainer);
    return this;
  }
  remove(item){
    //1.Find number of items to remove
    //2.after one item deleted the heap structure will be changed so we need to get the next dynamic index 
    //3.if the item which needs removed is the last item in the heap,we just pop it directly
    //4.if the item doesnt have parent,that means its the peek of the heap or parent is in correct order with the item   
    //just need to heapifydown from it(the peek of the heap) 
    //cicle time
    const numberOfItemsToRemove = this.find(item).length;
    for(let i = 0;i<numberOfItemsToRemove;i++){
      const indexToRemove = this.find(item).pop();
      if(indexToRemove === this.heapContainer.length - 1){
        this.heapContainer.pop();
      }else{
        this.heapContainer[indexToRemove] = this.heapContainer.pop();
        const parentItem = this.getParent(indexToRemove);
        if(this.hasLeftChild(indexToRemove)&&
        (!parentItem||this.pairIsInCorrectOrder(parentItem,this.heapContainer[indexToRemove]))
        ){
          this.heapifyDown(indexToRemove);
        }else{
          this.heapifyUp(indexToRemove);
        }
      }
    }
    console.log(this.heapContainer);
    return this;
  }
  find(item){
    var foundItemIndices = [];
    for(let i = 0;i < this.heapContainer.length;i++){
      if(item == this.heapContainer[i]){
        foundItemIndices.push(i);
      }
    }
    return foundItemIndices;
  }
  isEmpty(){
    return !this.heapContainer.length;
  }
  toString(){
    return this.heapContainer.toString;
  }
  heapifyUp(customStartIndex){
    let currentIndex = customStartIndex || this.heapContainer.length - 1;
    console.log('currentindex: ' + currentIndex);
    while(this.hasParent(currentIndex)&&
      !this.pairIsInCorrectOrder(this.getParent(currentIndex),this.heapContainer[currentIndex])){
      this.swap(currentIndex,this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  heapifyDown(customStartIndex = 0){
    let currentIndex = customStartIndex;
    let nextIndex = null;
    while(this.hasLeftChild(currentIndex)){
      //这一步逻辑是非常细节和必要的，通过这一步决定谁作为比较的子节点，也就是根据准父节点
      //如果是小顶堆，就是选择较小的作为准父节点
      //如果是大顶堆,则选择较大的作为准父节点
      if(this.hasLeftChild(currentIndex)&&this.pairIsInCorrectOrder(this.getRightChild(currentIndex),this.getLeftChild(currentIndex))){
        nextIndex = this.getRightChildIndex(currentIndex);
      }else{
        nextIndex = this.getLeftChildIndex(currentIndex);
      }
  
      if (this.pairIsInCorrectOrder(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex],
      )) {
        break;
      }
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }
  //compare 
  pairIsInCorrectOrder(firstElement,secondElement){
    // min heap
    // return (firstElement < secondElement)?true:false;
    // max heap
    return (firstElement >= secondElement)?true:false;
  }
}

// let h = new heap();
// h.add(8);
// h.add(3);
// h.add(4);
// h.add(9);
// h.add(10);
// h.add(12);
// h.add(15);
// h.add(10);

// h.remove(10);