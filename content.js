// content.js


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

/**
hasShrek = false;
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3 || node.nodeTYpe==1) {
            var text = node.nodeValue;
            hasShrek=true;
            var replacedText = text.replace(/somebody/gi, 'someBODY');
            var replacedText = text.replace(/Somebody/gi, 'someBODY');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}


if(hasShrek==true){
	$(document).ready(function() {
	    var cat = chrome.extension.getURL("shrek.gif");
	    $('img').each(function(index, image){  //this produces "broken" icon
	        $(image).attr('src', cat);
	    });
	});
}**/

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
console.log(imageIndex);
document.getElementById("hplogo").src =image[imageIndex];
document.getElementById("hplogo").srcset = image[imageIndex];

