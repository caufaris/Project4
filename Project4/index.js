var form =
  "<form action ='/Project2/action_page.php' method ='POST' >" +
  "<div class=“form-group”>" +
  "<label for=“email”> Email address:  </label>" +
  "<br>" +
  "<input type=“email” class=“form-control” id=“email” name='e-mail'>" +
  "</div>" +
  "<br>" +
  "<div class=form-group>" +
  "<label for=“question”> Your question:  </label>" +
  "<br>" +
  "<input type=“text” class=“form-control” id=“question” name='question'>" +
  "</div>" +
  "<button type=“submit” class=“btn btn-default black-text”>Submit</button>" +
  "</form>";

document.getElementById("positive").addEventListener("click", function () {
  document.getElementById("form").innerHTML = form;
});

document.getElementById("negative").addEventListener("click", function () {
  document.getElementById("form").innerHTML = "You should click yes";
});
