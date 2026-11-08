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
        return `${this.currentform} Bergerak Maju Ke Kanan Sebanyak ${this.positionx} Block`;
    }

    bergerakKiri () : string {
        this.positionx = this.positionx -= this.speed;
        return `${this.currentform} Bergerak Mundur Ke Kiri Sebanyak ${this.positionx} Block`;
    }

    superMushroom () : string {
        this.hp = this.hp += 1;
        this.currentform  = "superMario";
        return `HP Bertambah Menjadi ${this.hp}, Dan Mario Berubah Menjadi ${this.currentform}`;
    }

    fireFlower () : string {
        this.hp = this.hp += 1;
        this.currentform  = "fireMario";
        return `HP Bertambah Menjadi ${this.hp}, Mario Berubah Menjadi ${this.currentform} Dan Dapat Menembakkan Bola Api`;
    }

    superStar () : string {
        this.invincible = true;
        return `${this.currentform} Menjadi Invincible, Dan ${this.currentform} Menjadi Kebal Terhadap Serangan`;
    }

}

class superMario extends Mario {
    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string) {
        super (hp, speed, positionx, positiony, invincible, currentform)
    }

    diSerang () : string {
        if(this.invincible == true){
            return `${this.currentform} Menjadi Kebal Terhadap Serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.currentform = "mario";
            return `HP Berkurang Menjadi ${this.hp}, superMario Berubah Menjadi ${this.currentform}`;
        }
    }

}

class fireMario extends Mario {
    constructor (hp : number, speed : number, positionx : number, positiony : number, invincible : boolean , currentform : string) {
        super (hp, speed, positionx, positiony, invincible, currentform)
    }

    diSerang () : string {
        if(this.invincible == true){
            return `${this.currentform} Menjadi Kebal Terhadap Serangan`;
        }
        else {
            this.hp = this.hp -= 1;
            this.currentform = "mario";
            return `HP Berkurang Menjadi ${this.hp}, fireMario Berubah Menjadi ${this.currentform} Dan Tidak Dapat Menembakkan Api`;
        }
    }

}

const mario = new Mario (1, 5, 0, 0, false, "mario");
const supermario = new superMario (2, 5, 0, 0, false, "superMario");
const firemario = new fireMario (2, 5, 0, 0, false, "fireMario");

console.log(supermario.superStar());
console.log(supermario.diSerang());
console.log(firemario.bergerakKanan());