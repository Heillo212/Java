// Bai 1
let btnAction_1 = document.getElementById("btn-action-1");

btnAction_1.addEventListener("click", () => {
    let lengthElem = parseFloat(document.getElementById("length").value);
    let widthElem = parseFloat(document.getElementById("width").value);
  
    if (lengthElem === widthElem) {
      alert("Square");
    } else {
      alert("Nope");
    }
  });

// Bai 2
let btnAction_2 = document.getElementById("btn-action-2");
btnAction_2.addEventListener("click",() => {
    let a = parseFloat(document.getElementById("number-a").value);
    let b = parseFloat(document.getElementById("number-b").value);
  
    if (a >= b){
        alert(`Biggest value is: ${a}`);
    } else{
        alert(`Biggest value is: ${b}`);
    }
  });

// Bai 3
document.getElementById("btn-action-3").addEventListener("click", () =>{
    let n = parseFloat(document.getElementById("n").value);
    if (n>=0){
        alert(`Gia tri tuyet doi cuar ${n} la ${n}`);
    } else{
        alert(`Gia tri tuyet doi cuar ${n} la ${-n}`);
    }
})

// Bai 4

let btnAction_4 = document.getElementById("btn-action-4");

btnAction_4.addEventListener("click", () =>{
    let dayInput = parseFloat(document.getElementById("day").value);

    if(dayInput == 2) alert("Monday");
    else if(dayInput == 3) alert("Tuesday");
    else if(dayInput == 4) alert("Wednesday");
    else if(dayInput == 5) alert("Thurday");
    else if(dayInput == 6) alert("Friday");
    else if(dayInput == 7) alert("Saturday");
    else alert("Sunday");
});

// Bai 4 (cách 2 sử dụng switch case )


// Bai 5

let btnAction_5 = document.getElementById("btn-action-5");

btnAction_5.addEventListener("click", () =>{
    let n1Input = parseFloat(document.getElementById("n1").value);
    let n2Input = parseFloat(document.getElementById("n2").value);
    let n3Input = parseFloat(document.getElementById("n3").value);

    if(n1Input >= n2Input && n1Input >= n3Input) alert(n1Input);
    else if(n2Input >= n1Input && n2Input >= n3Input) alert(n2Input);
    else alert(n3Input);
});