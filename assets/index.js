// index.html Page Links
    // Object of Links
var IndexObj = {1:"", 2:"RPS-Multiplayer/", 3:"Word-Guess-Game/", 4:"unti-4-game/", 5:"", 6:"gifytopia/", 7:"GilaMonster1/#", 8:"TriviaGame/"};

$(".portfolio").on("click",function(){
    var webPath =$(this).attr("value");
    if (webPath===1) {
        window.location.href="https://sleepy-journey-10832.herokuapp.com"
    }else if(webPath===5){
        window.location.href="https://obscure-taiga-77615.herokuapp.com/index"
    }else{
        window.location.href='https://shadowlaq.github.io/'+IndexObj[webPath];
    }
});

// Secondary button events - Developing Projects Section
    //Load More Button 
var load_my_load = "#loadMore";
$(load_my_load).click(function(){
 window.location.href='portfolio.html';
});
// GOOGLE MAP
function myMap()
{
  myCenter=new google.maps.LatLng(32.253460, -110.911789);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

// Modal Image Gallery
// function onClick(element) {
//   document.getElementById("img01").src = element.src;
//   document.getElementById("modal01").style.display = "block";
//   var captionText = document.getElementById("caption");
//   captionText.innerHTML = element.alt;
// }

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
