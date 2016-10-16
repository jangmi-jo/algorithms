class Link {
  constructor(value) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Link();
    this.tail = new Link();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.length = 0;
  }

  forEach(func) {
    let current = this.head;
    while (current !== this.tail) {
      // do this for break forEach early
      let returnValue = func(current);
      if (returnValue !== undefined) {
        return returnValue;
      }
      current = current.next;
    }
  }

  display() {
    let list = [];
    this.forEach((link) => {
      if (link !== this.head) {
        list.push(link.value);
      }
    });
    console.log(list);
  }

  pushFront(key) {
    // add to front
    // O(1)
    let newLink = new Link(key);
    this.head.next.prev = newLink;
    newLink.prev = this.head;
    newLink.next = this.head.next;
    this.head.next = newLink;
    this.length += 1;
    return newLink;
  }

  topFront() {
    // return the first link
    // O(1)
    this.checkEmpty();
    return this.head.next;
  }

  popFront() {
    // remove first link
    // O(1)
    this.checkEmpty();
    let popedLink = this.head.next;
    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;
    this.length -= 1;
    return popedLink;
  }

  pushBack(key) {
    // add to back
    // O(1)
    let newLink = new Link(key);
    newLink.prev = this.tail.prev;
    newLink.next = this.tail;
    this.tail.prev.next = newLink;
    this.tail.prev = newLink;
    this.length += 1;
    return newLink;
  }

  topBack() {
    // return last link
    // O(1)
    this.checkEmpty();
    return this.tail.prev;
  }

  popBack() {
    // remove last link
    // O(1)
    this.checkEmpty();
    this.length -= 1;
    let popedLink = this.tail.prev;
    popedLink.prev.next = this.tail;
    this.tail.prev = popedLink.prev;
    return popedLink;
  }

  find(key) {
    // return boolean if the key is in the list
    // O(n)
    let exist = false;
    this.forEach((el) => {
      if (el.value === key) {
        exist = true;
        return exist;
      }
    });
    return exist;
  }

  remove(key) {
    // remove the key
    // O(n)
    this.forEach((el) => {
      if (el.value === key) {
        this.length -= 1;
        el.prev.next = el.next;
        el.next.prev = el.prev;
        return true;
      }
    });
  }

  checkEmpty() {
    if (this.empty()) {
      throw "The list is empty";
    }
  }

  empty() {
    // return boolean
    // O(1)
    return this.head.next === this.tail;
  }

  addBefore(link, key) {
    // add key before the link
    // O(1)
    let newLink = new Link(key);
    newLink.prev = link.prev;
    newLink.next = link;
    link.prev.next = newLink;
    link.prev = newLink;
    this.length += 1;
    return newLink;
  }

  addAfter(link, key) {
    // add key after the link
    // O(1)
    let newLink = new Link(key);
    newLink.prev = link;
    newLink.next = link.next;
    link.next.prev = newLink;
    link.next = newLink;
    this.length += 1;
    return newLink;
  }
}

module.exports = { DoublyLinkedList, Link };
