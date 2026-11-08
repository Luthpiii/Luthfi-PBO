class Motor {
  merk: string;
  model: string;
  tipe: string;
  cc: number;
  stok: number;

  constructor(merk: string, model: string, tipe: string, cc: number, stok: number) {
    this.merk = merk;
    this.model = model;
    this.tipe = tipe;
    this.cc = cc;
    this.stok = stok;
  }

  pinjam() {
    if (this.stok === 0) {
      throw new Error(`Maaf, motor "${this.merk} ${this.model}" sedang kosong/habis.`);
    }
    this.stok--;
    console.log(
      `Motor "${this.merk} ${this.model}" berhasil disewa. Sisa Stok : ${this.stok}`
    );
  }

  kembalikan() {
    this.stok++;
    console.log(
      `Motor "${this.merk} ${this.model}" telah dikembalikan. Sisa Stok : ${this.stok}`
    );
  }
}

class Penyewa {
  nama: string;
  jumlahSewa: number;

  constructor(nama: string) {
    this.nama = nama;
    this.jumlahSewa = 0;
  }

  sewaMotor(motor: Motor) {
    if (this.jumlahSewa >= 3) {
      throw new Error(`ERROR: ${this.nama} sudah menyewa maksimal 3 motor! Tidak bisa menyewa "${motor.merk} ${motor.model}".`);
    }
    
    console.log(`${this.nama} sedang memproses penyewaan motor "${motor.merk} ${motor.model}"...`);
    motor.pinjam();
    this.jumlahSewa++;
    console.log(`-> Total motor yang disewa oleh ${this.nama}: ${this.jumlahSewa}/3\n`);
  }

  kembalikanMotor(motor: Motor) {
    if (this.jumlahSewa > 0) {
        console.log(`${this.nama} sedang memproses pengembalian motor "${motor.merk} ${motor.model}"...`);
        motor.kembalikan();
        this.jumlahSewa--;
        console.log(`-> Total motor yang disewa oleh ${this.nama} sekarang: ${this.jumlahSewa}/3\n`);
    } else {
        console.log(`${this.nama} tidak memiliki motor untuk dikembalikan.\n`);
    }
  }
}

const motorMatic = new Motor("Honda", "Beat", "Matic", 110, 5);
const motorSport = new Motor("Yamaha", "R15", "Sport", 155, 2);
const motorTrail = new Motor("Kawasaki", "KLX", "Trail", 150, 3);
const motorListrik = new Motor("Gesits", "G1", "Listrik", 0, 4)

const penyewaAndi = new Penyewa("Andi");
const penyewaBudi = new Penyewa("Budi");

penyewaAndi.sewaMotor(motorMatic);
penyewaAndi.sewaMotor(motorSport);
penyewaAndi.sewaMotor(motorTrail);
penyewaBudi.sewaMotor(motorListrik);