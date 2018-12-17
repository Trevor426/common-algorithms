class TrieNode{
  constructor(character,isCompleteWord = false){
    this.character = character;
    this.isCompleteWord =  isCompleteWord;
    this.children  = new Map();
  }
  getChild(character){
    return this.children.get(character);
  }
  addChild(character,isCompleteWord = false){
    if(!this.children.has(character)){
        this.children.set(character,new TrieNode(character,isCompleteWord = false));
    }
    const childNode = this.getChild(character);
    childNode.isCompleteWord =  childNode.isCompleteWord || isCompleteWord;
    return childNode;
  }
  removeChild(character){
    const childNode = this.getChild(character);
    if(childNode
      &&!childNode.hasChildren()
      &&!childNode.isCompleteWord
    ){
      //map delete
      this.children.delete(character);
    }
    return this;
  }
  hasChild(character){
    //map has
    return this.children.has(character);
  }
  hasChildren(){
    // map‘s func in es6
    return this.children.size > 0;
  }
  suggestChildren(){
    return [...this.children.keys()];
  }
  toString(){
    let childrenAsString = this.suggestChildren().toString;
    childrenAsString = childrenAsString?`:${childrenAsString}`:'';
    const isCompleteString  = this.isCompleteWord?'*':'';
    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}

const HEAD_CHARACTER = '*';
class Trie{
  constructor(){
    this.head = new TrieNode(HEAD_CHARACTER);
  }
  addWord(word){
    const characters = Array.from(word);
    let currentNode = this.head;
    for(let i = 0;i < characters.length;i++){
      const isComplete = (i === characters.length - 1);
      currentNode = currentNode.addChild(characters[i],isComplete);
    }
    return this;
  }
  deleteWorld(word){
    const depthFirstDelete = (currentNode,charIndex = 0) => {
      if(charIndex >=  word.length) return;
      const character = word[charIndex];
      const nextNode = currentNode.getchild(character);
      if(!nextNode) return;
      depthFirstDelete(nextNode,charIndex + 1);
      if(charIndex === (word.length - 1)){
        nextNode.isComplete = false;
      }
      currentNode.removeChild(character);
    }

    depthFirstDelete(this.head);
    return this;
  }
  suggestNextCharacters(word){
    const lastCharacter = this.getLastCharactorNode(word);
    if(!lastCharacter) return null;
    return lastCharacter.suggestChildren();
  }
  doesWordExist(word){
    const lastCharacter = this.getLastCharactorNode(word);
    return !!lastCharacter &&lastCharacter.isCompleteWord;
  }
  getLastCharactorNode(word){
    const characters = Array.from(word);
    let currentNode = this.head;
    for(let i = 0;i<characters.length;i++){
      if(!currentNode.hasChild(characters[i])) return null;
      currentNode = currentNode.getChild(characters[i]);
    }
    return currentNode;
  }
}