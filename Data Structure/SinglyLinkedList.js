class Link {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = new Link();
    this.tail = new Link();
    this.head.next = this.tail;
    this.length = 0;
  }

  forEach(func) {
    let current = this.head;
    while (current !== this.tail) {
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
    newLink.next = this.head.next;
    this.head.next = newLink;
    this.length += 1;
    return newLink;
  }

  topFront() {
    // return the first link
    // O(1)
    return this.head.next;
  }

  popFront() {
    // remove first link
    // O(1)
    this.head.next = this.head.next.next;
    this.length -= 1;
  }

  pushBack(key) {
    // add to back
    // O(1)
    this.tail.value = key;
    this.tail.next = new Link();
    let newLink = this.tail;
    this.tail = this.tail.next;
    this.length += 1;
    return newLink;
  }

  topBack() {
    // return last link
    // Since we don't have prev attribute,
    // we can't react to the last one easily
    // O(n)
    return this.forEach((el) => {
      if (el.next === this.tail) {
        return el;
      }
    });
  }

  popBack() {
    // remove last link
    // O(n)
    this.forEach((el) => {
      if (el.next === this.tail) {
        el.value = undefined;
        el.next = undefined;
        this.tail = el;
        return true;
      }
    });
    this.length -= 1;
  }

  find(key) {
    // return boolean if the key is in the list
    // O(n)
    let exist = false;
    this.forEach((el) => {
      if (el.value === key) {
        exist = true;
      }
    });
    return exist;
  }

  remove(key) {
    // remove the key
    // O(n)
    this.forEach((el) => {
      if (el.next.value === key) {
        el.next = el.next.next;
        return;
      }
    });
  }

  empty() {
    // return boolean
    // O(1)
    return this.head.next === this.tail;
  }

  addBefore(link, key) {
    // add key before the link
    // O(n)
    let newLink = new Link(key);
    this.forEach((e) => {
      if (e.next === link) {
        e.next = newLink;
        return true;
      }
    });
    newLink.next = link;
  }

  addAfter(link, key) {
    // add key after the link
    // O(1)
    let newLink = new Link(key);
    newLink.next = link.next;
    link.next = newLink;
  }
}
