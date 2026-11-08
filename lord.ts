class Lord2 {
    hp : number = 16000;
    attack : number = 30;
    defense : number = 20;
    speed : number = 5;
    dead : boolean = false;

    basicAttack () : number {
        return this.attack;
    }

    skillArea () : void {
        return console.log ("Lord Mengeluarkan SkillArea");
    }

    skillAirbone () : void {
        return console.log ("Lord Mengeluarkan SkillAirbone");
    }

    isDead () : boolean {
        return (this.dead = true);
    }

    walking () : void {
        return console.log ("Lord Berjalan");
    }
}

const lord = new Lord2();

lord.isDead();