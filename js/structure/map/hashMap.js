//actually,Map,the new data structure in ES6 is a set of key-value pairs
class HashMap{
  constructor(){
    this.map = new Map();
  }
  set(key,value){
    return this.map.set(key,value);
  }
  get(key){
    return this.map.get(key);
  }
  delete(key){
    return this.map.delete(key);
  }
  clear(){
    return this.map.clear();
  }
  has(key){
    return this.map.has(key);
  }
  size(){
    return this.map.size;
  }
  toArray(){
    //sol1:
    return [...this.map];
    //sol2:   return [...this.map.entries()]
    //sol3    Array.from(this.map);
  }
  getKeys(){
    return [...this.map.keys()];
  }
  getValues(){
    return [...this.map.values()];
  }
}

let map = new HashMap();

// map.set('a','1');
// map.set('b','2');
// map.set('c','3');
// map.set('d','4');
// console.log(Array.from(map));
// console.log(map.getKeys());
// console.log(map.getValues());
// console.log(map.getKV());
// map.clear();
// console.log(map.toArray());