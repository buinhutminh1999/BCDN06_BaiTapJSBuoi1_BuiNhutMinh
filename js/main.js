/**
 * Bài 1: Viết chương trình tính lương nhân viên
 * Input: oneSalary = 100.000, numDay
 * Proccess: oneSalery * numDay
 * Output: salary
 */

var oneSalary = 100.000;
var numDay = 3;
var salary = oneSalary * numDay 
console.log('Lương nhân viên: ',salary);


/**
 * Bài 2: Viết chương trình nhập vào 5 số thực tùy ý
 * Input: soThuc1, soThuc2, soThuc3, soThuc4, soThuc5
 * Proccess: (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5 ) / 5
 * Output: giatriTb
 */
var soThuc1 = 5;
var soThuc2 = 10;
var soThuc3 = 15;
var soThuc4 = 20;
var sothuc5 = 25;
var giatriTb = ( soThuc1 + soThuc2 + soThuc3 + soThuc4 + sothuc5 ) / 5;
console.log('Gía trị trung bình là: ',giatriTb)

/**
 * Bài 3: Quy đổi tiền
 * Input: USD = 23.500, vnd
 * Proccess: usdtovnd = vnd * USD
 * Output: số tiền sau khi quy đổi
 */

var usd = 23.500;
var vnd = 2;
var usdtovnd = vnd * usd;
console.log('Số tiền sau khi quy đổi là: ', usdtovnd);

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * Input: chiều dài, chiều rộng
 * Proccess: dientich = dai * rong, chuvi = (dai + rong ) * 2
 * Output: dientich, chuvi
 */

var chieuDai = 3;
var chieuRong = 4;
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;
console.log('Diện tích hình chữ nhật là: ', dienTich)
console.log('Chu vi hình chữ nhật là: ', chuVi)

/**
 * Bài 5: Tính tổng 2 ký số
 * Input: num
 * Procces: sohangDV= num % 10, sohangChuc = num / 10 
 * Output: Tổng 2 ký số
 */

var num = 98;
var ten = Math.floor(num / 10);
var unit = num % 10;
var total = ten + unit;
console.log('Tổng 2 ký số là: ', total)