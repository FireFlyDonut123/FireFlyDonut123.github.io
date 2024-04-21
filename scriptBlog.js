var currentBlog = 1; 
var totalBlog = 2; 
var currentBlogContent = ""; 

function loadBlog() {
    var xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           
            currentBlogContent = this.responseText;
            document.getElementById("blogContainer").innerHTML = currentBlogContent;
            currentBlog = 1; 
            toggleButtons(); 
            document.getElementById("loadButton").style.display = "none"; 
        }
    };
    xhr.open("GET", "blog1.html", true); 
    xhr.send(); 
}

function nextBlog() {
    currentBlog = currentBlog === totalBlog ? 1 : currentBlog + 1; 
    loadBlogContent();
}

function previousBlog() {
    currentBlog = currentBlog === 1 ? totalGalleries : currentBlog - 1; 
    loadBlogContent();
}

function loadBlogContent() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         
            currentBlogContent = this.responseText;
            document.getElementById("blogContainer").innerHTML = currentBlogContent;
            toggleButtons();
        }
    };
    xhr.open("GET", "blog" + currentBlog + ".html", true); 
    xhr.send(); 
}

function toggleButtons() {
   
    if (currentBlog === 1) {
        document.getElementById("previousButton").style.display = "none";
        document.getElementById("nextButton").style.display = "inline-block";
    } else {
        document.getElementById("previousButton").style.display = "inline-block";
        document.getElementById("nextButton").style.display = "none";
    }
}
