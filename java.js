/*Name this external file gallery.js*/

function upDate(previewPic){
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Add tabindex attribute and focus/blur events
var previewPics = document.getElementsByClassName("preview");
for (var i = 0; i < previewPics.length; i++) {
    previewPics[i].setAttribute("tabindex","0");
    previewPics[i].addEventListener("focus", function() {
        upDate(this);
    });
    previewPics[i].addEventListener("blur", unDo);
}
