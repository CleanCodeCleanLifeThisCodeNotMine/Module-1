function cong() {
    let n1 = document.getElementById("numb1").value;
    let n2 = document.getElementById("numb2").value;
    let nn1 = parseInt(n1);
    let nn2 = parseInt(n2);
    let result = nn1 + nn2
    // let result= n1 + n2;
    // document.getElementById(result).innerHTML = result;
    // let result = Number(n1) + Number(n2);
    document.getElementById("result").innerHTML = result;
}

function tru() {
    let n1 = document.getElementById("numb1").value;
    let n2 = document.getElementById("numb2").value;
    // let result= n1 + n2;
    // document.getElementById(result).innerHTML = result;
    let result = Number(n1) - Number(n2);
    document.getElementById("result").innerHTML = result;
}

function nhan() {
    let n1 = document.getElementById("numb1").value;
    let n2 = document.getElementById("numb2").value;
    // let result= n1 + n2;
    // document.getElementById(result).innerHTML = result;
    let result = Number(n1) * Number(n2);
    document.getElementById("result").innerHTML = result;
}

function chia() {
    let n1 = document.getElementById("numb1").value;
    let n2 = document.getElementById("numb2").value;
    let result= +n1 + +n2;
    // document.getElementById(result).innerHTML = result;
    // let result = Number(n1) / Number(n2);
    document.getElementById("result").innerHTML = 'Kết quả: '+ result;
}