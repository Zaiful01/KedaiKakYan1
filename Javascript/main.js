document.querySelectorAll('.btnDetail').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah reload halaman jika tombol <a> diklik

    let parent = e.target.closest('.card'); // Menggunakan closest untuk mencari elemen terdekat

    let gambar = parent.querySelector('.card-img-top').src;
    let harga = parent.querySelector('.harga').innerHTML;
    let judul = parent.querySelector('.card-text').innerHTML;
    let deskripsi = parent.querySelector('.deskripsi').innerHTML;

    // Memanggil modal (misal menggunakan Bootstrap modal)
    let tombolModal = document.querySelector('.btnModel');
    tombolModal.click();

    // Memasukkan judul produk ke dalam modal
    document.querySelector('.modelTitle').innerHTML = judul;

    // Memasukkan gambar ke dalam modal
    let modalImage = document.querySelector('.modalImage');
    modalImage.innerHTML = ''; // Mengosongkan gambar sebelumnya
    let image = document.createElement('img'); // Membuat elemen gambar
    image.src = gambar; // Menetapkan sumber gambar
    image.classList.add('w-100');
    image.classList.add('img-fluid'); // Menambahkan class untuk responsif (optional)
    modalImage.appendChild(image); // Menambahkan gambar ke dalam modal

    // Memasukkan deskripsi dan harga ke dalam modal
    document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
    document.querySelector('.modalHarga').innerHTML = harga;

    // Membuat URL WhatsApp untuk chatting
    const nohp = '+60 14-240 7803'; // Nomor WhatsApp tujuan
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo Kak, Saya Mau Pesan Produk Ini: ${judul}. Lihat gambar produk di sini: ${gambar}`;

    // Menetapkan href pada tombol Chatting
    document.querySelector('.btnBeli').href = pesan;
  });
});
