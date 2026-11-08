class npc {
    health : number;
    speed : number;
    defense : number;
    attack : number;
    npctype : string;

    constructor (health : number, speed : number, defense : number, attack : number, npctype : string) {
    this.health = health;
    this.speed = speed;
    this.defense = defense;
    this.attack = attack;
    this.npctype = npctype;
    }

    walking(): number{
        this.speed += 2;
        return this.speed;
    }

    attacking(): number {
        this.attack += 2;
        return this.attack;
    }

    sprint(): number {
        this.speed += 4;
        return this.speed;
    }

    ultimateskill(): number {
        this.attack += 10;
        return this.attack;
    }

    isFlying() {
        if (
            this.npctype === "fly"
        ){
            this.speed += 5;
            this.attack += 5;
            return `NPC Itu Terbang`;
        }
        return `Bukan NPC Terbang`
    }
}

const harpy = new npc (100, 20, 10, 25, "fly");
const goblin = new npc (150, 25, 15, 20, "walk")

console.log (harpy.attacking());
console.log (harpy.isFlying());