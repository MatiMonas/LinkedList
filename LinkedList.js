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
  }

  print() {
    let print = 'head';
    let pointer = this.head;
    while (pointer) {
      print += ' --> ' + pointer.data;
      pointer = pointer.next;
    }
    print += ' --> null';
    return print;
  }

  add(data) {
    let current = this.head;

    if (!current) {
      this.head = new Node(data);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      current = current.next;
      count++;
    }

    return count;
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
  }

  search(data, cb) {
    let current = this.head;

    while (current) {
      if (typeof data === 'function') {
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

  removeFrom(position) {
    let count = 0;
    let current = this.head;
    let previous = null;

    if (!current) return false;
    if (isNaN(position) || position === null)
      throw new Error('Missing position parameter. Must be a number.');

    if (position === 0) {
      this.head = current.next;
      return true;
    }

    while (count !== position && current.next) {
      previous = current;
      current = current.next;
      count++;
    }

    if (position > count) return false;

    let temp = current.next;
    current = previous;
    current.next = temp;
    return true;
  }

  swapNodes(position1, position2) {
    let current = this.head;
    let count = 0;

    let swappingNode1;
    let swappingNode2;

    if (position1 === position2 || isNaN(position1) || isNaN(position2))
      throw new Error('Positions must be different and type Number');

    if (position1 === 0 || position2 === 0) {
      throw new Error('Positions must be greater than 0');
    }

    while (current) {
      count++;

      if (count === position1) {
        swappingNode1 = current;
      }

      if (count === position2) {
        swappingNode2 = current;
      }
      current = current.next;
    }

    if (position1 > count || position2 > count) return false;

    let tempDataNode1 = swappingNode1.data;
    swappingNode1.data = swappingNode2.data;
    swappingNode2.data = tempDataNode1;
    return true;
  }

  getMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

console.log(linkedList.print());
console.log(linkedList.removeFrom(0));
console.log(linkedList.print());
