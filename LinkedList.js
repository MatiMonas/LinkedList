function iterativeArray(node) {
     if (!node.next) return [node.data];

     let invertedArray = iterativeArray(node.next);
     invertedArray.push(node.data);
     return invertedArray;
}

class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}

/*-----------------
Methods you can use

push()
unshift()
insertAt()
size()
remove()
removeFromHead()
removeFrom()
removeData()
search()
orderMinToMax()
reverseMaxToMin()
print()

------------------*/

class LinkedList {
     constructor() {
          this.head = null;
          this._length = 0;
     }

     push(data) {
          let current = this.head;

          if (!current) {
               this.head = new Node(data);
               this._length++;
          } else {
               while (current.next) {
                    current = current.next;
               }
               current.next = new Node(data);
               this._length++;
          }
     }

     unshift(data) {
          var newNode = new Node(data);
          let current = this.head;
          if (!current) {
               this.head = newNode;
          } else {
               this.head = newNode;
               newNode.next = current;
          }
          this._length++;
     }

     insertAt(data, pos) {
          let current = this.head;
          let newNode = new Node(data);

          if (this._length < pos) return this.push(data);

          if (pos < 0)
               throw TypeError(`Position shouldn't be a negative number`);

          if (pos === 0 || !pos) {
               this.unshift(data);

               if (pos === 1) {
                    newNode.next = this.head;
                    this.head = newNode;
               }
          } else {
               while (pos > 1) {
                    pos--;
                    current = current.next;
               }
               newNode.next = current.next;
               current.next = newNode;
          }
          this._length++;
     }

     size() {
          return this._length;
     }

     remove() {
          let current = this.head;
          let previous = current;

          if (!current) {
               return null;
          }

          if (current.next === null) {
               this.head = null;
               return current.data;
          }

          while (current) {
               if (!current.next) {
                    previous.next = null;
                    return current.data;
               }
               previous = current;
               current = current.next;
          }
     }

     removeFromHead() {
          if (!this.head) return null;
          this.head = this.head.next;
          this._length--;
     }

     removeFrom(position = 0) {
          let count = 0;
          let current = this.head;
          if (!current) return null;

          while (count < position) {
               current = current.next;
               count++;
          }
          current.next = current.next.next;
     }

     removeData(data) {
          let current = this.head;
          let previous = current;

          if (!current) {
               return null;
          }

          if (current.data === data) {
               this.head = current.next;
          }

          while (current) {
               if (current.data === data) {
                    var dato = current.data;
                    previous.next = current.next;
                    current = null;

                    return dato;
               }
               previous = current;
               current = current.next;
          }

          return null;
     }

     search(data, cb) {
          let current = this.head;

          while (current) {
               if (typeof data === "function") {
                    if (cb(current.data)) {
                         return current.data;
                    }
               } else {
                    if (current.data === data) {
                         return current.data;
                    }
                    current = current.next;
               }
          }
          return null;
     }

     orderMinToMax() {
          let current = this.head;
          let gonnaReverse = iterativeArray(current);
          gonnaReverse.sort((a, b) => a - b);

          while (current) {
               current.data = gonnaReverse.shift();
               current = current.next;
          }
     }

     reverseMaxToMin() {
          let current = this.head;
          let gonnaReverse = iterativeArray(current);
          gonnaReverse.sort((a, b) => b - a);

          while (current) {
               current.data = gonnaReverse.shift();
               current = current.next;
          }
     }

     print() {
          let print = "head";
          let pointer = this.head;
          while (pointer) {
               print += " --> " + pointer.data;
               pointer = pointer.next;
          }
          print += " --> null";
          return print;
     }
}
