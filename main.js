var gambar = document.querySelector('.image');
hasil = document.querySelector('.hasil');
sejarah = document.querySelector('.sejarah')
icon = document.querySelector('.icon');


gambar.onclick = function() {



    // ketika di klik jalankan fungsi berikut ini



    var src = gambar.getAttribute('src');



    if (src === 'img/galery/taman2.jpeg') {

        icon.setAttribute('src', 'img/galeri/taman3.jpeg');
        gambar.setAttribute('src', 'img/galery/taman.jpeg');
        hasil.innerHTML = "Tuggu Bambu";

    } else if (src === 'img/galery/taman.jpeg') {
        icon.setAttribute('src', 'img/taman2.jpeg');
        gambar.setAttribute('src', 'img/taman.jpeg');
        hasil.innerHTML = "Taman Digulis";
    } else if(src === 'img/galery/taman2.jpeg') {
        icon.setAttribute('src', 'img/galery/taman.jpeg');
        gambar.setAttribute('src', 'img/taman.jpeg');
        hasil.innerHTML = "Taman catur";
    }

}


// pesan dinamis
var pesan = document.querySelector('.pesan');
var user = document.querySelector('.user');


var login = document.querySelector(".tombol-login");



function setUserName() {


    var myName = prompt('MASUKKAN USERNAME AKUN ANDA');
    localStorage.setItem('name', myName);
    pesan.innerHTML = 'SELAMAT DATANG , ' + myName;
    user.innerHTML = '' + myName;
    login.style.cssText = "display : none;"
}






if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var StoredName = localStorage.getItem('name');
    pesan.innerHTML = 'SELAMAT DATANG, ' + StoredName;
}

login.onclick = function() {
    setUserName();
}






// tugas nomor 3

var sidebar = document.querySelector('.sidebar');
ubahwarna = document.querySelector(".ubahwarna");
menu = document.querySelector('.menu ul');

var gbk = document.getElementById("gbk");

var btngbk = document.querySelector('.btnGBK')
var btnBJ = document.querySelector('.btnBJ');
var btnRM = document.querySelector('.btnRM');
var footer = document.querySelector('.footer');


ubahwarna.addEventListener('click', function() {


    var r = Math.round(Math.random() * 255 + 1);

    var g = Math.round(Math.random() * 255 + 1);
    var b = Math.round(Math.random() * 255 + 1);

    menu.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    sidebar.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    btngbk.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    btnBJ.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    btnRM.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    footer.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';





})





function GBK() {

    var gbk = document.getElementById("gbk");
    gbk.classList.toggle("Active");


}

function SBJ() {

    var sbj = document.getElementById("sbj");
    sbj.classList.toggle("Active");


}



function RM() {

    var rm = document.getElementById("rm");
    rm.classList.toggle("Active");


}


// galeri ketika di klik
const container = document.querySelector('.contaier-toogle');
const jumbo = document.querySelector('.jumbo');


container.addEventListener('click', function(e) {
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;


    }
})