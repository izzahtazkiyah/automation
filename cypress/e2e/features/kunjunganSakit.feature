Feature: Kunjungan Sakit

  Scenario: Complete Kunjungan
    Given User membuka halaman Kunjungan
    When User mengisi data Kunjungan
    Then Sistem menampilkan pesan berhasil menambahkan Kunjungan
