// var Trie = function() {
//     this.root = {}
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//     if(!word) return
//     let first = word.substr(0,1)

//     if(!this.root[first]){
//         this.root[first] = {
//             level:{}
//         }
//     }
//     if(word.length == 1){
//         this.root[first].end = true
//     }
    
//     this.create(this.root[first].level,word.slice(1))
// };

// Trie.prototype.create = function(level,word){
//     if(!word) return
//     let first = word.substr(0,1)
//     if(!level[first]){
//         level[first] = {
//             level:{}
//         }
//     }
//     if(word.length == 1){
//         level[first].end = true
//     }
//     this.create(level[first].level,word.slice(1))
// }

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//     if(!word) return 
//     if(word.length == 1){
//         return this.root[word].end ? true :false;
//     }
//     let first = word.substr(0,1)
//     if(!this.root[first]) return false
//     return this.dSearch(this.root[first].level,word.slice(1),false)
// };

// Trie.prototype.dSearch = function(level,word,isStartsWith) {
//     if(word.length == 1){
//         if(!level[word]) return false
//         if(level[word] && isStartsWith) return true
//         if(level[word] && !isStartsWith && level[word].end) return true
//         return false
//     }
    
//     let first = word.substr(0,1)
//     if(!level[first]) return false
//     this.dSearch(level[first].level,word.slice(1),isStartsWith)
    
// };

// /** 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
//     if(!prefix) return 
//     if(prefix.length == 1){
//         return this.root[prefix] ? true :false;
//     }
//     let first = prefix.substr(0,1)
//     if(!this.root[first]) return false
//     return this.dSearch(this.root[first].level,prefix.slice(1),true)
// };

var Trie = function() {
    this.children = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.children
    for(const key of word){
        if(!node[key]){
            node[key] = {}
        }
        node = node[key] 
    }
    node.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.children
    for(const key of word){
        if(!node) break;
        node = node[key]
    }
    return node && node.end ? true : false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.children
    for(const key of word){
        if(!node) break;
        node = node[key]
    }
    return node? true : false
};




let obj = new Trie()
obj.insert('app')
obj.insert('apple')
obj.insert('beer')
obj.insert('add')
obj.insert('jam')
obj.insert('rental')
console.log('r',obj.search('apps'));

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */