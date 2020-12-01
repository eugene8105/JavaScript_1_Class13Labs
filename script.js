
// array of the objects
var gradebook = [];
var student = {};
var pointsPossible = 135;
var letterGraded = "";
var outputMessage = "";

$(document).ready(
    function () {
        // add event handlers
        $("#submitButton").click(studentInput);
        $("#displayAll").click(displayAll);

    }
)

function displayAll() {

    $("#formOutput").val("");
    // output on the screen
    // forEach
    gradebook.forEach(function (student) {
        outputMessage = `${student.firstName} ${student.lastName}  ${student.point_Earned} %${student.userPercentage.toFixed(2)} ${student.letter}<br>`;
        $("#formOutput").append(outputMessage);
        console.log(outputMessage);
    })

    $("p.output").show();

    return false;
}

function studentInput() {

    // object of user input

    // get points earned
    var pointEarned = $("#pointEarned").val();

    // calculation

    // find percentage from points earned
    var percentage = (pointEarned / pointsPossible) * 100;
    // find letter grade
    if (percentage <= 30) {
        letterGraded = "C";
    } else if (percentage <= 60 && percentage > 30) {
        letterGraded = "B";
    } else if (percentage <= 100 && percentage > 60) {
        letterGraded = "A";
    }

    // object of student
    student = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        point_Earned: pointEarned,
        userPercentage: percentage,
        letter: letterGraded
    }

    gradebook.push(student);

    $("#firstName").val("");
    $("#lastName").val("");
    $("#pointEarned").val("");

    return false;

}

