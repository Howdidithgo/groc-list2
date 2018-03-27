
$(document).ready(function(){
  $("form.control").submit(function(event){
    var sorts = [];
    var sortInput1 = $("#item1").val();
    var sortInput2 = $("#item2").val();
    var sortInput3 = $("#item3").val();
    var newsort = [];
    sorts.push(sortInput1,sortInput2,sortInput3);
    sorts = sorts.sort();
    sorts.forEach(function(sort){
      newsort.push(sort.toUpperCase());
    });
    event.preventDefault();
    for (var index = 0; index < newsort.length; index++) {
      $("#shopper").append("<li>" + newsort[index] + "</li>");
    }



    // newsort.forEach(function(sort){

    // });
    $("form").hide();
    $("ul").show();
  });
});
