class Mario {
    hp : number;
    speed : number;
    positionx : number;
    positiony : number;
    invincible : boolean;
    currentform : string;

    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string) {
        this.hp = hp;
        this.speed = speed;
        this.positionx = positionx;
        this.positiony = positiony;
        this.invincible = invincible;
        this.currentform = currentform;
    }

    bergerakKanan () : string {
        this.positionx = this.positionx += this.speed;
        return `Mario Bergerak Ke Kanan Sebanyak ${this.positionx} Block`;
    }

    bergerakKiri () : string {
        this.positionx = this.positionx -= this.speed;
        return `Mario Bergerak Ke Kiri Sebanyak ${this.positionx} Block`;
    }

    superMushroom () : string {
        this.hp = this.hp += 1;
        this.currentform  = "superMario";
        return `HP Bertambah Menjadi ${this.hp}, Dan Mario Menjadi ${this.currentform}`;
    }

    fireFlower () : string {
        this.hp = this.hp += 1;
        this.currentform  = "fireMario";
        return `HP Bertambah Menjadi ${this.hp}, Mario Menjadi ${this.currentform} Dan Dapat Menmbakkan Bola Api`;
    }

    superStar () : string {
        this.invincible = true;
        return `Mario Menjadi Invincible, Dan Mario Kebal Terhadap Serangan`;
    }

}

class superMario extends Mario {
    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string) {
        super (hp, speed, positionx, positiony, invincible, currentform)
    }

    superStar () : string {
        this.invincible = true;
        return `superMario Menjadi Invincible, Dan superMario Kebal Terhadap Serangan`;
    }

    diSerang () : string {
        if(this.invincible == true){
            return `superMario Kebal Serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.currentform = "mario";
            return `HP Berkurang Menjadi ${this.hp}, fireMario Menjadi ${this.currentform} Dan Tidak Dapat Menembakkan Api`;
        }
    }

}

class fireMario extends Mario {
    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string) {
        super (hp, speed, positionx, positiony, invincible, currentform)
    }

    superStar () : string {
        this.invincible = true;
        return `fireMario Menjadi invincible, Dan fireMario Kebal Terhadap Serangan`;
    }

    diSerang () : string {
        if(this.invincible == true){
            return `fireMario Kebal Serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.currentform = "mario";
            return `HP Berkurang Menjadi ${this.hp}, fireMario Menjadi ${this.currentform} Dan Tidak Dapat Menembakkan Api`;
        }
    }

}

const mario = new Mario (1, 5, 0, 0, false, "mario");
const supermario = new superMario (2, 5, 0, 0, false, "superMario");
const firemario = new fireMario (2, 5, 0, 0, false, "fireMario");

console.log(mario.superStar());