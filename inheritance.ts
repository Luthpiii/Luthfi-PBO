class Hero {
    health : number = 100;
    speed : number = 100;
    magicaldefense : number = 100;
    physicaldefense : number = 100;
    basicattack : number = 100;

    getinformationhero(): string {
        return `Darahnya ${this.health}, Speednya ${this.speed}`
    }

    getattacked (damage : number): number {
        this.health = this.health - damage;
        return this.health;
    }

    gethealing (healing : number): number {
        this.health = this.health + healing;
        return this.health;
    }
}

const hero = new Hero ();

console.log(hero.getinformationhero());
console.log(hero.gethealing(20));