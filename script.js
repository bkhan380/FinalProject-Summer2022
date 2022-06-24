var player = document.getElementById("player");
var block = document.getElementById("block");

var score = 0;

function JumpOnClick() {
    if(player.classList == "animate") {return}
    player.classList.add("animate");
    setTimeout(function() {
        player.classList.remove("animate");
    }, 300);
}

var checkIfDead = setInterval(function() {
    let playerTop =
    parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let leftBlock = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(leftBlock < 20 && leftBlock >-20 && playerTop>=130){
        block.style.animation = "none";
        alert("You Lost!! Try again! Your Score is: "+Math.floor(score/100));
        score = 0;
        block.style.animation = "Block 1s infinite linear";
    }else{
        score++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);

    }

    }, 10);

