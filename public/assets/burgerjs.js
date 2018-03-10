$(function() {
  $(".devour").on("click", function(event) {
    console.log("click");
    var id = $(this).data("id");
    var isdevour = $(this).data("isdevoured");
    var newisdevour = {
      devoured: isdevour
    };
    $.ajax("/api/burgers/" + id, {
      type: 'PUT',
      data: newisdevour
    }).then(
      function() {
        console.log("changed devoured to ", isdevour);
        location.reload();
      }
    );
  });

  $(".createaburger").on("submit", function(event){
    event.preventDefault();
    var newburger = {
      burger_name: $("#bgr").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        $("#bgr").val("");
        location.reload();
      }
    );
  })
});
