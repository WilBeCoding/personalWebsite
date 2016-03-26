$(document).ready(function() {

var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
// x.appendChild(createform);

// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
// var createform = document.createElement('form'); // Create New Element Form
// createform.setAttribute("action", ""); // Setting Action Attribute on Form
// createform.setAttribute("method", "post"); // Setting Method Attribute on Form
// x.appendChild(createform);
var stickyPlaylist = $('.playlist').offset().top; 
var footerStop = $('#footer').offset().top;

var stickyPlaylistFunction = function(){
  var scrollTop = $(window).scrollTop();      
  if(scrollTop > stickyPlaylist) { 
      $('.playlist').addClass('sticky');
  }
  else if(scrollTop === 50){
    console.log("this hits");
  }
  else {
    $('.playlist').removeClass('sticky'); 
  }
  console.log(scrollTop);
};

// var stopOnFooterFunction = function(){
//   var scrollTop = $(window).scrollTop();
//   if(scrollTop => 680){
//     console.log('Logged');
//   }
// }


stickyPlaylistFunction();
 
$(window).scroll(function() {
    stickyPlaylistFunction();
    // stopOnFooterFunction();
});

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);
console.log('ready hits')
$(window).load(function(){
    console.log('jQuery page is working');
})

var templateSource = document.getElementById('results-template').innerHTML,
    template = Handlebars.compile(templateSource),
    resultsPlaceholder = document.getElementById('results'),
    playingCssClass = 'playing',
    audioObject = null;

var fetchTracks = function (albumId, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId,
        success: function (response) {
            callback(response);
        }
    });
};

var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: 'artist:' + query,
            type: 'album',
            market: "US"
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};

results.addEventListener('click', function(e) {
    var target = e.target;
    if (target !== null && target.classList.contains('cover')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            fetchTracks(target.getAttribute('data-album-id'), function(data) {            
                audioObject = new Audio(data.tracks.items[6].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function() {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function() {
                    target.classList.remove(playingCssClass);
               });
            });
        }
    }
});

searchAlbums('Wilson Rondini');










});