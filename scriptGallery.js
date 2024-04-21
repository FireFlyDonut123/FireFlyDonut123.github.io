var currentGallery = 1;
var totalGalleries = 2; 
var currentGalleryContent = ""; 

function loadGallery() {
    var xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            currentGalleryContent = this.responseText;
            document.getElementById("galleryContainer").innerHTML = currentGalleryContent;
            currentGallery = 1; 
            toggleButtons(); 
            document.getElementById("loadButton").style.display = "none"; 
        }
    };
    xhr.open("GET", "gallery1.html", true); 
    xhr.send();
}

function nextGallery() {
    currentGallery = currentGallery === totalGalleries ? 1 : currentGallery + 1; 
    loadGalleryContent();
}

function previousGallery() {
    currentGallery = currentGallery === 1 ? totalGalleries : currentGallery - 1;
    loadGalleryContent();
}

function loadGalleryContent() {
    var xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            currentGalleryContent = this.responseText;
            document.getElementById("galleryContainer").innerHTML = currentGalleryContent;
            toggleButtons(); 
        }
    };
    xhr.open("GET", "gallery" + currentGallery + ".html", true); 
    xhr.send(); 
}

function toggleButtons() {
   
    if (currentGallery === 1) {
        document.getElementById("previousButton").style.display = "none";
        document.getElementById("nextButton").style.display = "inline-block";
    } else {
        document.getElementById("previousButton").style.display = "inline-block";
        document.getElementById("nextButton").style.display = "none";
    }
}
