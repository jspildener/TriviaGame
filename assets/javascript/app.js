$(document).ready(function() {

    $("#startGame").on("click", function() {
        $("#startPage").hide();
        $("#questionPage").show();

        var count = 30;
        var counter = setInterval(timer, 1000);

        function timer() {
            count = count - 1;
            if (count <= 0) {
                clearInterval(counter);
                answerCheck();
                $("#questionPage").hide();
                $("#endPage").show();
            }
            $("#countDown").text(count);
        }
    });

    function answerCheck() {
        var amountCorrect = 0;
        var amountIncorrect = 0;
        var amountUnanswered = 0;
        $("#correctScore").text(amountCorrect);
        $("#incorrectScore").text(amountIncorrect);
        $("#unansweredQuestions").text(amountUnanswered);
        for (var i = 1; i <= 6; i++) {
            var radios = $("input[name=answer" + i + "]");
            var wasAnswered = false;

            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.value == "correct" && radio.checked) {
                    amountCorrect++;
                    wasAnswered = true;
                    $("#correctScore").text(amountCorrect);

                } else if (radio.value == "wrong" && radio.checked) {
                    amountIncorrect++;
                    wasAnswered = true;
                    $("#incorrectScore").text(amountIncorrect);
                }
            }
            if (!wasAnswered) {
                amountUnanswered++;
                $("#unansweredQuestions").text(amountUnanswered);
            }
        }

        var count = 5;
        var counter = setInterval(timer, 1000);

        function timer() {
            count = count - 1;
            if (count <= 0) {
                clearInterval(counter);
                $("#questionPage").hide();
                $("#endPage").show();
            }
            $("#countDown").text(count);
        }
        console.log("Correct Responses: " + amountCorrect);
        console.log("Incorrect Responses: " + amountIncorrect);
        console.log("Unanswered Responses: " + amountUnanswered)
    }

    $("#submit").on("click", function() {
        answerCheck();
        $("#questionPage").hide();
        $("#endPage").show();
    });


});