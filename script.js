$(".butt").click(function() {
     var sport = $("#sport").val();
     var movie = $("#movie").val();
     var elaborate= $("#elaborate").val();
      $(".results").append("In the year 2050 "+sport+"will be in "+movie+elaborate);
     });