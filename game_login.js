p1n = localStorage.getItem("PLAYER1");
p2n = localStorage.getItem("PLAYER2");

document.getElementById('p1_name').innerHTML = p1n + " : ";
document.getElementById('p2_name').innerHTML = p2n + " : ";

p1s = 0
p2s = 0


function Send(){
    n1 = document.getElementById('f1').value;
    n2 = document.getElementById('f2').value;
    actual_answer  = parseInt(n1)*parseInt(n2);
    console.log(actual_answer);
    document.getElementById('f1').value = " ";
    document.getElementById('f2').value = " ";

    q = "<h4>Q. "+ n1 +" x "+ n2 +"</h4>";
    a = "<h4>Answer: <input id='AnswerInput'></h4>";
    b = "<button class='btn btn-warning' onclick='Check()'>Check</button>";

    document.getElementById("output").innerHTML = q + a + b;

}

//---Counting Score---//
function Check(){

    ae = document.getElementById('AnswerInput').value
    //---answer entered [ae]---//
    if (ae == actual_answer || Aturn == p1n){
        p1s = p1s =+ 1;
        console.log(p1s);
        document.getElementById('p1_score').innerHTML = p1s;
        document.getElementById('Qturn').innerHTML = p1n;
        document.getElementById('Aturn').innerHTML = p2n;
    }
    else if (ae == actual_answer || Aturn == p2n){
        p2s = p2s =+ 1;
        console.log(p2s);
        document.getElementById('p2_score').innerHTML = p2s;
        document.getElementById('Qturn').innerHTML = p2n;
        document.getElementById('Aturn').innerHTML = p1n;
    }
}

function When(){
document.getElementById('p1_score').innerHTML = p1s;
document.getElementById('p2_score').innerHTML = p2s;

document.getElementById('Qturn').innerHTML = p1n;
document.getElementById('Aturn').innerHTML = p2n;

}
