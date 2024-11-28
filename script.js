$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const newTask = $("#newTask").val();
    const taskList = $("#taskList");

    $(`<li class="taskItem">${newTask}</li>`).appendTo(taskList);
    $("ul").slideDown();
    $("#newTask").val("");
  });
  $(document).on("click", ".taskItem", function () {
    $(this).toggleClass("lineThrought");
  });
});
