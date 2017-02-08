// content.js

//sets up a listener, which isn't completely necessary for this program, but sets up a foundation for additions to the program
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);


var image = ["https://github.com/meredithcox/Foogle/blob/master/logos/Foogle.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Goegel.gif?raw=true", 
"https://github.com/meredithcox/Foogle/blob/master/logos/Goegle.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Gogel.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Gogle.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Googe.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Googel.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Googgle.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Googlle.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Googol.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Goole.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Gooogel.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Hoegle.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Hoogle.gif?raw=true",
"https://github.com/meredithcox/Foogle/blob/master/logos/Oogle.gif?raw=true"
]

imageIndex = Math.round(Math.random()*(image.length-1));
document.getElementById("hplogo").srcset = image[imageIndex];
document.getElementById("hplogo").height = "110";

