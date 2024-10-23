
<!--Lớp (Class): Lớp là bản thiết kế để tạo ra các đối tượng. Lớp có thể chứa các thuộc tính (dữ liệu) và phương thức (hành động) để đối tượng thực hiện.-->
<!--Đối tượng (Object): Đối tượng là một thực thể cụ thể được tạo ra từ lớp. Nó có các thuộc tính và phương thức mà lớp đã định nghĩa. Mỗi đối tượng là một thể hiện cụ thể của lớp.-->

//VD ve class

class NoLe {
    constructor(tuoi, khaNang) {
        this.tuoi = tuoi;
        this.khaNang = khaNang;
    }

    displayInfo() {
        document.write(`Car: ${this.tuoi} ${this.khaNang}<br>`);
    }
}

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        document.write(`${this.name} makes ${this.sound} sound.<br>`);
    }
}

class daiGia {
    constructor(giaicap, tien) {
        this.Dalit = giaicap;
        this.dollar = tien;
    }
    tieutien() {
        document.write(`${this.Dalit} tieu ${this.dollar}<br>`);
    }
}




//obj
let dog = new Animal("Dog", "woof");
dog.makeSound(); // Dog makes woof sound.


let Manh = new NoLe("Manh","khaNang");
Manh.displayInfo();

let Long = new daiGia("Dalit", "dollar")
Long.tieutien();




// ---------------------
//      Rectangle
// ---------------------
//  - length: int
//  - width: int
// ---------------------
// + Rectangle(length: int, width: int)
// + getArea(): int
// + getPerimeter(): int
// + drawRectangle(): void

class rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    get length() {
        return this.length;
    }
    get width() {
        return this.width;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}