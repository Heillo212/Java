// Bai 1

let btnAction1 = document.getElementById('btn_1');
btnAction1.addEventListener('click', () =>{
    let numInput1 = parseInt(document.getElementById('input_1').value);
    let result = 0;
    for (let i = 0; numInput1 >= i; i += 1){
        if (i % 2 == 0){
            result += i;
        }
    }
    console.log(result);
})

// Bai 2

// let btnAction2 = document.getElementById('btn_2');
// btnAction2.addEventListener('click', () =>{
//     let numInput2 = parseInt(document.getElementById('input_2').value);
//     let result = 1

//     for (let i = 1; numInput2 >= i; i += 1){
//         result *= i;
//     }
//     console.log(result);
// })

// Bai 3 

// let btnAction3 = document.getElementById('btn_3');
// btnAction3.addEventListener('click', () =>{
//     let numInput3_congSai = parseInt(document.getElementById('input_3_congSai').value);
//     let numInput3_soHang = parseInt(document.getElementById('input_3_soHang').value);
    

//     console.log(numInput3_soHang);

//     for (let i = 0; i < 10; i += 1) {
//             let result = numInput3_soHang + i * numInput3_congSai;
//             console.log(result);
//     }
// })

// Bai 4

// let btnAction4 = document.getElementById('btn_4');
// btnAction4.addEventListener('click', () => {
//     let numInput4 = parseInt(document.getElementById('input_4').value);

//     for (let i = 1; i <= 10; i++) {
//         let result = numInput4 * i;
//         console.log(numInput4 + " x " + i + " = " + result);
//     }
// })
