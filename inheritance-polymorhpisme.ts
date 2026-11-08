// Parent Class
class PublicEnemy {
    hp : number;
    attack : number;
    defense : number;
    speed : number;

    constructor (hp : number, attack : number, defense : number, speed : number) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    basicAttack () : number {
        return (this.attack = 10);
    }
}

//Child Class
class Lord extends PublicEnemy {
constructor () {
    super (16000, 20, 15, 10);
}

    areaEffect () : void {
        this.attack;
    }

    basicAttack () : number {
        return (this.attack = 50);
    }
    
}

//Child Class
class Turtle extends PublicEnemy {
    basicAttack () : number {
        return (this.attack = 20);
    }
}

//Child Class
class BlueWolf extends PublicEnemy {

}

//Child Class
class RedDragon extends PublicEnemy {

}