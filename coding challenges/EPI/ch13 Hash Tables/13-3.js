/*
implement an ISBN cache

basically implement LRU cache
we could use array but if we can do better with hash table and linked list
so, we will try here

the core is, we store cached values in a Link
store the value as key and the Link as value in hash table
add the link as last link in our list
So we can have contact with the value and the Link
and with Link, we can remove it or update it easily

here, we will not implement complete LinkedList, just for LRU cache
has add/shift/update api only
*/

class Link {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  }
}

class LinkedList {
  add(item, price) {
    const newLink = new Link(item, price);
    if (this.head && this.tail) {
      this.tail.next = newLink;
      this.tail = newLink;
    } else if (this.head) {
      this.tail = newLink;
      this.head.next = newLink;
    } else {
      this.head = newLink;
    }
    return newLink;
  }

  shift() {
    // we only shift when the cache is full
    // so I won't worry about the empty list or those sorts
    const oldItem = this.head.item;
    this.head = this.head.next;
    return oldItem;
  }

  update(link) {
    // if the link is the latest(tail), don't do anything
    if (!link.next) { return; }
    this.add(link.item, link.price);
    this.delete(link);
  }

  delete(link) {
    if (link === this.tail) {
      // only happens when the link is the tail O(n)
      let i = this.head;
      while (i.next.next) {
        i = i.next;
      }
      this.tail = i;
      this.tail.next = undefined;
    } else {
      // O(1)
      link.item = link.next.item;
      link.price = link.next.price;
      link.next = link.next.next;
    }
  }
}

class LRUCache {
  constructor() {
    this.map = new Map();
    this.list = new LinkedList();
    this.capacity = 3;
  }

  lookup(item) {
    // if we have it in cached, return the value
    // if we don't, return undefined
    // time: O(1)
    const itemLink = this.map.get(item);
    if (itemLink) {
      this.list.update(itemLink);
      this.map.set(item, this.list.tail);
      return this.list.tail.price;
    }
  }

  insert(item, price) {
    // time: O(1)
    if (this.map.get(item)) {
      // update the link to the back
      this.list.update(this.map.get(item));
    } else {
      // add new link and set it to the map
      this.list.add(item, price);
      if (this.map.size === this.capacity) {
        const oldestItem = this.list.shift();
        this.map.delete(oldestItem);
      }
    }
    this.map.set(item, this.list.tail || this.list.head);
  }

  remove(item) {
    if (this.map.get(item)) {
      this.list.delete(this.map.get(item));
      this.map.delete(item);
      return true;
    }
  }
}
