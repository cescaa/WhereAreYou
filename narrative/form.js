//Main code for question/answer verification from: https://codepen.io/meloffbird/pen/RrMeeZ

// Other code written with help from StackOverflow users:

// For timed scroll: https://stackoverflow.com/questions/50044713/slow-transition-to-same-page-anchor-with-window-location/50044854#50044854

// For border animation: https://stackoverflow.com/questions/9774134/jquery-animate-border-bottom-width

//To redirect to new page: https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript

// To unlock sections: https://stackoverflow.com/questions/44382153/how-to-make-div-appear-on-button-click-using-javascript


var answer = document.getElementById('guess-input').name;
var a = document.getElementById('lockChap2');
var answer2 = document.getElementById('guess-input2').name;
var answer3 = document.getElementById('guess-input3').name;




//     THIRD QUESTION START
function guessAnswer() {
    $("button.guess-submit").click(function (event) {

        var guess = $('#guess-input').val();
        guess = guess.toLowerCase();

        if (guess == answer) {
            a.href = "chapter2.html";
            window.location = "chapter2.html";


        } else {
            $('#wrong3').show().fadeOut(1000);
            $("#guess-input").animate({
                "border-color": "#b22222"
            }).animate({
                "border-color": "#FEF0DC"
            });
        }

    });

}


function enterSubmit() {
    $("#guess-input").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit").click();
        }
    });

    guessAnswer();
}

enterSubmit();
//     THIRD QUESTION END


//     SECOND QUESTION START
function guessAnswer2() {
    $("button.guess-submit2").click(function (event) {

        var guess2 = $('#guess-input2').val();
        guess2 = guess2.toLowerCase();

        if (guess2 == answer2) {
            document.getElementById('sign-in').style.display = "block";
            // window.location = "#sign-in";
            $('html, body').animate({
                scrollTop: $("#sign-in").offset().top
            }, 2000);


        } else {
            $('#wrong2').show().fadeOut(1000);
            $("#guess-input2").animate({
                "border-color": "#b22222"
            }).animate({
                "border-color": "#FEF0DC"
            });
        }

    });

}

function enterSubmit2() {
    $("#guess-input2").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit2").click();
        }
    });

    guessAnswer2();
}

enterSubmit2();
//     SECOND QUESTION END

//     FIRST QUESTION START

function guessAnswer3() {
    $("button.guess-submit3").click(function (event) {

        var guess3 = $('#guess-input3').val();
        guess3 = guess3.toLowerCase();

        if (guess3 == answer3) {
            document.getElementById('sign-in2').style.display = "block";
            //window.location = "#sign-in2";
            $('html, body').animate({
                scrollTop: $("#sign-in2").offset().top
            }, 2000);




        } else {
            $('#wrong').show().fadeOut(1000);
            $("#guess-input3").animate({
                "border-color": "#b22222"
            }).animate({
                "border-color": "#FEF0DC"
            });

        }

    });

}

function enterSubmit3() {
    $("#guess-input3").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit3").click();
        }
    });

    guessAnswer3();
}

enterSubmit3();

//     FIRST QUESTION END
