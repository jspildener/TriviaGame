$(document).ready(function() {

    function answerCheck() {
        var amountCorrect = 0;
        var amountIncorrect = 0;
        var amountUnanswered = 0;
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
        console.log("Correct Responses: " + amountCorrect);
        console.log("Incorrect Responses: " + amountIncorrect);
        console.log("Unanswered Responses: " + amountUnanswered)
    }

    $("#submit").on("click", answerCheck);

$("#startButton").on("click", function() {
    

















});