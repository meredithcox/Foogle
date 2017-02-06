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


/**if(hasShrek==true){
	$(document).ready(function() {
	    var cat = chrome.extension.getURL("shrek.gif");
	    $('img').each(function(index, image){  //this produces "broken" icon
	        $(image).attr('src', cat);
	    });
	});
}**/

var image = ["https://i1260.photobucket.com/albums/ii568/ColorMyShadow/Foogle.png",
"https://i1260.photobucket.com/albums/ii568/ColorMyShadow/Googe.gif", 
"https://i1260.photobucket.com/albums/ii568/ColorMyShadow/Goegel.gif"]

imageIndex = Math.round(Math.random()*2);
console.log(imageIndex);
document.getElementById("hplogo").src =image[imageIndex];
document.getElementById("hplogo").srcset = image[imageIndex];

