//JS Code written with help from StackOverflow users:

// https://stackoverflow.com/questions/66834196/how-to-make-multiple-divs-appear-one-after-the-other-using-javascript

// https://stackoverflow.com/questions/66835967/how-to-run-a-function-after-one-is-done-or-after-an-item-in-an-array-loads

// https://stackoverflow.com/questions/66836842/how-to-auto-scroll-chat-box-as-messages-appear

// https://stackoverflow.com/questions/66838108/how-to-stop-sound-from-playing-or-how-do-i-make-it-play-once

const myHTMLCollection = document.getElementsByClassName("invisible");
const HTMLElementsArr = [...myHTMLCollection];
const messageTeacher = document.getElementsByClassName("message-teacher");
const teacherArray = [...messageTeacher];
var msg5 = document.getElementById("msg5");
var msg6 = document.getElementById("msg6");
var msg7 = document.getElementById("msg7");
var msg8 = document.getElementById("msg8");
var msg9 = document.getElementById("msg9");
var audio = new Audio('facebookSound.mp3');
var isPlayed = false;
var isAnimate = false;
var scrollAni3 = document.getElementById("typing-animation3");


var chatInputArray = [
   'Her name is Sam...',
   'Did you know her or h...',
    '', '|'
  ];


function blueMessage() {
    if (HTMLElementsArr.length > 0) {
        HTMLElementsArr.shift().classList.remove('invisible');
        document.getElementById('chat-intro').style.display = "none";
        $(".chatInput").text(chatInputArray[1]);

    }

    if (HTMLElementsArr.length > 1) {
        $(".chatInput").text(chatInputArray[0]);

    }


    if (!HTMLElementsArr.length) {
        greyMessage();
        $(".chatInput").text(chatInputArray[2]);
        document.getElementById('typing-animation').style.display = "none";


    }

}

function greyMessage() {
    if (!isAnimate) {
        setTimeout(typingAnimation, 1000);
        isAnimate = true;
    }

}

function typingAnimation() {
    document.getElementById('typing-animation').style.display = "flex";
    setTimeout(show_msg4, 1500);
    if (!isPlayed) {
        setTimeout("audio.play()", 750);
        isPlayed = true;
    }

}

function typingAnimation2() {
    document.getElementById('typing-animation2').style.display = "flex";
    setTimeout(show_msg5, 2000);
}

function typingAnimation3() {
    document.getElementById('typing-animation3').style.display = "flex";
    setTimeout(show_msg6, 3000);
    scrollAni3.scrollIntoView();
}





function show_msg4() {
    document.getElementById('typing-animation').style.display = "none";
    document.getElementById("msg4").style.display = "block";
    setTimeout(typingAnimation2, 500);

}


function show_msg5() {
    document.getElementById('typing-animation2').style.display = "none";
    document.getElementById("msg5").style.display = "block";
    msg5.scrollIntoView({
        behavior: 'smooth'
    });

    $(".chatInput").text(chatInputArray[3]);

    if (teacherArray.length > 1) {
        document.getElementById("chat-button").onclick = clue;

    }
}

function clue() {
    document.getElementById("msg55").style.display = "block";
    msg55.scrollIntoView({
        behavior: 'smooth'
    });
    $(".chatInput").text(chatInputArray[2]);
    setTimeout(typingAnimation3, 1000);
}

function show_msg6() {
    document.getElementById('typing-animation3').style.display = "none";
    document.getElementById("msg6").style.display = "block";
    setTimeout(show_msg7, 3500);
    msg6.scrollIntoView({
        behavior: 'smooth'
    });

}

function show_msg7() {
    document.getElementById("msg7").style.display = "block";
    setTimeout(show_msg8, 2000);
    msg7.scrollIntoView({
        behavior: 'smooth'
    });

}

function show_msg8() {
    document.getElementById("msg8").style.display = "block";
    setTimeout(show_msg9, 1500);
    msg8.scrollIntoView({
        behavior: 'smooth'
    });

}

function show_msg9() {
    document.getElementById("msg9").style.display = "block";
    msg9.scrollIntoView({
        behavior: 'smooth'
    });

}
