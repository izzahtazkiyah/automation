Feature: Pelayanan pada kunjungan umum dengan pembayaran cash

  Scenario: Complete Pelayanan pada kunjungan umum dengan pembayaran cash
    Given User membuka halaman Pelayanan pada kunjungan umum dengan pembayaran cash
    When User mengisi data Pelayanan pada kunjungan umum dengan pembayaran cash
    Then Sistem menampilkan pesan berhasil menambahkan Pelayanan pada kunjungan umum dengan pembayaran cash
