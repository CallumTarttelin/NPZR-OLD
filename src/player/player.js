
export default class Player {
  constructor(deck, stacks) {
    this.deck = deck;
    this.hand = {cards: []};
    this.stacks = stacks;
  }

  draw() {
    this.hand.cards.push(this.deck.draw());
  }

  play(card, stack, position) {
    if (this.hand.cards.indexOf(card) >= 0) {
      try {
        stack.play(card, position);
        this.hand.cards.splice(this.hand.cards.indexOf(card), 1);
      } catch (e) {
        // do nothing
      }
    }
  }

}
