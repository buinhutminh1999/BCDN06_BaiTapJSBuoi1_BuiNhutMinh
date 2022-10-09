/**
 * Bài 1: Viết chương trình tính lương nhân viên
 * Khối 1: oneSalary = 100.000, numDay
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến và lưu giá trị input
 *  B2: Lập công thức tính toán
 *      salary = Number(oneSalary) * Number(numDay); 
 *  B3: Thông báo kết quả console.log()
 * Khối 3: Tổng lương nhân viên
 * oneSalery * numDay
 * Khối 3: salary
 */

var oneSalary = 100000;
var numDay = 3;
var salary = Number(oneSalary) * Number(numDay); 
console.log('Lương nhân viên: ',salary);


/**
 * Bài 2: Viết chương trình nhập vào 5 số thực tùy ý
 * Khối 1: soThuc1, soThuc2, soThuc3, soThuc4, soThuc5
 * Khối 2: Các bước xử lý
 *  B1: Khai bao biến và lưu giá trị input
 *  B2: Lập công thức tính toán 
 *  (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5 ) / 5
 *  B3: Thông báo kết quả console.log()
 * Khối 3: Gía trị trung bình
 */
var soThuc1 = 5;
var soThuc2 = 10;
var soThuc3 = 15;
var soThuc4 = 20;
var sothuc5 = 25;
var giatriTb = ( Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(sothuc5) ) / 5;
console.log('Gía trị trung bình là: ',giatriTb)

/**
 * Bài 3: Quy đổi tiền
 * Khối 1: 1 USD = 23.500 vnd
 * Khối 2: Các bước xử lý
 *  B1: Khai báo giá biến và lưu giá trị input 
 *  B2: Lập công thức tính toán
 *  usdtovnd = vnd * USD
 *  B3: Thông báo kết quả console.log()
 * Khối 3: số tiền sau khi quy đổi
 */

var usd = 23500;
var vnd = 2;
var usdtovnd = Number(vnd) * Number(usd);
console.log('Số tiền sau khi quy đổi là: ', usdtovnd);

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * Khối 1: chiều dài, chiều rộng 
 * Khối 2: Các bước xử lý
 *  B1: Khai báo giá biến và lưu giá trị input 
 *  B2: Lập công thức tính toán   
 *  dientich = dai * rong, chuvi = (dai + rong ) * 2
 *  B3: Thông báo console.log() 
 * Khối 3: dientich, chuvi
 */

var chieuDai = 3;
var chieuRong = 4;
var dienTich = chieuDai * chieuRong;
var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
console.log('Diện tích hình chữ nhật là: ', dienTich)
console.log('Chu vi hình chữ nhật là: ', chuVi)

/**
 * Bài 5: Tính tổng 2 ký số
 * Khối 1: num
 * Khối 2: Các bước xử lý
 *  B1: Khai báo giá biến và lưu giá trị input 
 *  B2: Lập công thức tính toán
 *  sohangDV= num % 10 
 *  sohangChuc = num / 10 
 *  B3: Thông báo console.log() 
 * Khối 3: Tổng 2 ký số
 */

var num = 98;
var ten = Math.floor(num / 10);
var unit = num % 10;
var total = ten + unit;
console.log('Tổng 2 ký số là: ', total)
