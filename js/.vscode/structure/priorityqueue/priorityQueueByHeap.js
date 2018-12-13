const MinHeap = require('../heap/minHeap')
class PriorityQueue extends MinHeap{
  constructor(){
    super();
    this.priorities = {};
  }
  add(item,priority = 0){
    this.priorities[item] = priority;
    super.addItem(item);
  
    return this;
  }
  remove(item){
    super.remove(item);
    delete this.priorities[item];

    return this;
  }
  changePriority(item,newPriority){
    this.remove(item);
    this.add(item,newPriority);
  }
  findByValue(item){
    super.find(item);
  }
  hasValue(item){
    return this.findByValue(item).length>0;
  }
  comparePriority(a,b){
    if (this.priorities[a] === this.priorities[b]) {
      return 0;
    }

    return this.priorities[a] < this.priorities[b] ? -1 : 1;
  }
  compareValue(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
}

let p = new PriorityQueue();
p.add(10,1);
p.add(9,1);
p.add(15,3);
p.add(11,2);
p.add(16,2);
p.add(4,1);
p.add(2,1);

console.log(p);


