const container = document.querySelector('.container'); /* untuk membuat variaber dan select container*/
const besar = document.querySelector('.besar'); /* untuk membuat variaber dan select gambar besar*/
const gkecil = document.querySelectorAll('.kecil');


container.addEventListener('click', function(e) { /* untuk memberikan event dan function agar ketika click gambar besar akan berubah menjadi gambar kecil sesuai pilihan*/ 

  if( e.target.className == 'kecil' ) {
    besar.src = e.target.src;
    besar.classList.add('animasi'); /* memberikan animasi fade*/
    setTimeout(function() {
        besar.classList.remove('animasi'); /*memberikan batas waktu untuk animasi */
    }, 500) 

    gkecil.forEach(function(kecil) {
      if (kecil.classList.contains('transparan') ) {
        kecil.classList.remove('transparan');
      }
    });

    e.target.classList.add('transparan');
  }

});