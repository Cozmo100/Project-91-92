
function ToGame(){
    p1 = document.getElementById('player1_name').value;
    p2 = document.getElementById('player2_name').value;

    localStorage.setItem("PLAYER1",p1);
    localStorage.setItem("PLAYER2",p2);

    window.location = "game_login.html";
}

