// Bài 4: Cho 2 array có cùng số phần tử với nhau. 

let array1 = [10, 20, 30, 40];
let array2 = [100, 200, 300, 400];

for (let i = array1.length - 1, j = 0; i >= 0; i--, j++) {
    document.write(array1[j] + " " + array2[i] + "<br>");
}

// Hãy in các thành phần trong 2 array theo format dưới đây (sử dụng document.write)
/**
 * 10 400
 * 20 300
 * 30 200
 * 40 100
 */

