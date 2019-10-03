class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.center = Math.round((this.min+this.max)/2);
    }

    lower() {
        this.max = this.center;
    }

    greater() {
        this.min = this.center;
    }
}

module.exports = GuessingGame;
