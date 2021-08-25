var answer6 = document.getElementById('guess-input6').name;


function showMore() {
    magic.style.display = "none";
    appear.style.display = "block";
}

//     FOURTH QUESTION START
function guessAnswer6() {
    $("button.guess-submit6").click(function (event) {

        var guess6 = $('#guess-input6').val();
        guess6 = guess6.toLowerCase();

        if (guess6 == answer6) {
            document.getElementById('ending').style.display = "block";
            $('html, body').animate({
                scrollTop: $("#ending").offset().top
            }, 2000);


        } else {
            $('#wrong6').show().fadeOut(1000);
            $("#guess-input6").animate({
                "border-color": "#b22222"
            }).animate({
                "border-color": "#FEF0DC"
            });
        }

    });

}


function enterSubmit6() {
    $("#guess-input6").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit6").click();
        }
    });

    guessAnswer6();
}

enterSubmit6();
//     FOURTH QUESTION END
