let btnAction_3 = document.getElementById('btn_3');

btnAction_3.addEventListener('click', () =>{
    let numInput_3 = parseInt(document.getElementById('input_3').value);
    let row = numInput_3;

    while (row > 0) {
        let stars = '';
        let col = row;
    
        while (col > 0) {
            stars += '*';
            col--;
        }
    
        console.log(stars);
        row--;
    }
})


