/**
 * 单向链表
 */
function LinkedList(){
  //Node类声明
  var Node = function(element){
    this.element = element;
    this.next = null;
  }
  //链表长度
  var length = 0;
  //链表头部
  var head = null;
   /**
 * 向单向链表中添加某个元素
 * @param  {Any} element  要添加的元素
 */
  this.append = function(element){
    var node = new Node(element);
    if(head == null){
      head = node;
    }else{
      var current = head;
      while(current.next){
        current = current.next;
      }
      //current此时在链表尾
      current.next = node;
    }
    //链表表长自增
    length++;
  }
  /**
 * 向单向链表中插入某个元素
 * @param  {Number} position 要插入的位置
 * @param  {Any} element  要插入的元素
 * @return {Boolean} 插入成功返回true，失败返回false
 */
  this.insert = function(position,element){
    if(position<0||position>length) return false;

    var node = new Node(element);
    var current = head;
    var prev;//插入前node
    var index = 0;
    if(position === 0){
      node.next = current;
      head = node;
    }else{
      while(index++ < position){
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
    } 
    length++;
    return true;
  }
  /**
 * 寻找某个元素在单向链表中的位置
 * @param  {Any} element 要寻找的元素
 * @return {Number} 返回值>=0则代表找到相应位置
 */
  this.indexOf = function(element){
    var index = 0;
    var current = head;
    
    while(current){
      if(current.element === element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  /**
 * 移除给定的元素
 * @param  {Any} element 要移除的元素
 * @return {Number}      返回值>=0表示移除成功
 */
  this.remove = function(element){
   var index = this.indexOf(element); 
   return this.removeAt(index);
  }
  /**
 * 移除单向链表中某一个元素
 * @param  {Number} position 要移除元素的位置
 * @return {Any}          移除成功返回被移除的元素，不成功则返回NULL
 */
  this.removeAt = function(position){
    if(position<0||position>length) return false;
    var current = head;
    var prev;
    var index = 0;
    if(position == 0){
      head = current.next;
    }else{
      while(index++ < position){
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      current = null;
    }
    length--;
    return current.element;
  }
  this.getHead  = function(){
    return head;
  }
  this.isEmpty = function(){
    return length === 0;
  }
  this.toString = function(){
    var current = head;
    var str = '';
    while(current){
      str += current.element;
      current = current.next;
    }
    return str;
  }
  this.toArray = function(){
    var current = head;
    var arr = [];
    while(current){
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }
  this.size =  function(){
    return length;
  }
}