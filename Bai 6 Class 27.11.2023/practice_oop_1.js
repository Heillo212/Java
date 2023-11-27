/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */

class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    area() {
      return this.length * this.width;
    }
  
    perimeter() {
      return (this.length + this.width) * 2;
    }
  
    showInfo() {
      console.log(`Length: ${this.length}`);
      console.log(`Width: ${this.width}`);
      console.log(`Area: ${this.area()}`);
      console.log(`Perimeter: ${this.perimeter()}`);
    }
  }
  
  let rectangle1 = new Rectangle(10, 20);
  let rectangle2 = new Rectangle(8, 12);
  
  console.log("Rectangle 1:");
  rectangle1.showInfo();
  
  
  console.log("Rectangle 2:");
  rectangle2.showInfo();
  