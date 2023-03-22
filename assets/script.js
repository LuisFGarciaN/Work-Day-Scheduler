$(document).ready(function () {
  // display current day on page
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);

  // change color of time blocks based on current time
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id"));
    var currentHour = moment().hour();

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // save user input to local storage
  $(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val().trim();
    var hourBlock = $(this).parent().attr("id");

    localStorage.setItem(hourBlock, userInput);
  });

  // load any saved data from local storage
  $(".description").each(function () {
    var hourBlock = $(this).parent().attr("id");
    var savedInput = localStorage.getItem(hourBlock);

    if (savedInput !== null) {
      $(this).val(savedInput);
    }
  });
});

