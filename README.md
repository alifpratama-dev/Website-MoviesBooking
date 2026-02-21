# Website-MoviesBooking
Simple website for booking movies :)

**Desain Aplikasi**
- Seat Map
Visualisasi kursi dalam baris dan kolom.
Kategori seat ada: Available (abu-abu), Selected (biru), Occupied (putih).

- Reservation Panel
Input kursi terpilih (otomatis terisi).
Input tanggal (otomatis hari ini).
Dropdown pilihan film.
Tombol konfirmasi reservasi.

- Summary Box
Penjelasan seat: Total Seat, Available, Reserved, Occupied

**System Flow**
1. Selection Phase
- Jika kursi available, status berubah menjadi selected (biru).
- Pilih seat, lalu otomatis terisi dengan nomor seat dan berubah menjadi warna biru.
- Summary box reserved bertambah, available berkurang.
- User cancel memilih seat, maka Summary box kembali seperti semula.

2. Confirmation Phase
- Sistem akan cek apakah ada kursi yang selected dan available.
- Jika ada, kursi yg dipilih berubah menjadi reserved (biru).
- User memilih movies apa yang ingin ditonton.
- Ketika user klik tombol "Confirm Reservation" akan muncul message "Reservation succesful!".
- Seat map berubah menjadi occupied (putih).
- Summary box reserved kembali menjadi 0, occupied bertambah, available berkurang.

