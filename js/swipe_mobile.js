
var time_delay =  1500;
$( document ).on( "pageinit", "[data-role='page'].background", function() {
  var page = "#" + $( this ).attr( "id" ),
      next = $( this ).jqmData( "next" ),
      prev = $( this ).jqmData( "prev" );

      back_to_menu = $(this).jqmData("backtomenu");
      video_here  = $(this).jqmData("videohere");
      next_page  = $(this).jqmData("nextpage");
      regex = /video$/

  if ( next ) {
      $.mobile.loadPage( next + ".html" );
      $( document ).on( "swipeleft", page, function() {
          if(regex.test(page)){
            var video = $(this).find("video")[0];
            video.pause();
            video.currentTime = 0;
          }
            animate_page(next,0)
          $.mobile.changePage( next + ".html", { transition: "slide" });
      });
  }
  if ( prev ) {
     $.mobile.loadPage( prev + ".html" );

      $( document ).on( "swiperight", page, function() {
          if(regex.test(page)){
            var video = $(this).find("video")[0];
            $(video).find("source").attr("src", phone_url);
            video.pause();
            video.currentTime = 0;
          }
            animate_page(prev,0)
          $.mobile.changePage( prev + ".html", { transition: "slide", reverse: true } );
      });
  }
  else {
    $( ".control .prev", page ).addClass( "ui-disabled" );
  }


  if(back_to_menu){
    $("#back_menu",page).on("click", function(){
      $.mobile.changePage(  "page_02.html", { transition: "slideup", reverse: true } );
    })
  }

  if(next_page){
    $("#mouse",page).on("click", function(){
      $.mobile.changePage( "page_14.html", { transition: "slideup", reverse: true } );
    })
    $("#cockroach",page).on("click", function(){
      $.mobile.changePage( "page_26.html", { transition: "slideup", reverse: true } );
    })
    $("#botfly",page).on("click", function(){
      $.mobile.changePage( "page_35.html", { transition: "slideup", reverse: true } );
    })
    $("#quines",page).on("click", function(){
      $.mobile.changePage( "page_03.html", { transition: "slideup", reverse: true } );
    })
  }
});

function animate_page(page,index){
  switch(page){
    case "page_05": // animate up
    case "page_16":
    case "page_28":
    case "page_37":
      var ele =  $("#"+page+"").find(".ninja").first();
      $.each($("#"+page+"").find(".ninja"), function(_,v){
        $(v).removeAttr("style");
      })
      animation(ele,0);
      break;
    case "page_06":
    case "page_24":
    case "page_33":
    case "page_45":
      var ele =  $("#"+page+"").find(".rotate").first();
      ele.removeAttr("transform");
      lac(ele);
      break;
    case "page_04": // fadeIn
    case "page_07": 
    case "page_10": 
    case "page_11":
    case "page_12":
    case "page_14":
    case "page_17":
    case "page_26":
    case "page_29":
    case "page_35":
    case "page_38":
     var ele =  $("#"+page+"").find(".fade").first();
      $.each($("#"+page+"").find(".fade"), function(_,v){
        $(v).css("opacity",0);
      })
      fade(ele,0);
      break;
    case "page_08": // animate down
      var ele =  $("#"+page+"").find(".slide_down").first();
      $("#"+page+"").find(".slide_down").css("bottom", "10%")
      slideDown(ele);
      break;
    default: 
      break;
  }
}

function fade(ele,index){
  ele.animate({
    opacity: 0.5,
    // opacity: 0.6,
    // opacity: 0.7,
    // opacity: 0.8,
    opacity: 0.9
    // opacity: 1,
  },{
    duration:  time_delay,
    complete: function(argument) {
      $(this).css("opacity", 1);
      var $this = $(this);
      setTimeout(function(){
        fade($this.next(), index+1);
      },time_delay);
    }
  });
  }

  function slideDown(ele){
  ele.animate({
    bottom: "5%",
    bottom: "0%",
    bottom: "-5%",
    bottom: "-10%",
    bottom: "-15%",
  },{
    duration:  time_delay,
    complete: function(argument) {
      $(this).css("bottom", "-16%");
      var $this = $(this);
      setTimeout(function(){
      },time_delay);
    }
  });
}

function animation(ele,index){
  ele.animate({
    opacity: 0,
    marginTop: (index == 0 ? 160 : 100 ) + "px",
    opacity: .7,
    marginTop: (index == 0 ? 110 :50) +"px",
  },{
    duration:  time_delay,
    complete: function(argument) {
      $(this).css("opacity", 1);
      var $this = $(this);
      setTimeout(function(){
        animation($this.next(), index+1);
      },time_delay);
    }
  });
}