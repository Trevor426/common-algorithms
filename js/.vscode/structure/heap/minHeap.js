const Heap = require("./heap");
class MinHeap extends Heap{
  constructor(){
    super();
  }
  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) { 
    return (firstElement <= secondElement)?true:false;
  }
}

module.exports = MinHeap;
