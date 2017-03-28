const VOWELS = ["a", "e", "i", "o", "u"]

$(document).ready(function() {

  $("#submitButton").click(function(event) {
    event.preventDefault();
    const ORIGINAL = $("#sentenceInput").val();
    let letters = ORIGINAL.split("");
    let vowelsDashed = letters.map(function(letter) {
      if (VOWELS.includes(letter)) {
        return "-";
      } else {
        return letter;
      };
    });

    let displaySentence = vowelsDashed.join("");
    $("#puzzleSentence").text(`${displaySentence}`);
    $("#puzzleInput").hide();
    $("#puzzleOutput").show();
  });

  $("#guessButton").click(function(event) {
    event.preventDefault();
    const ORIGINAL = $("#sentenceInput").val();
    let guessAnswer = $("#guess").val();
    if (guessAnswer === ORIGINAL) {
      $("#correct").text("Correct");
    } else {
      $("#correct").text("Wrong.  Try again.");
    };
  });
});
