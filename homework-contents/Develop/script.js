// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockTime)

          
            // $(this).children("textarea").addClass("future");

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).children("textarea").removeClass("future");
                $(this).children("textarea").removeClass("present");
                $(this).children("textarea").addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).children("textarea").removeClass("past");
                $(this).children("textarea").removeClass("future");
                $(this).children("textarea").addClass("present");
            }
            else {
                $(this).children("textarea").removeClass("present");
                $(this).children("textarea").removeClass("past");
                $(this).children("textarea").addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour9").children("textarea").val(localStorage.getItem("hour9"));
    $("#hour10").children("textarea").val(localStorage.getItem("hour10"));
    $("#hour11").children("textarea").val(localStorage.getItem("hour11"));
    $("#hour12").children("textarea").val(localStorage.getItem("hour12"));
    $("#hour13").children("textarea").val(localStorage.getItem("hour13"));
    $("#hour14").children("textarea").val(localStorage.getItem("hour14"));
    $("#hour15").children("textarea").val(localStorage.getItem("hour15"));
    $("#hour16").children("textarea").val(localStorage.getItem("hour16"));
    $("#hour17").children("textarea").val(localStorage.getItem("hour17"));

    timeTracker();

     
    
})