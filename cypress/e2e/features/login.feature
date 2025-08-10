Feature: Login

  Scenario: Complete Login
    Given User membuka halaman Login Page
    When User mengisi Klinik ID, Username, dan Password yang valid
    Then Sistem menampilkan pesan berhasil dan diarahkan ke halaman Dashboard
