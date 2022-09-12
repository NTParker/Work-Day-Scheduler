let currentHour = moment().format("HH");

// Curent day
$(document).ready(function () {
  let now = moment().format("dddd, MMMM Do YYYY");
  let displayToday = document.getElementById("currentDay");
  displayToday.innerHTML = now;

  // Set color based on time of task
  $(".row").each(function () {
    var timeStatus = $(this).attr("id").split("-")[1];

    if (currentHour === timeStatus) {
      $(this).addClass("present");
    } else if (currentHour < timeStatus) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeStatus) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  // Use local storage for data persistence
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".item").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  $("#hour-1 .item").val(localStorage.getItem("1"));
  $("#hour-2 .item").val(localStorage.getItem("2"));
  $("#hour-3 .item").val(localStorage.getItem("3"));
  $("#hour-4 .item").val(localStorage.getItem("4"));
  $("#hour-5 .item").val(localStorage.getItem("5"));
  $("#hour-6 .item").val(localStorage.getItem("6"));
  $("#hour-7 .item").val(localStorage.getItem("7"));
  $("#hour-8 .item").val(localStorage.getItem("8"));
  $("#hour-9 .item").val(localStorage.getItem("9"));
});
