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

class LinkedList {
     constructor() {
          this.head = null;
          this._length = 0;
     }

     add(data) {
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
               return current.value;
          }

          while (current) {
               if (!current.next) {
                    previous.next = null;
                    return current.value;
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
