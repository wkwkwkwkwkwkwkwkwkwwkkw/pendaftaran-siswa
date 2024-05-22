let i = 0;
const valueTeks = 'Selamat Datang di SMK TI BALI GLOBAL';
const animasiTeks = document.querySelector('#teks');

function ketikTeks() {
  if (i < valueTeks.length) {
    animasiTeks.innerHTML += valueTeks.charAt(i);
    i++;
    setTimeout(ketikTeks, 100);
  }
}
window.onload = ketikTeks;
console.log(animasiTeks);
