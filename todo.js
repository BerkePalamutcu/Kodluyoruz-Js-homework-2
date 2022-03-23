'use strict';
const newInput = document.querySelector('#task');
const button = document.querySelector(`.button`);
const liste = document.querySelector('ul');

/*Buraya kadar fonksyion ve event listenerlarda kullacagimiz variable'lari storeladik */

for (let i = 0; i < liste.children.length; i++) {
  liste.children[
    i
  ].innerHTML += `<button style="margin-right: 20px; margin-top:15px"class="close">&times</button></li>`;
}

/* Burada ise listeleri kapatmak icin kullacagimiz buttonlari olusturduk ve inline style vererek ortaya gelmelerini sagladik css dosyasini degistirmemize gerek kalmiyor ve for dongusu ile bunlari ul listesinin butun child elemenlerini secip tek tek atiyoruz*/

function newElement() {
  if (newInput.value != '') {
    liste.innerHTML += `<li>${newInput.value}<button style="margin-right: 20px; margin-top:15px" class="close">&times</button></li>`;
    let toastBasarili = document.querySelector('.success');
    //htmldeki bootstrap toastini sectik
    let toastAlertBasarili = new bootstrap.Toast(toastBasarili);
    /*Sectigimiz bootstrap selektorunu new Bootstrap constructor'u kullanarak obje haline getirdik*/
    toastAlertBasarili.show();
    //objemizi show methodu ile ekranda gosteriyoruz.
  } else {
    let toastBasarisiz = document.querySelector('.error');
    let toastAlertBasarisiz = new bootstrap.Toast(toastBasarisiz);
    toastAlertBasarisiz.show();
    // Ayni islemleri olumsuz durumda olusacak toast icin de yapiyoruz //
  }
}
/*Burada ise inputtan gelen deger bos olmadigi surece yapacagimiz durumu ve bossa yapilacak durumlari belirledik. Ekle dugmesine basildiginda ne olacaginin mantigini yazdik. NewInput.value ile inputtan girilen degeri cekip, liste olusturup o listenin icinde input,class ve style ile beraber parent element olan ul'nin icine soktuk. Bootstrap toastlarinin nasil kullanildigini kendi dokumantasyonundan da okuyabilirsiniz. */

button.addEventListener('submit', newElement);
//Burada ekle dugmesine event listeneri ekledik//

liste.addEventListener('click', function (e) {
  if (e.target.className == '' || e.target.className == 'checked') {
    e.target.classList.toggle('checked');
  } else {
    e.target.parentElement.remove();
  }
});
/* Burada ise ul'ye event listener ekledik ve eventin hangi classi etkiledigine gore yapacagi islemleri belirledik. 2 ayri event listener ve fonksiyon olusturmak yerine tek event listener icinde 2 farkli fonksyion olusturmayi tercih ettim*/

// iyi kodlamalar :) Berke Palamutcu tarafindan sevgiyle kodlandi <3 //
