/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {
  constructor(ownerName, vehicleType, cylinderCapacity, value) {
    this.ownerName = ownerName;
    this.vehicleType = vehicleType;
    this.cylinderCapacity = cylinderCapacity;
    this.value = value;
  }

  calculateTax() {
    if (this.cylinderCapacity < 100) {
      return 0.01 * this.value;
    } else if (this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200) {
      return 0.03 * this.value;
    } else {
      return 0.05 * this.value;
    }
  }

  showInfo() {
    console.log(`Vehicle's Owner: ${this.ownerName}`);
    console.log(`Vehicle's Type: ${this.vehicleType}`);
    console.log(`Cylinder's Capacity: ${this.cylinderCapacity} cc`);
    console.log(`Vehicle's Value: ${this.value}`);
    console.log(`Registration Tax: ${this.calculateTax()}`);
  }
}

let vehicle1 = new Vehicle("Michael", "Honda Cub", 50, 21000000);
let vehicle2 = new Vehicle("Maria", "Honda AirBlade", 160, 49000000);

console.log("Vehicle 1:");
vehicle1.showInfo();

console.log("Vehicle 2:");
vehicle2.showInfo();
