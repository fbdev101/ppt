var time_delay = 1000;
function fade(ele,index){
    ele.animate({
      opacity: 0.5,
      opacity: 0.6,
      opacity: 0.7,
      opacity: 0.8,
      opacity: 0.9
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
fade($(".fade").first(),0);

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
animation($("p.ninja").first(),0);

function slideDown(ele){
  ele.animate({
    bottom: "5%",
    bottom: "0%",
    bottom: "-5%",
    bottom: "-10%",
    bottom: "-15%",
  },{
    duration:  1000,
    complete: function(argument) {
      $(this).css("bottom", "-16%");
      var $this = $(this);
      setTimeout(function(){
        // slideDown($this.next());
      },time_delay);
    }
  });
}
slideDown($("img.slide_down"));


function lac(el){
  el.css("transform", "rotate(10deg)");
  setTimeout(function() {
    el.css("transform", "rotate(0deg)");
  },200);
  setTimeout(function() {
    el.css("transform", "rotate(-10deg)");
  },400);
  setTimeout(function() {
    el.css("transform", "rotate(0deg)");
  },600);
}
lac($("img.rotate"));