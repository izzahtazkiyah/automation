Feature: Kunjungan Sakit untuk besok

  Scenario: Complete Kunjungan untuk besok
    Given User membuka halaman Kunjungan untuk besok
    When User mengisi data Kunjungan untuk besok
    Then Sistem menampilkan pesan berhasil menambahkan Kunjungan untuk besok
