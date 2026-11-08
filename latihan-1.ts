class Enemy2 {
    hp : number = 100;
    attack : number = 5;
    defense : number = 5;
    speed : number = 5;
    dead : boolean = false;

    attacking () : number { 
        return this.attack;
    }

    walking () : number { 
        return this.speed;
    }

    isDead () : boolean { 
        return (this.dead = true);
    }
}