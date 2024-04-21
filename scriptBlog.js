var currentGallery = 1; // Menyimpan nomor galeri yang sedang ditampilkan
var totalGalleries = 2; // Jumlah total galeri
var currentGalleryContent = ""; // Menyimpan konten galeri yang sedang ditampilkan

function loadGallery() {
    var xhr = new XMLHttpRequest(); // Buat objek XMLHttpRequest
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Ketika permintaan berhasil dan respons diterima dengan baik
            currentGalleryContent = this.responseText;
            document.getElementById("blogContainer").innerHTML = currentGalleryContent;
            currentGallery = 1; // Set galeri yang sedang ditampilkan menjadi galeri 1
            toggleButtons(); // Periksa tombol mana yang harus ditampilkan
            document.getElementById("loadButton").style.display = "none"; // Sembunyikan tombol "Load Gallery"
        }
    };
    xhr.open("GET", "blog1.html", true); // Muat galeri 1 saat tombol "Load Gallery" ditekan
    xhr.send(); // Kirim permintaan
}

function nextGallery() {
    currentGallery = currentGallery === totalGalleries ? 1 : currentGallery + 1; // Toggle antara galeri 1 dan 2
    loadGalleryContent();
}

function previousGallery() {
    currentGallery = currentGallery === 1 ? totalGalleries : currentGallery - 1; // Toggle antara galeri 1 dan 2
    loadGalleryContent();
}

function loadGalleryContent() {
    var xhr = new XMLHttpRequest(); // Buat objek XMLHttpRequest
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Ketika permintaan berhasil dan respons diterima dengan baik
            currentGalleryContent = this.responseText;
            document.getElementById("blogContainer").innerHTML = currentGalleryContent;
            toggleButtons(); // Periksa tombol mana yang harus ditampilkan
        }
    };
    xhr.open("GET", "blog" + currentGallery + ".html", true); // Muat galeri yang sedang aktif
    xhr.send(); // Kirim permintaan
}

function toggleButtons() {
    // Periksa galeri yang sedang ditampilkan dan tampilkan tombol yang sesuai
    if (currentGallery === 1) {
        document.getElementById("previousButton").style.display = "none";
        document.getElementById("nextButton").style.display = "inline-block";
    } else {
        document.getElementById("previousButton").style.display = "inline-block";
        document.getElementById("nextButton").style.display = "none";
    }
}
