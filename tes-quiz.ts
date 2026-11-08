class Mario1 {
    hp : number;
    speed : number;
    positionx : number;
    positiony : number;
    invincible : boolean;
    currentform : string;
    isdead : boolean;
    fireball : number;
    jump : number;

    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string, isdead : boolean, fireball : number, jump : number) {
        this.hp = hp;
        this.speed = speed;
        this.positionx = positionx;
        this.positiony = positiony;
        this.invincible = invincible;
        this.currentform = currentform;
        this.isdead = isdead;
        this.fireball = fireball;
        this.jump = jump;
    }

    melompat () : string {
        this.positiony = this.positiony += this.jump;
        return `${this.currentform} Melompat Setinggi ${this.positiony} Block`
    }

    bergerakKanan () : string {
        this.positionx = this.positionx += this.speed;
        return `${this.currentform} Bergerak Maju Ke Kanan Sebanyak ${this.positionx} Block`;
    }

    bergerakKiri () : string {
        this.positionx = this.positionx -= this.speed;
        return `${this.currentform} Bergerak Mundur Ke Kiri Sebanyak ${this.positionx} Block`;
    }

    superMushroom () : string {
        this.hp = this.hp += 1;
        this.currentform  = "superMario1";
        return `HP Bertambah Menjadi ${this.hp}, Dan Mario Berubah Menjadi ${this.currentform}`;
    }

    fireFlower () : string {
        this.hp = this.hp += 1;
        this.currentform  = "fireMario1";
        return `HP Bertambah Menjadi ${this.hp}, Mario Berubah Menjadi ${this.currentform} Dan Dapat Menembakkan Bola Api`;
    }

    superStar () : string {
        this.invincible = true;
        return `${this.currentform} Menjadi Invincible, Dan ${this.currentform} Menjadi Kebal Terhadap Serangan`;
    }

    diSerang () : string {
        if(this.invincible == true){
            return `${this.currentform} Menjadi Kebal Terhadap Serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.isdead = true;
            return `${this.currentform} Terkena Serangan, HP Menjadi ${this.hp}, dan (${this.isdead}) Mario Telah Mati`
        }
    }

    shootFireBall(fireball: number): string {
    if (this.currentform === "mario1") {
        return `${this.currentform} Tidak Dapat Menembakkan Bola Api`;
    } 
    else if (this.currentform === "superMario1") {
        return `${this.currentform} Tidak Dapat Menembakkan Bola Api`;
    }
    else {
        this.fireball = fireball;
        return `${this.currentform} Menembakkan Bola Api Sebanyak ${this.fireball}`;
    }
}


}

class superMario1 extends Mario1 {
    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string, isdead : boolean, fireball : number, jump : number) {
        super (hp, speed, positionx, positiony, invincible, currentform, isdead, fireball, jump)
    }

    diSerang () : string {
        if(this.invincible == true){
            return `${this.currentform} Menjadi Kebal Terhadap Serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.currentform = "mario1";
            return `HP Berkurang Menjadi ${this.hp}, superMario Berubah Menjadi ${this.currentform}`;
        }
    }
}

class fireMario1 extends Mario1 {
    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string, isdead : boolean, fireball : number, jump : number) {
        super (hp, speed, positionx, positiony, invincible, currentform, isdead, fireball, jump)
    }

    diSerang () : string {
        if(this.invincible == true){
            return `${this.currentform} Menjadi Kebal Terhadap Serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.currentform = "mario1";
            return `HP Berkurang Menjadi ${this.hp}, fireMario Berubah Menjadi ${this.currentform} Dan Tidak Dapat Menembakkan Api`;
        }
    }

}

const mario1 = new Mario1 (1, 5, 0, 0, false, "mario1", false, 0, 3);
const supermario1 = new superMario1 (2, 5, 0, 0, false, "superMario1", false, 0, 3);
const firemario1 = new fireMario1 (2, 5, 0, 0, false, "fireMario1", false, 0, 3);

console.log(mario1.shootFireBall(10));
console.log(supermario1.shootFireBall(10));
console.log(firemario1.shootFireBall(10));
console.log(firemario1.melompat());
console.log(firemario1.diSerang());
console.log(mario1.diSerang());