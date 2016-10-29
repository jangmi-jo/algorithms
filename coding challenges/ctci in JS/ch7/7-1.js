class Deck {
  constructor() {
    this.cards = Deck.buildDeck();
  }

  draw() {
    return this.cards.pop();
  }

  shuffle() {
    for (let i=this.cards.length; i>0; i--) {
      let j = Math.floor(Math.random() * i);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  static buildDeck() {
    let deck = [];
    "A23456789TJQK".split('').forEach((val) => {
      "HSDC".split('').forEach((suit) => {
        deck.push(new Card(val, suit));
      });
    });
    return deck;
  }
}

class Card {
  constructor(val, suit) {
    this.val = val;
    this.suit = suit;
  }
}
