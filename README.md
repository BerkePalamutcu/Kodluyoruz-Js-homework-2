# Kodluyoruz-Js-homework-2

Merhaba Patika.dev'deki 2.JS odevinde takilanlar icin boyle ufak bir readme hazirladim. Adim adim kodlari aciklayacagim.
---
Oncelikle [buraya](https://berkepalamutcu.github.io/Kodluyoruz-Js-homework-2/) tiklayarak projeyi deneyebilirsiniz.
```JavaScript
const newInput = document.querySelector('#task');
const button = document.querySelector(`.button`);
const liste = document.querySelector('ul');
```
Buraya kadar fonksiyon ve event listenerlarda kullacagimiz variable'lari storeladik
```JavaScript
for (let i = 0; i < liste.children.length; i++) {
  liste.children[i].innerHTML += `<button style="margin-right: 20px; margin-top:15px"class="close">&times</button></li>`;
}

```
Burada ise listeleri kapatmak icin kullacagimiz buttonlari olusturduk ve inline style vererek ortaya gelmelerini sagladik css dosyasini degistirmemize gerek kalmiyor ve for dongusu ile bunlari, ul listesinin butun child elemenlerini secip onlara buttonlari ve style ozelliklerini tek tek atiyoruz
```JavaScript
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
```
Burada ise inputtan gelen deger bos olmadigi surece yapacagimiz durumu ve bossa yapilacak durumlari belirledik. Ekle dugmesine basildiginda ne olacaginin mantigini yazdik. NewInput.value ile inputtan girilen degeri cekip, liste olusturup o listenin icinde input,class ve style ile beraber parent element olan ul'nin icine soktuk. Bootstrap toastlarinin nasil kullanildigini kendi dokumantasyonundan da okuyabilirsiniz. Ben kisaca kod blogunun icine yorum olarak toast ile ilgili kismi da ekledim.
```JavaScript
button.addEventListener('submit', newElement);
```
Burada ekle dugmesine event listeneri ekledik.
```JavaScript
liste.addEventListener('click', function (e) {
  if (e.target.className == '' || e.target.className == 'checked') {
    e.target.classList.toggle('checked');
  } else {
    e.target.parentElement.remove();
  }
});
```
Burada ise ul'ye event listener ekledik ve eventin hangi classi etkiledigine gore yapacagi islemleri belirledik. Fonksiyonun aldigi e parametresine target methodunu ekledigimizde domda eventin gerceklestigi elementi secmis oluyoruz boylece bubblingden kurtulup parent elementleri etkilemeden direkt eventin gerceklestigi elementi seciyoruz. Eger bunun disinda baska bir alternatifi eventlisterin 3.parametresi olan capture'u secmeyip dogrudan eventlistener icinde kullanirsak parent element de bubblingden dolayi etkilenirdi bunun icin e.target yontemi ile eventin oldugu elementi secmek daha mantikli. 2 ayri event listener ve fonksiyon olusturmak yerine tek event listener icinde 2 farkli fonksyion olusturmayi tercih ettim.
Hepsi bu kadar umarim yeterince aciklayici olmustur hepinize iyi kodlamalar :)
