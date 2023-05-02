// Ninja class
class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    // Log ninja's name
    sayName() {
        console.log(this.name);
    }

    // Show ninja's stats
    showStats() {
        console.log(`${this.name}: speed = ${this.speed}, strength = ${this.strength}, health = ${this.health}`);
    }

    // Add 10 health to the ninja
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja('tom', 10);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();