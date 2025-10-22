// =================================================================
// DATA SOAL KUIS
// =================================================================
// 
// Format Soal:
// {
//    question: "Teks pertanyaan Anda di sini?",
//    options: [
//        "Pilihan A", 
//        "Pilihan B", 
//        "Pilihan C", 
//        "Pilihan D"
//    ],
//    answer: "Teks jawaban yang benar (harus sama persis dengan salah satu pilihan)"
// }
// =================================================================

const allQuestions = {
    // Kumpulan 50 soal mudah (SUDAH DIPERBARUI DENGAN SOAL ANDA)
    mudah: [
        {
            question: "Apa ibukota negara Indonesia?",
            options: [
                "Surabaya",
                "Bandung",
                "Jakarta",
                "Medan"
            ],
            answer: "Jakarta"
        },
        {
            question: "Apa warna bendera negara Indonesia?",
            options: [
                "Merah - Putih",
                "Putih - Merah",
                "Merah - Kuning",
                "Biru - Putih"
            ],
            answer: "Merah - Putih"
        },
        {
            question: "Apa semboyan negara Indonesia?",
            options: [
                "Bersatu Kita Teguh",
                "Pancasila Abadi",
                "Merdeka atau Mati",
                "Bhinneka Tunggal Ika"
            ],
            answer: "Bhinneka Tunggal Ika"
        },
        {
            question: "Kapan Hari Kemerdekaan Indonesia dirayakan?",
            options: [
                "17 Agustus",
                "21 April",
                "28 Oktober",
                "1 Mei"
            ],
            answer: "17 Agustus"
        },
        {
            question: "Siapakah Presiden pertama Indonesia?",
            options: [
                "Soeharto",
                "Soekarno",
                "B.J. Habibie",
                "Megawati Soekarnoputri"
            ],
            answer: "Soekarno"
        },
        {
            question: "Apa bahasa resmi negara Indonesia?",
            options: [
                "Bahasa Jawa",
                "Bahasa Inggris",
                "Bahasa Melayu",
                "Bahasa Indonesia"
            ],
            answer: "Bahasa Indonesia"
        },
        {
            question: "Apa mata uang resmi Indonesia?",
            options: [
                "Dollar",
                "Ringgit",
                "Rupiah",
                "Baht"
            ],
            answer: "Rupiah"
        },
        {
            question: "Pulau manakah yang paling padat penduduknya di Indonesia?",
            options: [
                "Sumatra",
                "Jawa",
                "Kalimantan",
                "Sulawesi"
            ],
            answer: "Jawa"
        },
        {
            question: "Candi Buddha terbesar di dunia yang terletak di Indonesia adalah...",
            options: [
                "Candi Prambanan",
                "Candi Borobudur",
                "Candi Mendut",
                "Candi Kalasan"
            ],
            answer: "Candi Borobudur"
        },
        {
            question: "Pulau di Indonesia yang terkenal dengan sebutan 'Pulau Dewata' adalah...",
            options: [
                "Lombok",
                "Bali",
                "Sumatra",
                "Flores"
            ],
            answer: "Bali"
        },
        {
            question: "Nasi goreng adalah makanan khas dari...",
            options: [
                "Thailand",
                "Malaysia",
                "Singapura",
                "Indonesia"
            ],
            answer: "Indonesia"
        },
        {
            question: "Kain tradisional Indonesia yang diakui UNESCO sebagai warisan dunia adalah...",
            options: [
                "Songket",
                "Ulos",
                "Batik",
                "Tenun Ikat"
            ],
            answer: "Batik"
        },
        {
            question: "Kadal raksasa yang hanya ada di Indonesia adalah...",
            options: [
                "Iguana",
                "Buaya",
                "Komodo",
                "Biawak"
            ],
            answer: "Komodo"
        },
        {
            question: "Apa nama monumen nasional yang terletak di Jakarta?",
            options: [
                "Tugu Pahlawan",
                "Monas (Monumen Nasional)",
                "Patung Dirgantara",
                "Tugu Jogja"
            ],
            answer: "Monas (Monumen Nasional)"
        },
        {
            question: "Indonesia terletak di benua apa?",
            options: [
                "Eropa",
                "Afrika",
                "Amerika",
                "Asia"
            ],
            answer: "Asia"
        },
        {
            question: "Apa lagu kebangsaan Indonesia?",
            options: [
                "Garuda Pancasila",
                "Indonesia Raya",
                "Maju Tak Gentar",
                "Rayuan Pulau Kelapa"
            ],
            answer: "Indonesia Raya"
        },
        {
            question: "Gunung tertinggi di Indonesia adalah...",
            options: [
                "Gunung Bromo",
                "Gunung Semeru",
                "Puncak Jaya",
                "Gunung Rinjani"
            ],
            answer: "Puncak Jaya"
        },
        {
            question: "Rendang adalah makanan khas dari daerah...",
            options: [
                "Jawa",
                "Padang (Sumatra Barat)",
                "Bali",
                "Manado"
            ],
            answer: "Padang (Sumatra Barat)"
        },
        {
            question: "Siapakah wakil presiden pertama Indonesia?",
            options: [
                "Adam Malik",
                "Soedharmono",
                "Mohammad Hatta",
                "Sri Sultan Hamengkubuwono IX"
            ],
            answer: "Mohammad Hatta"
        },
        {
            question: "Pulau terbesar di Indonesia yang sepenuhnya milik Indonesia adalah...",
            options: [
                "Kalimantan",
                "Papua",
                "Jawa",
                "Sumatra"
            ],
            answer: "Sumatra"
        },
        {
            question: "Berapa jumlah provinsi di Indonesia saat ini (Oktober 2025)?",
            options: [
                "30",
                "34",
                "38",
                "27"
            ],
            answer: "38"
        },
        {
            question: "Apa sebutan untuk 5 dasar negara Indonesia?",
            options: [
                "Pancasila",
                "UUD 1945",
                "Tritura",
                "Dasasila Bandung"
            ],
            answer: "Pancasila"
        },
        {
            question: "Pulau tempat Candi Borobudur berada adalah...",
            options: [
                "Pulau Bali",
                "Pulau Sumatra",
                "Pulau Jawa",
                "Pulau Sulawesi"
            ],
            answer: "Pulau Jawa"
        },
        {
            question: "Apa nama samudra yang terletak di sebelah selatan Pulau Jawa?",
            options: [
                "Samudra Pasifik",
                "Samudra Hindia",
                "Samudra Atlantik",
                "Samudra Arktik"
            ],
            answer: "Samudra Hindia"
        },
        {
            question: "Bunga nasional Indonesia (Puspa Bangsa) adalah...",
            options: [
                "Mawar",
                "Anggrek Bulan",
                "Melati Putih",
                "Rafflesia Arnoldii"
            ],
            answer: "Melati Putih"
        },
        {
            question: "Apa bentuk pemerintahan negara Indonesia?",
            options: [
                "Kerajaan",
                "Republik",
                "Kekaisaran",
                "Monarki"
            ],
            answer: "Republik"
        },
        {
            question: "Pertunjukan bayangan boneka kulit khas Jawa disebut...",
            options: [
                "Ludruk",
                "Ketoprak",
                "Wayang",
                "Reog"
            ],
            answer: "Wayang"
        },
        {
            question: "Danau vulkanik terbesar di Indonesia (dan dunia) adalah...",
            options: [
                "Danau Toba",
                "Danau Maninjau",
                "Danau Singkarak",
                "Danau Poso"
            ],
            answer: "Danau Toba"
        },
        {
            question: "Kota mana yang dijuluki sebagai 'Kota Pahlawan'?",
            options: [
                "Jakarta",
                "Bandung",
                "Semarang",
                "Surabaya"
            ],
            answer: "Surabaya"
        },
        {
            question: "Candi Prambanan adalah candi untuk agama...",
            options: [
                "Buddha",
                "Hindu",
                "Konghucu",
                "Islam"
            ],
            answer: "Hindu"
        },
        {
            question: "Apa arti dari 'Merah' dalam bendera Indonesia?",
            options: [
                "Kesucian",
                "Keberanian",
                "Kemakmuran",
                "Keadilan"
            ],
            answer: "Keberanian"
        },
        {
            question: "Apa arti dari 'Putih' dalam bendera Indonesia?",
            options: [
                "Kesucian",
                "Keberanian",
                "Kekuatan",
                "Kekayaan"
            ],
            answer: "Kesucian"
        },
        {
            question: "Pulau Kalimantan juga dikenal dengan nama...",
            options: [
                "Celebes",
                "Borneo",
                "Andalas",
                "Sunda Kecil"
            ],
            answer: "Borneo"
        },
        {
            question: "Pulau Sulawesi dulu dikenal dengan nama...",
            options: [
                "Celebes",
                "Borneo",
                "Sunda Besar",
                "Nusa Tenggara"
            ],
            answer: "Celebes"
        },
        {
            question: "Alat musik tradisional Jawa dan Bali yang terdiri dari gong dan metalofon disebut...",
            options: [
                "Angklung",
                "Sasando",
                "Gamelan",
                "Kolintang"
            ],
            answer: "Gamelan"
        },
        {
            question: "Siapakah pahlawan wanita dari Aceh yang terkenal?",
            options: [
                "R.A. Kartini",
                "Cut Nyak Dhien",
                "Martha Christina Tiahahu",
                "Dewi Sartika"
            ],
            answer: "Cut Nyak Dhien"
        },
        {
            question: "Pahlawan pendidikan wanita yang lahir di Jepara dikenal dengan bukunya 'Habis Gelap Terbitlah Terang' adalah...",
            options: [
                "R.A. Kartini",
                "Cut Nyak Meutia",
                "Fatmawati",
                "Maria Walanda Maramis"
            ],
            answer: "R.A. Kartini"
        },
        {
            question: "Siapakah pencipta lagu kebangsaan 'Indonesia Raya'?",
            options: [
                "Ismail Marzuki",
                "C. Simanjuntak",
                "W.R. Supratman",
                "Ibu Sud"
            ],
            answer: "W.R. Supratman"
        },
        {
            question: "Pulau di ujung timur Indonesia adalah...",
            options: [
                "Sumatra",
                "Jawa",
                "Papua",
                "Kalimantan"
            ],
            answer: "Papua"
        },
        {
            question: "Selat yang memisahkan Pulau Jawa dan Pulau Sumatra adalah...",
            options: [
                "Selat Malaka",
                "Selat Sunda",
                "Selat Bali",
                "Selat Lombok"
            ],
            answer: "Selat Sunda"
        },
        {
            question: "Kota mana yang dikenal sebagai 'Kota Pelajar'?",
            options: [
                "Jakarta",
                "Bandung",
                "Yogyakarta",
                "Malang"
            ],
            answer: "Yogyakarta"
        },
        {
            question: "Apa nama maskapai penerbangan nasional (flag carrier) Indonesia?",
            options: [
                "Lion Air",
                "AirAsia",
                "Garuda Indonesia",
                "Citilink"
            ],
            answer: "Garuda Indonesia"
        },
        {
            question: "Berapa tahun Indonesia dijajah oleh Belanda (secara umum)?",
            options: [
                "100 tahun",
                "50 tahun",
                "350 tahun",
                "1000 tahun"
            ],
            answer: "350 tahun"
        },
        {
            question: "Apa agama mayoritas yang dianut penduduk Indonesia?",
            options: [
                "Kristen",
                "Hindu",
                "Buddha",
                "Islam"
            ],
            answer: "Islam"
        },
        {
            question: "Gunung Bromo terletak di provinsi...",
            options: [
                "Jawa Tengah",
                "Jawa Timur",
                "Jawa Barat",
                "Bali"
            ],
            answer: "Jawa Timur"
        },
        {
            question: "Hari Sumpah Pemuda diperingati setiap tanggal...",
            options: [
                "2 Mei",
                "10 November",
                "28 Oktober",
                "1 Juni"
            ],
            answer: "28 Oktober"
        },
        {
            question: "Nama lain untuk Pulau Sumatra di masa lalu adalah...",
            options: [
                "Andalas",
                "Swarnadwipa",
                "Celebes",
                "Borneo"
            ],
            answer: "Swarnadwipa"
        },
        {
            question: "Rafflesia Arnoldii adalah bunga raksasa yang berasal dari...",
            options: [
                "Jawa",
                "Papua",
                "Sumatra (Bengkulu)",
                "Kalimantan"
            ],
            answer: "Sumatra (Bengkulu)"
        },
        {
            question: "Hewan primata berhidung besar yang hanya ada di Kalimantan adalah...",
            options: [
                "Orangutan",
                "Bekantan",
                "Monyet Ekor Panjang",
                "Lutung"
            ],
            answer: "Bekantan"
        },
        {
            question: "Ibukota provinsi Bali adalah...",
            options: [
                "Kuta",
                "Ubud",
                "Denpasar",
                "Singaraja"
            ],
            answer: "Denpasar"
        }
    ],

    normal: [
  {
    question: "Siapakah ketua BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia)?",
    options: [
      "Soekarno",
      "Mohammad Hatta",
      "Dr. K.R.T. Radjiman Wedyodiningrat",
      "Soepomo"
    ],
    answer: "Dr. K.R.T. Radjiman Wedyodiningrat"
  },
  {
    question: "Garis imajiner yang memisahkan fauna tipe Asiatis dan tipe peralihan di Indonesia adalah...",
    options: [
      "Garis Wallace",
      "Garis Weber",
      "Garis Khatulistiwa",
      "Garis Lintang Utara"
    ],
    answer: "Garis Wallace"
  },
  {
    question: "Perjanjian Linggarjati, sebuah perundingan penting antara Indonesia dan Belanda, diadakan di kota...",
    options: [
      "Yogyakarta",
      "Jakarta",
      "Bandung",
      "Kuningan (Cirebon)"
    ],
    answer: "Kuningan (Cirebon)"
  },
  {
    question: "Rumah adat Honai adalah rumah tradisional yang berasal dari provinsi...",
    options: [
      "Papua Pegunungan (Suku Dani)",
      "Sulawesi Selatan (Suku Toraja)",
      "Sumatra Barat (Suku Minang)",
      "Kalimantan Barat (Suku Dayak)"
    ],
    answer: "Papua Pegunungan (Suku Dani)"
  },
  {
    question: "Pemberontakan DI/TII di Jawa Barat yang bertujuan mendirikan Negara Islam Indonesia dipimpin oleh...",
    options: [
      "Musso",
      "Amir Sjarifuddin",
      "Kartosuwiryo",
      "Kahar Muzakkar"
    ],
    answer: "Kartosuwiryo"
  },
  {
    question: "Taman Nasional Ujung Kulon di Banten terkenal sebagai habitat alami terakhir untuk hewan langka...",
    options: [
      "Badak Bercula Satu",
      "Harimau Sumatra",
      "Orangutan Kalimantan",
      "Anoa"
    ],
    answer: "Badak Bercula Satu"
  },
  {
    question: "Hingga saat ini, UUD 1945 telah mengalami amandemen sebanyak...",
    options: [
      "Dua kali",
      "Tiga kali",
      "Empat kali",
      "Lima kali"
    ],
    answer: "Empat kali"
  },
  {
    question: "Konferensi Asia-Afrika (KAA) yang bersejarah diselenggarakan pada tahun 1955 di kota...",
    options: [
      "Jakarta",
      "Bandung",
      "Bogor",
      "Surabaya"
    ],
    answer: "Bandung"
  },
  {
    question: "Sastrawan Indonesia yang terkenal dengan tetralogi novel 'Bumi Manusia' adalah...",
    options: [
      "Chairil Anwar",
      "W.S. Rendra",
      "Pramoedya Ananta Toer",
      "Taufiq Ismail"
    ],
    answer: "Pramoedya Ananta Toer"
  },
  {
    question: "Pulau di Indonesia yang dijuluki 'Kepulauan Rempah' (Spice Islands) pada masa kolonial adalah...",
    options: [
      "Jawa",
      "Sumatra",
      "Maluku",
      "Sulawesi"
    ],
    answer: "Maluku"
  },
  {
    question: "Lembaga negara yang bertugas mengawasi pengelolaan dan tanggung jawab keuangan negara adalah...",
    options: [
      "Kementerian Keuangan",
      "Bank Indonesia (BI)",
      "Otoritas Jasa Keuangan (OJK)",
      "Badan Pemeriksa Keuangan (BPK)"
    ],
    answer: "Badan Pemeriksa Keuangan (BPK)"
  },
  {
    question: "Sistem Tanam Paksa (Cultuurstelsel) yang menyengsarakan rakyat Hindia Belanda diperkenalkan oleh Gubernur Jenderal...",
    options: [
      "Herman Willem Daendels",
      "Thomas Stamford Raffles",
      "Van den Bosch",
      "J.P. Coen"
    ],
    answer: "Van den Bosch"
  },
  {
    question: "Alat musik tradisional Sasando yang dipetik berasal dari daerah...",
    options: [
      "Nusa Tenggara Timur (Pulau Rote)",
      "Jawa Barat",
      "Sulawesi Utara",
      "Kalimantan Timur"
    ],
    answer: "Nusa Tenggara Timur (Pulau Rote)"
  },
  {
    question: "Tiga zona waktu di Indonesia adalah Waktu Indonesia Barat (WIB), Waktu Indonesia Tengah (WITA), dan...",
    options: [
      "Waktu Indonesia Papua (WIP)",
      "Waktu Indonesia Timur (WIT)",
      "Waktu Indonesia Utara (WIU)",
      "Waktu Indonesia Bagian Timur (WIBT)"
    ],
    answer: "Waktu Indonesia Timur (WIT)"
  },
  {
    question: "Istilah 'Nusantara' sebagai nama kepulauan ini pertama kali dicetuskan dalam Sumpah Palapa oleh...",
    options: [
      "Hayam Wuruk",
      "Raden Wijaya",
      "Gajah Mada",
      "Ken Arok"
    ],
    answer: "Gajah Mada"
  },
  {
    question: "Upacara adat pembakaran jenazah di Bali yang terkenal kemegahannya disebut...",
    options: [
      "Rambu Solo'",
      "Ngaben",
      "Sekaten",
      "Dugderan"
    ],
    answer: "Ngaben"
  },
  {
    question: "Selat yang memisahkan Pulau Kalimantan (Borneo) dengan Pulau Sulawesi (Celebes) adalah...",
    options: [
      "Selat Karimata",
      "Selat Malaka",
      "Selat Makassar",
      "Selat Sunda"
    ],
    answer: "Selat Makassar"
  },
  {
    question: "Tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia setelah disempurnakan adalah...",
    options: [
      "B.M. Diah",
      "Sayuti Melik",
      "Soekarni",
      "Ahmad Soebardjo"
    ],
    answer: "Sayuti Melik"
  },
  {
    question: "Hari Lahirnya Pancasila, berdasarkan pidato Soekarno di sidang BPUPKI, diperingati setiap tanggal...",
    options: [
      "1 Juni",
      "17 Agustus",
      "22 Desember",
      "1 Oktober"
    ],
    answer: "1 Juni"
  },
  {
    question: "Candi Prambanan didedikasikan untuk Trimurti Hindu, di mana candi utamanya adalah untuk dewa...",
    options: [
      "Ganesha",
      "Brahma",
      "Wisnu",
      "Siwa"
    ],
    answer: "Siwa"
  },
  {
    question: "Kota di Indonesia yang dijuluki 'Kota Hujan' karena memiliki curah hujan yang sangat tinggi adalah...",
    options: [
      "Bandung",
      "Bogor",
      "Padang",
      "Malang"
    ],
    answer: "Bogor"
  },
  {
    question: "Perjanjian yang secara resmi mengakhiri konfrontasi antara Indonesia dan Malaysia pada tahun 1966 dikenal sebagai...",
    options: [
      "Perjanjian Linggarjati",
      "Perjanjian Renville",
      "Persetujuan Bangkok",
      "Deklarasi Djuanda"
    ],
    answer: "Persetujuan Bangkok"
  },
  {
    question: "Siapakah komponis Indonesia yang menciptakan lagu 'Rayuan Pulau Kelapa'?",
    options: [
      "W.R. Supratman",
      "Ibu Sud",
      "Ismail Marzuki",
      "C. Simanjuntak"
    ],
    answer: "Ismail Marzuki"
  },
  {
    question: "Lembaga legislatif di Indonesia yang anggotanya merupakan perwakilan dari daerah (provinsi) adalah...",
    options: [
      "Dewan Perwakilan Rakyat (DPR)",
      "Dewan Perwakilan Daerah (DPD)",
      "Majelis Permusyawaratan Rakyat (MPR)",
      "Dewan Pertimbangan Presiden (Wantimpres)"
    ],
    answer: "Dewan Perwakilan Daerah (DPD)"
  },
  {
    question: "Kerajaan Islam pertama di Indonesia adalah...",
    options: [
      "Kerajaan Mataram Islam",
      "Kerajaan Samudera Pasai",
      "Kerajaan Demak",
      "Kerajaan Gowa-Tallo"
    ],
    answer: "Kerajaan Samudera Pasai"
  },
  {
    question: "Sistem irigasi tradisional khas Bali yang diakui sebagai Warisan Dunia UNESCO adalah...",
    options: [
      "Terasering",
      "Subak",
      "Sengkedan",
      "Jatiluwih"
    ],
    answer: "Subak"
  },
  {
    question: "Gubernur Jenderal VOC pertama yang memerintah di Hindia Belanda adalah...",
    options: [
      "Jan Pieterszoon Coen",
      "Cornelis de Houtman",
      "Pieter Both",
      "Herman Willem Daendels"
    ],
    answer: "Pieter Both"
  },
  {
    question: "Awal era Orde Baru di Indonesia secara resmi ditandai dengan dikeluarkannya...",
    options: [
      "Dekrit Presiden 5 Juli 1959",
      "Surat Perintah Sebelas Maret (Supersemar)",
      "Tritura (Tiga Tuntutan Rakyat)",
      "Manifesto Politik 1959"
    ],
    answer: "Surat Perintah Sebelas Maret (Supersemar)"
  },
  {
    question: "Operasi militer untuk merebut Irian Barat (Papua) dari Belanda dikenal dengan nama...",
    options: [
      "Operasi Seroja",
      "Trikora (Tri Komando Rakyat)",
      "Operasi Woyla",
      "Dwikora (Dwi Komando Rakyat)"
    ],
    answer: "Trikora (Tri Komando Rakyat)"
  },
  {
    question: "Pulau di Indonesia yang memiliki kepadatan populasi terendah (paling jarang penduduknya) adalah...",
    options: [
      "Kalimantan",
      "Sumatra",
      "Sulawesi",
      "Papua"
    ],
    answer: "Papua"
  },
  {
    question: "Nama kabinet pertama Indonesia setelah kemerdekaan (1945) adalah...",
    options: [
      "Kabinet Presidensial",
      "Kabinet Sjahrir I",
      "Kabinet Amir Sjarifuddin",
      "Kabinet Natsir"
    ],
    answer: "Kabinet Presidensial"
  },
  {
    question: "Tarian Kecak yang terkenal di Bali mengambil inspirasi cerita dari epos...",
    options: [
      "Mahabharata",
      "Ramayana",
      "Panji",
      "Calon Arang"
    ],
    answer: "Ramayana"
  },
  {
    question: "Organisasi pergerakan nasional pertama di Indonesia yang bersifat modern (non-politik) adalah...",
    options: [
      "Sarekat Islam",
      "Indische Partij",
      "Budi Utomo",
      "Perhimpunan Indonesia"
    ],
    answer: "Budi Utomo"
  },
  {
    question: "Deklarasi Djuanda tahun 1957 adalah pernyataan penting yang menegaskan konsep Indonesia sebagai...",
    options: [
      "Negara Agraris",
      "Negara Maritim",
      "Negara Kepulauan (Archipelagic State)",
      "Negara Non-Blok"
    ],
    answer: "Negara Kepulauan (Archipelagic State)"
  },
  {
    question: "Puncak tertinggi di Pulau Jawa adalah...",
    options: [
      "Gunung Slamet",
      "Gunung Semeru",
      "Gunung Merapi",
      "Gunung Gede"
    ],
    answer: "Gunung Semeru"
  },
  {
    question: "Naskah Sumpah Pemuda 1928 ditulis dalam Ejaan...",
    options: [
      "Van Ophuijsen",
      "Soewandi (Republik)",
      "EYD (Ejaan Yang Disempurnakan)",
      "Melayu Kuno"
    ],
    answer: "Van Ophuijsen"
  },
  {
    question: "Siapakah tokoh yang mengusulkan 'Pancasila' sebagai nama dasar negara dalam sidang BPUPKI?",
    options: [
      "Mohammad Yamin",
      "Soepomo",
      "Soekarno",
      "Mohammad Hatta"
    ],
    answer: "Soekarno"
  },
  {
    question: "Pemilihan Umum (Pemilu) pertama di Indonesia untuk memilih anggota DPR dan Konstituante diselenggarakan pada tahun...",
    options: [
      "1945",
      "1950",
      "1955",
      "1971"
    ],
    answer: "1955"
  },
  {
    question: "Lembaga negara yang berwenang memutus sengketa hasil Pemilu dan membubarkan partai politik adalah...",
    options: [
      "Mahkamah Agung (MA)",
      "Mahkamah Konstitusi (MK)",
      "Komisi Yudisial (KY)",
      "KPU (Komisi Pemilihan Umum)"
    ],
    answer: "Mahkamah Konstitusi (MK)"
  },
  {
    question: "Peristiwa Rengasdengklok terjadi dengan tujuan...",
    options: [
      "Menyusun strategi perang melawan NICA",
      "Menjauhkan Soekarno-Hatta dari pengaruh Jepang",
      "Merumuskan naskah proklamasi",
      "Mengadakan rapat BPUPKI"
    ],
    answer: "Menjauhkan Soekarno-Hatta dari pengaruh Jepang"
  },
  {
    question: "Tradisi 'Lompat Batu' (Fahombo) adalah ritual kedewasaan yang berasal dari...",
    options: [
      "Pulau Nias (Sumatra Utara)",
      "Pulau Sumba (NTT)",
      "Tana Toraja (Sulawesi Selatan)",
      "Pulau Mentawai (Sumatra Barat)"
    ],
    answer: "Pulau Nias (Sumatra Utara)"
  },
  {
    question: "Palung laut terdalam di Indonesia terletak di...",
    options: [
      "Selat Malaka",
      "Laut Jawa",
      "Laut Banda",
      "Selat Makassar"
    ],
    answer: "Laut Banda"
  },
  {
    question: "Dalam sistem presidensial Indonesia, menteri-menteri kabinet diangkat dan bertanggung jawab kepada...",
    options: [
      "DPR (Dewan Perwakilan Rakyat)",
      "MPR (Majelis Permusyawaratan Rakyat)",
      "Presiden",
      "Mahkamah Agung"
    ],
    answer: "Presiden"
  },
  {
    question: "Perlawanan Pangeran Diponegoro melawan Belanda (1825-1830) dikenal juga dengan sebutan...",
    options: [
      "Perang Padri",
      "Perang Jawa",
      "Perang Aceh",
      "Puputan Margarana"
    ],
    answer: "Perang Jawa"
  },
  {
    question: "Tokoh yang memimpin delegasi Indonesia dalam perundingan Roem-Roijen adalah...",
    options: [
      "Sutan Sjahrir",
      "Mohammad Hatta",
      "Agus Salim",
      "Mohammad Roem"
    ],
    answer: "Mohammad Roem"
  },
  {
    question: "Satuan wilayah administrasi di bawah provinsi dan di atas kecamatan di Indonesia adalah...",
    options: [
      "Desa/Kelurahan",
      "Daerah Istimewa",
      "Kabupaten/Kota",
      "Karesidenan"
    ],
    answer: "Kabupaten/Kota"
  },
  {
    question: "Fauna endemik (hanya ada) di Sulawesi yang mirip babi hutan dengan taring mencuat adalah...",
    options: [
      "Anoa",
      "Babirusa",
      "Tarsius",
      "Maleo"
    ],
    answer: "Babirusa"
  },
  {
    question: "Bandara Internasional Soekarno-Hatta (CGK) secara administratif terletak di provinsi...",
    options: [
      "DKI Jakarta",
      "Banten",
      "Jawa Barat",
      "Jawa Tengah"
    ],
    answer: "Banten"
  },
  {
    question: "Siapakah satu-satunya Presiden Indonesia yang berasal dari latar belakang militer (TNI)?",
    options: [
      "Soekarno",
      "Soeharto",
      "B.J. Habibie",
      "Abdurrahman Wahid"
    ],
    answer: "Soeharto"
  },
  {
    question: "Kitab Sutasoma yang memuat frasa 'Bhinneka Tunggal Ika' ditulis pada masa Kerajaan Majapahit oleh...",
    options: [
      "Mpu Prapanca",
      "Mpu Tantular",
      "Mpu Gandring",
      "Mpu Sedah"
    ],
    answer: "Mpu Tantular"
  }
],

    sulit: [
  {
    question: "Apakah nama kebijakan ekonomi pada masa Demokrasi Terpimpin yang bertujuan untuk 'memotong' nilai mata uang (sanering) pada tahun 1959?",
    options: [
      "Planas Rencana Lima Tahun",
      "Gunting Sjafruddin",
      "Deklarasi Ekonomi (Dekon)",
      "Program Benteng"
    ],
    answer: "Gunting Sjafruddin"
  },
  {
    question: "Siapakah tokoh Belanda yang menggunakan nama samaran 'Multatuli' dan menulis 'Max Havelaar' untuk mengkritik keras Sistem Tanam Paksa?",
    options: [
      "Conrad Theodor van Deventer",
      "Eduard Douwes Dekker",
      "Baron van Hoëvell",
      "J.H. Abendanon"
    ],
    answer: "Eduard Douwes Dekker"
  },
  {
    question: "Garis imajiner yang memisahkan fauna tipe Peralihan (Wallacea) dengan fauna tipe Australis adalah...",
    options: [
      "Garis Wallace",
      "Garis Weber",
      "Garis Khatulistiwa",
      "Garis Lydekker"
    ],
    answer: "Garis Weber"
  },
  {
    question: "Lembaga negara yang dihapuskan setelah Amandemen Keempat UUD 1945 adalah...",
    options: [
      "Dewan Pertimbangan Agung (DPA)",
      "Dewan Perwakilan Rakyat (DPR)",
      "Mahkamah Agung (MA)",
      "Badan Pemeriksa Keuangan (BPK)"
    ],
    answer: "Dewan Pertimbangan Agung (DPA)"
  },
  {
    question: "Apakah nama mosi integral yang diajukan di parlemen Republik Indonesia Serikat (RIS) yang berhasil mengembalikan Indonesia menjadi Negara Kesatuan (NKRI) pada tahun 1950?",
    options: [
      "Mosi Integral Natsir",
      "Petisi Soetardjo",
      "Mosi Thamrin",
      "Mosi Tuntutan Tritura"
    ],
    answer: "Mosi Integral Natsir"
  },
  {
    question: "Apa nama arus samudra global penting yang mengalir dari Samudra Pasifik ke Samudra Hindia melalui perairan kepulauan Indonesia?",
    options: [
      "Arus Muson Barat",
      "El Niño Southern Oscillation (ENSO)",
      "Arus Lintas Indonesia (Arlindo)",
      "Sirkulasi Walker"
    ],
    answer: "Arus Lintas Indonesia (Arlindo)"
  },
  {
    question: "Kitab Sutasoma, yang memuat frasa 'Bhinneka Tunggal Ika', ditulis oleh Mpu Tantular pada masa pemerintahan raja Majapahit...",
    options: [
      "Raden Wijaya",
      "Jayanegara",
      "Hayam Wuruk",
      "Tribhuwana Wijayatunggadewi"
    ],
    answer: "Hayam Wuruk"
  },
  {
    question: "Dalam Konferensi Meja Bundar (KMB) 1949, isu yang paling alot dan ditunda penyelesaiannya adalah...",
    options: [
      "Pembayaran utang Hindia Belanda",
      "Pembubaran KNIL",
      "Status Irian Barat (Papua)",
      "Pembentukan Uni Indonesia-Belanda"
    ],
    answer: "Status Irian Barat (Papua)"
  },
  {
    question: "Pada masa Orde Baru, pemerintah memberlakukan 'Asas Tunggal' bagi semua organisasi sosial-politik melalui undang-undang...",
    options: [
      "UU No. 1 Tahun 1974 tentang Perkawinan",
      "UU No. 5 Tahun 1979 tentang Pemerintahan Desa",
      "UU No. 8 Tahun 1985 tentang Organisasi Kemasyarakatan",
      "UU No. 20 Tahun 1982 tentang Ketentuan Pokok Pertahanan"
    ],
    answer: "UU No. 8 Tahun 1985 tentang Organisasi Kemasyarakatan"
  },
  {
    question: "Apa nama pengadilan militer khusus yang dibentuk pada masa Orde Baru untuk mengadili orang-orang yang dituduh terlibat dalam G30S?",
    options: [
      "Mahkamah Militer Luar Biasa (Mahmillub)",
      "Pengadilan Negeri Istimewa",
      "Komisi Tiga Negara",
      "Pengadilan HAM Ad Hoc"
    ],
    answer: "Mahkamah Militer Luar Biasa (Mahmillub)"
  },
  {
    question: "Siapakah Perdana Menteri yang menjabat paling lama pada era Demokrasi Liberal (1950-1959)?",
    options: [
      "Mohammad Natsir",
      "Soekiman Wirjosandjojo",
      "Ali Sastroamidjojo",
      "Djuanda Kartawidjaja"
    ],
    answer: "Ali Sastroamidjojo"
  },
  {
    question: 'Zona geografi unik di Indonesia yang merupakan wilayah peralihan antara Paparan Sunda dan Paparan Sahul (mencakup Sulawesi, Maluku, dan Nusa Tenggara) disebut...',
    options: [
      "Wallacea",
      "Australasia",
      "Lingkar Pasifik",
      "Zona Subduksi Sunda"
    ],
    answer: "Wallacea"
  },
  {
    question: "Tokoh 'Tiga Serangkai' (Douwes Dekker, Cipto Mangunkusumo, Suwardi Suryaningrat) mendirikan 'Indische Partij' yang dianggap radikal karena menuntut...",
    options: [
      "Perwakilan di Volksraad",
      "Kemerdekaan penuh Hindia Belanda",
      "Penghapusan Tanam Paksa",
      "Pendidikan untuk pribumi"
    ],
    answer: "Kemerdekaan penuh Hindia Belanda"
  },
  {
    question: "Siapakah arsitek utama ekonomi Orde Baru yang memimpin Bappenas dan sering disebut sebagai bagian dari 'Mafia Berkeley'?",
    options: [
      "Emil Salim",
      "Widjojo Nitisastro",
      "Ali Wardhana",
      "Radius Prawiro"
    ],
    answer: "Widjojo Nitisastro"
  },
  {
    question: "Lembaga negara yang berwenang mengusulkan pengangkatan hakim agung serta menjaga dan menegakkan kehormatan hakim adalah...",
    options: [
      "Mahkamah Konstitusi (MK)",
      "Komisi Yudisial (KY)",
      "Mahkamah Agung (MA)",
      "Komisi Kejaksaan"
    ],
    answer: "Komisi Yudisial (KY)"
  },
  {
    question: "Apa nama epos sastra terpanjang di dunia (melebihi Mahabharata) yang berasal dari tradisi lisan Suku Bugis di Sulawesi Selatan?",
    options: [
      "Babad Tanah Jawi",
      "I La Galigo",
      "Nagarakretagama",
      "Pararaton"
    ],
    answer: "I La Galigo"
  },
  {
    question: "USDEK, yang menjadi bagian dari Manipol (Manifesto Politik) Soekarno pada era Demokrasi Terpimpin, merupakan akronim dari...",
    options: [
      "UUD 45, Sosialisme, Demokrasi, Ekonomi, Kemanusiaan",
      "UUD 45, Sosialisme Indonesia, Demokrasi Terpimpin, Ekonomi Terpimpin, Kepribadian Indonesia",
      "Usaha, Swadaya, Demokrasi, Ekonomi, Komando",
      "Uni, Sosialisme, Demokrasi, Ekonomi, Keadilan"
    ],
    answer: "UUD 45, Sosialisme Indonesia, Demokrasi Terpimpin, Ekonomi Terpimpin, Kepribadian Indonesia"
  },
  {
    question: "Puncak Jaya di Papua adalah titik tertinggi di Indonesia. Pegunungan tempat Puncak Jaya berada adalah...",
    options: [
      "Pegunungan Jayawijaya",
      "Pegunungan Sudirman",
      "Pegunungan Maoke",
      "Pegunungan Arfak"
    ],
    answer: "Pegunungan Sudirman"
  },
  {
    question: "Palung laut (trench) terdalam di Indonesia, dengan kedalaman lebih dari 7.400 meter, adalah...",
    options: [
      "Palung Jawa (Sunda)",
      "Palung Weber (Laut Banda)",
      "Palung Mindanao",
      "Palung Sangihe"
    ],
    answer: "Palung Weber (Laut Banda)"
  },
  {
    question: "Gabungan Politik Indonesia (GAPI) yang dibentuk tahun 1939, terkenal dengan tuntutannya yang berbunyi...",
    options: [
      "Indonesia Merdeka Sekarang",
      "Indonesia Berparlemen",
      "Hapuskan Volksraad",
      "Tolak Milisi Bumiputera"
    ],
    answer: "Indonesia Berparlemen"
  },
  {
    question: "Dalam struktur pemerintahan kolonial Hindia Belanda, 'Volksraad' (Dewan Rakyat) didirikan pada tahun...",
    options: [
      "1901 (Politik Etis)",
      "1918 (Perang Dunia I)",
      "1930 (Depresi Besar)",
      "1870 (Undang-Undang Agraria)"
    ],
    answer: "1918 (Perang Dunia I)"
  },
  {
    question: "Ritual perang berkuda sambil melempar lembing kayu yang merupakan bagian dari upacara adat Suku Sumba di NTT disebut...",
    options: [
      "Fahombo (Lompat Batu)",
      "Ngaben",
      "Pasola",
      "Kebo-Keboan"
    ],
    answer: "Pasola"
  },
  {
    question: "Nama pesawat terbang pertama yang dirancang dan diproduksi di Indonesia oleh IPTN (sekarang PT DI) di bawah pimpinan B.J. Habibie adalah...",
    options: [
      "CN-235",
      "N-219 Nurtanio",
      "N-250 Gatotkaca",
      "C-130 Hercules"
    ],
    answer: "N-250 Gatotkaca"
  },
  {
    question: "Apa nama angkatan perang kolonial Belanda di Hindia Belanda yang dibubarkan setelah pengakuan kedaulatan Indonesia?",
    options: [
      "Koninklijke Marine",
      "Koninklijk Nederlandsch-Indisch Leger (KNIL)",
      "Nederlandsch-Indische Staatsspoorwegen (NIS)",
      "Vereenigde Oostindische Compagnie (VOC)"
    ],
    answer: "Koninklijk Nederlandsch-Indisch Leger (KNIL)"
  },
  {
    question: "Siapakah sastrawan Angkatan Pujangga Baru yang terkenal dengan novel 'Layar Terkembang'?",
    options: [
      "Marah Roesli",
      "Abdul Muis",
      "Sutan Takdir Alisjahbana",
      "Amir Hamzah"
    ],
    answer: "Sutan Takdir Alisjahbana"
  },
  {
    question: "Perjanjian antara Kerajaan Mataram Islam dan VOC yang secara efektif membagi wilayah Mataram menjadi Kasunanan Surakarta dan Kasultanan Yogyakarta adalah...",
    options: [
      "Perjanjian Giyanti (1755)",
      "Perjanjian Salatiga (1757)",
      "Perjanjian Bongaya (1667)",
      "Perjanjian Jepara (1676)"
    ],
    answer: "Perjanjian Giyanti (1755)"
  },
  {
    question: "Menurut UUD 1945 (setelah amandemen), siapa yang berwenang memberikan persetujuan atas permohonan naturalisasi (kewarganegaraan) yang diajukan kepada Presiden?",
    options: [
      "Mahkamah Agung",
      "Dewan Perwakilan Rakyat (DPR)",
      "Menteri Hukum dan HAM",
      "Dewan Perwakilan Daerah (DPD)"
    ],
    answer: "Dewan Perwakilan Rakyat (DPR)"
  },
  {
    question: "Sistem hukum yang dianut Indonesia, yang merupakan warisan dari masa kolonial Belanda, adalah sistem...",
    options: [
      "Common Law (Anglo-Saxon)",
      "Civil Law (Eropa Kontinental)",
      "Hukum Adat",
      "Hukum Syariah"
    ],
    answer: "Civil Law (Eropa Kontinental)"
  },
  {
    question: "Prasasti tertua di Indonesia yang menunjukkan bukti adanya Kerajaan Hindu-Buddha (Kutai) menggunakan aksara...",
    options: [
      "Pallawa (dan bahasa Sanskerta)",
      "Kawi (dan bahasa Jawa Kuno)",
      "Sunda Kuno",
      "Pegon (Arab-Melayu)"
    ],
    answer: "Pallawa (dan bahasa Sanskerta)"
  },
  {
    question: "Siapakah tokoh yang memimpin Serangan Oemoem 1 Maret 1949 di Yogyakarta?",
    options: [
      "Jenderal Soedirman",
      "Sri Sultan Hamengkubuwono IX",
      "Letnan Kolonel Soeharto",
      "Kolonel A.H. Nasution"
    ],
    answer: "Letnan Kolonel Soeharto"
  },
  {
    question: "Lembaga penerbitan yang didirikan pemerintah kolonial Belanda pada 1917 untuk 'mengawasi' bacaan rakyat, yang kemudian menjadi cikal bakal Balai Pustaka adalah...",
    options: [
      "Volkslectuur (Kantoor voor de Volkslectuur)",
      "Javaansche Bank",
      "Bataviaasch Genootschap",
      "STOVIA"
    ],
    answer: "Volkslectuur (Kantoor voor de Volkslectuur)"
  },
  {
    question: "Pulau di Indonesia yang memiliki kepadatan penduduk terendah (paling jarang penduduknya) per kilometer persegi adalah...",
    options: [
      "Kalimantan",
      "Sumatra",
      "Sulawesi",
      "Papua"
    ],
    answer: "Papua"
  },
  {
    question: "Letusan supervulkano yang terjadi sekitar 74.000 tahun lalu dan membentuk kaldera raksasa yang kini dikenal sebagai...",
    options: [
      "Gunung Krakatau",
      "Gunung Tambora",
      "Danau Toba",
      "Kaldera Tengger (Bromo)"
    ],
    answer: "Danau Toba"
  },
  {
    question: "Dalam sistem Kabinet Parlementer era Demokrasi Liberal, kabinet sering jatuh bangun karena adanya...",
    options: [
      "Mosi tidak percaya dari parlemen",
      "Intervensi langsung dari Presiden",
      "Dekrit Presiden",
      "Pemberontakan daerah"
    ],
    answer: "Mosi tidak percaya dari parlemen"
  },
  {
    question: "Tiga lempeng tektonik utama yang bertemu di wilayah Indonesia adalah...",
    options: [
      "Eurasia, Pasifik, dan Indo-Australia",
      "Eurasia, Amerika Utara, dan Pasifik",
      "Indo-Australia, Afrika, dan Antartika",
      "Pasifik, Nazca, dan Filipina"
    ],
    answer: "Eurasia, Pasifik, dan Indo-Australia"
  },
  {
    question: "Petisi yang diajukan oleh Soetardjo Kartohadikoesoemo kepada Ratu Wilhelmina dan parlemen Belanda pada tahun 1936 menuntut...",
    options: [
      "Kemerdekaan penuh Indonesia",
      "Otonomi bagi Hindia Belanda dalam kerangka Kerajaan Belanda",
      "Penghapusan status 'Inlander'",
      "Pembubaran Volksraad"
    ],
    answer: "Otonomi bagi Hindia Belanda dalam kerangka Kerajaan Belanda"
  },
  {
    question: "Selat yang memisahkan Pulau Bangka dan Pulau Belitung adalah...",
    options: [
      "Selat Karimata",
      "Selat Sunda",
      "Selat Gaspar",
      "Selat Malaka"
    ],
    answer: "Selat Gaspar"
  },
  {
    question: "Program 'Benteng' yang dicanangkan pada masa Kabinet Natsir bertujuan untuk...",
    options: [
      "Memperkuat pertahanan militer dari ancaman Belanda",
      "Melindungi pengusaha pribumi dari persaingan pengusaha asing",
      "Membangun benteng di perbatasan Irian Barat",
      "Membendung penyebaran ideologi komunis"
    ],
    answer: "Melindungi pengusaha pribumi dari persaingan pengusaha asing"
  },
  {
    question: "Siapakah pelukis legendaris Indonesia yang dikenal sebagai pelopor aliran Mooi Indië (Hindia Molek)?",
    options: [
      "Affandi",
      "S. Sudjojono",
      "Basuki Abdullah",
      "Raden Saleh"
    ],
    answer: "Raden Saleh"
  },
  {
    question: "Meridian (garis bujur) yang digunakan sebagai acuan Waktu Indonesia Barat (WIB) atau GMT+7 adalah...",
    options: [
      "100° Bujur Timur",
      "105° Bujur Timur",
      "110° Bujur Timur",
      "120° Bujur Timur"
    ],
    answer: "105° Bujur Timur"
  },
  {
    question: "Istilah 'Angkatan '45' dalam Sastra Indonesia merujuk pada karya-karya yang dipelopori oleh Chairil Anwar, yang memiliki karakteristik...",
    options: [
      "Romantisme dan lari dari kenyataan",
      "Didaktis dan penuh nasihat (gaya Balai Pustaka)",
      "Realisme, individualisme, dan semangat perjuangan",
      "Kritik sosial yang kental dengan ideologi sosialis"
    ],
    answer: "Realisme, individualisme, dan semangat perjuangan"
  },
  {
    question: "Pemberontakan PRRI (Pemerintahan Revolusioner Republik Indonesia) pada 1958 diproklamasikan di Bukittinggi oleh...",
    options: [
      "Sjafruddin Prawiranegara",
      "Letkol Ahmad Husein",
      "Kolonel Maludin Simbolon",
      "Letkol Ventje Sumual"
    ],
    answer: "Letkol Ahmad Husein"
  },
  {
    question: "Garis batas fiktif yang memisahkan Paparan Sahul (yang berhubungan dengan Australia) dari zona peralihan Wallacea adalah...",
    options: [
      "Garis Wallace",
      "Garis Lydekker",
      "Garis Khatulistiwa",
      "Garis Balik Utara"
    ],
    answer: "Garis Lydekker"
  },
  {
    question: "Apa nama sandi untuk Agresi Militer Belanda I yang dilancarkan pada 21 Juli 1947?",
    options: [
      "Operasi Kraai (Operasi Gagak)",
      "Operasi Product (Operasi Produk)",
      "Operasi Trikora",
      "Operasi Seroja"
    ],
    answer: "Operasi Product (Operasi Produk)"
  },
  {
    question: "Pulau terbesar di Indonesia yang statusnya *bukan* merupakan pulau bersama (shared island) dan *tidak* berada di paparan benua (continental shelf) adalah...",
    options: [
      "Sumatra",
      "Jawa",
      "Kalimantan",
      "Sulawesi"
    ],
    answer: "Sulawesi"
  },
  {
    question: "Satu-satunya wakil presiden Indonesia yang mengundurkan diri dari jabatannya sebelum masa baktinya berakhir adalah...",
    options: [
      "Mohammad Hatta",
      "Adam Malik",
      "Try Sutrisno",
      "Boediono"
    ],
    answer: "Mohammad Hatta"
  },
  {
    question: "Dalam 'Piagam Jakarta' (Jakarta Charter) 22 Juni 1945, terdapat 'tujuh kata' kontroversial yang kemudian dihapus dari Pembukaan UUD 1945. Tujuh kata itu adalah...",
    options: [
      "Kemerdekaan ialah hak segala bangsa",
      "Dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya",
      "Atas berkat rahmat Allah Yang Maha Kuasa",
      "Kemanusiaan yang adil dan beradab"
    ],
    answer: "Dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya"
  },
  {
    question: "Apa nama kabinet pertama setelah Indonesia kembali ke bentuk NKRI dari RIS pada tahun 1950, yang dipimpin oleh Mohammad Natsir?",
    options: [
      "Kabinet Presidensial",
      "Kabinet Natsir",
      "Kabinet Wilopo",
      "Kabinet Sukiman"
    ],
    answer: "Kabinet Natsir"
  },
  {
    question: "Taman Nasional di Sumatra yang merupakan satu-satunya tempat di dunia di mana gajah, harimau, badak, dan orangutan hidup bersama di alam liar adalah...",
    options: [
      "Taman Nasional Gunung Leuser",
      "Taman Nasional Kerinci Seblat",
      "Taman Nasional Bukit Barisan Selatan",
      "Taman Nasional Way Kambas"
    ],
    answer: "Taman Nasional Gunung Leuser"
  }
]
};