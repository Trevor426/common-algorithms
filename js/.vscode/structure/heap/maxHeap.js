const Heap = require("./heap");
class  MaxHeap extends Heap{
  constructor(){
    super();
  }
  /**
   * Checks if pair of heap elements is in correct order.
   * For MaxHeap the first element must be always greater or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) { 
    return (firstElement >= secondElement)?true:false;
  }
}