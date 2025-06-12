let userInput = document.getElementById("date");
userInput.max = new Data().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge(){
    let birthData = new Data(userInput.value);

    let d1 = birthData.getDate();
    let m1 = birthData.getMonth() +1;
    let y1 = birthData.getFullYear();

    let Today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2-y1;

    if(m2 >= m1){
        m3 = m2- m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2>= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2-d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    	console.log(y3,m3,d3);
    result.innerHTML = `you are ${y3} years, ${m3} month and ${y3} years old`;
}

function getDaysInMonth(year, month){
    return new Date(year, month,0).getDate();
}