var answer5 = document.getElementById('guess-input5').name;
var answer4 = document.getElementById('guess-input4').name;

//     FOURTH QUESTION START
function guessAnswer4() {
    $("button.guess-submit4").click(function (event) {

        var guess4 = $('#guess-input4').val();
        guess4 = guess4.toLowerCase();

        if (guess4 == answer4) {
            document.getElementById('deadEnd').style.display = "block";
            // window.location = "#deadEnd";
            $('html, body').animate({
                scrollTop: $("#deadEnd").offset().top
            }, 2000);


        } else {
            $('#wrong4').show().fadeOut(1000);
            $("#guess-input4").animate({
                "border-color": "#b22222"
            }).animate({
                "border-color": "#FEF0DC"
            });
        }

    });

}


function enterSubmit4() {
    $("#guess-input4").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit4").click();
        }
    });

    guessAnswer4();
}

enterSubmit4();
//     FOURTH QUESTION END

//     FIFTH QUESTION START
function guessAnswer5() {
    $("button.guess-submit5").click(function (event) {

        var guess5 = $('#guess-input5').val();
        guess5 = guess5.toLowerCase();

        if (guess5 == answer5) {
            //a.href = "chapter3.html";
            window.location = "chapter3.html";


        } else {
            $('#wrong5').show().fadeOut(1000);
            $("#guess-input5").animate({
                "border-color": "#b22222"
            }).animate({
                "border-color": "#FEF0DC"
            });
        }

    });

}


function enterSubmit5() {
    $("#guess-input5").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit5").click();
        }
    });

    guessAnswer5();
}

enterSubmit5();
//     FIFTH QUESTION END
