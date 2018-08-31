$(window).scroll(function (event) {

    var scroll = $(window).scrollTop();
    if(scroll <= 20){
      $("#main-menu").stop().animate({
        top: 60,
      });
    }
    else{
      $("#main-menu").stop().animate({
        top: 0,
      });
    }


});


$( document ).ready(function() {
  window.onresize = function(){ location.reload(); }
  var sliderImages = $("#slider-container")[0];
  var image = sliderImages.children[1];
  animate(sliderImages, 1, 2, 4, sliderImages.childElementCount);
});

function animate(sliderContainer, thisIMageID, nextImageID, size){
  var nextImageSelector = "#"+nextImageID;
  var thisImageSelector = "#"+thisIMageID;
  var nextImage = $(nextImageSelector);
  var oldImage = $(thisImageSelector)
  var child = sliderContainer.children;
  for(var i=0; i<child.length; i++){
    var tst2 = child[i];
    tst2.style.zIndex = "0";
  }

  nextImage.css("display", "block");
  nextImage.css("opacity", "0");
  nextImage.css("z-index", "5");
  oldImage.css("z-index", "1");
  var oldWidth = oldImage[0].width + "px";
  nextImage.css("width", oldWidth); //= oldImage[0].width;
  nextImage.stop().animate({
    opacity: "1",
  });

  setTimeout(function(){
    if(nextImageID < size){
      if(thisIMageID >= size){
        thisIMageID = 0;
        nextImageID = 1;
      }
      animate(sliderContainer, thisIMageID+1, nextImageID+1, size)
    }
    else{
      animate(sliderContainer, 1, size)
    }

  },3000);
}


$(document).ready(function(){

  $("#home-menu").click(
    function(){
      $('html, body').stop().animate({
        scrollTop: $("#home-section").offset().top,
      }, 1000, function(){   $('html, body').stop().animate({scrollTop:"-60px"})} )
  });

  $("#om-mig-menu").click(
    function(){
      $('html, body').stop().animate({
        scrollTop: $("#services-section").offset().top,
      }, 1000)
  });

  $("#portfolio-menu").click(
    function(){
      $('html, body').stop().animate({
        scrollTop: $("#min").offset().top,
      }, 1000)
  });

  $("#comments-menu").click(
    function(){
      $('html, body').stop().animate({
        scrollTop: $("#contacts-section").offset().top,
      }, 1000)
  });


  $("#gallery-container").click(
    function(){
      $("#gallery-container").css("display", "none");
    }
  );




  $("#gallery-button-1").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/1.jpg');
    }
  );

  $("#gallery-button-2").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/LARGE/2.jpg');
    }
  );

  $("#gallery-button-3").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/LARGE/3.jpg');
    }
  );

  $("#gallery-button-4").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/LARGE/4.png');
    }
  );

  $("#gallery-button-5").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/rahua.jpg');
    }
  );
  
$("#gallery-button-6").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/LARGE/1.jpg');
    }
  );

  $("#gallery-button-7").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/LARGE/7.jpg');
    }
  );


  $("#gallery-button-8").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/LARGE/8.jpg');
    }
  );

  $("#gallery-button-9").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/LARGE/2.jpg');
    }
  );

  $("#gallery-button-10").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/LARGE/5.jpg');
    }
  );
   
  $("#gallery-button-11").click(
    function(){
      $("#gallery-container").css( 'display', 'flex');
      $("#gallery-image").attr('src', 'img/portfolio/3.jpg');
    }
  );

 $('#gallery-button-12').on('click', function () {
    window.location = 'https://www.youtube.com/watch?v=4WmsdrUKk5w';
  });
  
 $('#gallery-button-13').on('click', function () {
    window.location = 'https://www.youtube.com/watch?v=I7KC0j4QU6U';
  });
  
  $('#gallery-button-14').on('click', function () {
    window.location = 'https://www.youtube.com/watch?v=ca2OGVxSASY';
  });
  
  $('#gallery-button-15').on('click', function () {
    window.location = 'https://www.youtube.com/watch?v=u6NfEf1YMKQ';
  });
  
 
 $('#gallery-button-16').on('click', function () {
    window.location = 'https://www.youtube.com/watch?v=twOD5qQmRYA';
  });


  $('#gallery-button-1').on('click', function () {
    window.location = 'http://lauravision.dk/css%20animation/csslaura.html';
  });



});
