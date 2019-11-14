/*1. Create a linked list class
Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.*/

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    if (!this.head) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;
      while ((currNode !== null) && (currNode.value !== key)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
      if (currNode.value === key) {
        previousNode.next = new _Node(item, currNode);
      }
    }

  }

  insertAfter(item, key) {
    if (!this.head) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;
      while ((currNode !== null) && (currNode.value !== key)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
      if (currNode.value === key) {
        let foundNode = currNode;
        let afterFoundNode = currNode.next;


        foundNode.next = new _Node(item, afterFoundNode);
      }
    }
  }

  insertAt(item, pos) {
    if (!this.head) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;

      for (let i = 1; i <= pos; i++) {
        previousNode = currNode;
        currNode = currNode.next;

        if (i === pos) {
          previousNode.next = new _Node(item, currNode);
        }
      }
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currentNode.value !== item) {
      if (currentNode === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}

function display(list) {
  let currentNode = list.head;

  while (currentNode.next !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}

function size(list) {
  let currentNode = list.head;
  let counter = 0;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    counter++;
  }
  console.log(counter);
}

function isEmpty(list) {
  if (list.head === null) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function findPrevious(list, item) {
  let currentNode = list.head;
  let previousNode = list.head;

  if (list.head === item) {
    return null;
  }

  while (currentNode.value !== item && currentNode.next !== null) {
    currentNode = currentNode.next;
    if (currentNode.value === item) {
      return previousNode.value;
    }
    previousNode = currentNode;
  }
}

function findLast(list) {
  let currentNode = list.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  if (currentNode.next === null) {
    return currentNode;
  }
}


module.exports = LinkedList, size, isEmpty, display, findPrevious, findLast;