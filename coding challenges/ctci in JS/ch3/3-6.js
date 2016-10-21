// Animal shelter
// dogs/cats
// FIFO queue
// enqueue, dequeueAny, dequeueDog, dequeueCat

const { SinglyLinkedList } = require('../../../Data Structure/SinglyLinkedList.js');

// animal => type: "dog" / "cat"

class AnimalShelter {
  constructor() {
    this.dogs = new SinglyLinkedList();
    this.cats = new SinglyLinkedList();
    this.timeStamp = 0;
  }

  enqueue(animal) {
    animal.timeStamp = this.timeStamp;
    if (animal.type === 'dog') {
      this.dogs.pushBack(animal);
    } else {
      this.cats.pushBack(animal);
    }
    this.timeStamp++;
  }

  dequeueDog() {
    if (this.dogs.empty()) { return false; }
    let ourDog = this.dogs.popFront();
    delete ourDog['timeStamp'];
    return ourDog;
  }

  dequeueCat() {
    if (this.cats.empty()) { return false; }
    let ourCat = this.cats.popFront();
    delete ourCat['timeStamp'];
    return ourCat;
  }

  dequeueAny() {
    if (this.dogs.empty() && this.cats.empty()) { return false; }
    let arr = [this.cats.head.next.value, this.dogs.head.next.value];
    arr = arr.filter((animal) => animal !== undefined);
    arr.sort((a, b) => a.timeStamp - b.timeStamp);
    return arr[0].type === 'cat' ? this.dequeueCat() : this.dequeueDog();
  }
}

let shelter = new AnimalShelter();
shelter.enqueue({type: 'dog', name: 'daisy'});
shelter.enqueue({type: 'dog', name: 'bowser'});
shelter.enqueue({type: 'cat', name: 'bird'});
shelter.enqueue({type: 'cat', name: 'flower'});
