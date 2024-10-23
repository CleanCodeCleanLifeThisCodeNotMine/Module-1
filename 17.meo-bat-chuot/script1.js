// Lớp mô tả đối tượng Chuột (Rat)
class Rat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.isAlive = true; // Trạng thái: sống hay chết
    }

    squeak() {
        document.write(this.name + " says: Chít chít!<br>");
    }
}

// Lớp mô tả đối tượng Mèo (Cat)
class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    meow() {
        document.write(this.name + " says: Meo meo!<br>");
    }

    catchRat(rat) {
        if (this.maxSpeed > rat.speed && rat.isAlive) {
            document.write(this.name + " has caught " + rat.name + "!<br>");
            return true;
        } else {
            document.write(this.name + " failed to catch " + rat.name + "!<br>");
            return false;
        }
    }

    eatRat(rat) {
        if (rat.isAlive) {
            document.write(this.name + " is eating " + rat.name + "!<br>");
            this.weight += rat.weight;
            rat.isAlive = false; // Chuột bị ăn sẽ chết
            document.write(this.name + "'s weight is now: " + this.weight + "kg<br>");
        } else {
            document.write(rat.name + " is already dead! " + this.name + " cannot eat it again!<br>");
        }
    }
}

// Tạo đối tượng chuột
let rat1 = new Rat("Jerry", 0.5, 10);
rat1.squeak();

// Tạo đối tượng mèo
let cat1 = new Cat("Tom", 5, 15);
cat1.meow();

// Mèo cố gắng bắt chuột
if (cat1.catchRat(rat1)) {
    // Nếu bắt được, mèo ăn chuột
    cat1.eatRat(rat1);
}

// Thử lại xem mèo có thể ăn chuột đã chết không
cat1.eatRat(rat1);


    // cat
    // ---------
    // name: string
    // weight: number
    // maxSpeed: number
    // ---------
    // meow(): void
    // catchRat(): void
    // eatRat(): void
    //
    // rat
    // ---------
    // name: string
    // weight: number
    // speed: number
    // isAlive(): boolean
    // ---------
    // squeak(): void
