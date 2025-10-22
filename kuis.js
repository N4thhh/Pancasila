// =================================================================
// LOGIKA KUIS (OTAK KUIS)
// =================================================================

// --- 1. Ambil Elemen HTML ---
// Kita ambil semua elemen HTML yang kita perlukan untuk berinteraksi
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const scoreScreen = document.getElementById('score-screen');

const startCategoryTitle = document.getElementById('start-category-title');
const startButton = document.getElementById('start-button');

const questionCounter = document.getElementById('question-counter');
const quizCategory = document.getElementById('quiz-category');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

const finalScore = document.getElementById('final-score');
const correctCount = document.getElementById('correct-count');
const totalCount = document.getElementById('total-count');
const usernameInput = document.getElementById('username-input');
const saveScoreButton = document.getElementById('save-score-button');

// --- 2. Variabel Status Kuis ---
// Variabel untuk melacak progres kuis
let currentCategory = '';        // 'mudah', 'normal', atau 'sulit'
let selectedQuestions = [];      // 15 soal yang sudah diacak
let currentQuestionIndex = 0;  // Index soal yang sedang tampil (mulai dari 0)
let score = 0;                 // Skor pengguna

// --- 3. Fungsi Utama Kuis ---

// Fungsi ini dijalankan saat halaman 'kuis.html' selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // 3.1. Baca kategori dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('kategori');

    // Cek jika kategori ada dan valid
    if (category && allQuestions[category]) {
        currentCategory = category;
        // 3.2. Siapkan Layar Mulai
        startCategoryTitle.textContent = category;
        quizCategory.textContent = category;

        // Beri warna sesuai kategori
        let categoryColorClass = 'bg-gray-500'; // Default
        if (category === 'mudah') categoryColorClass = 'bg-hijau-mudah text-white';
        if (category === 'normal') categoryColorClass = 'bg-kuning-normal text-white';
        if (category === 'sulit') categoryColorClass = 'bg-merah-sulit text-white';
        
        startCategoryTitle.classList.add(category.replace('mudah', 'text-hijau-mudah').replace('normal', 'text-kuning-normal').replace('sulit', 'text-merah-sulit'));
        quizCategory.classList.add(categoryColorClass);

    } else {
        // Jika kategori tidak valid, kembalikan ke index
        window.location.href = 'index.html';
    }
});

// 3.3. Saat tombol "Mulai Kuis!" diklik
startButton.addEventListener('click', () => {
    startQuiz();
});

// 3.4. Saat tombol "Selanjutnya" diklik
nextButton.addEventListener('click', () => {
    handleNextQuestion();
});

// 3.5. Saat tombol "Simpan Skor" diklik
saveScoreButton.addEventListener('click', () => {
    saveScore();
});

// Fungsi untuk Memulai Kuis
function startQuiz() {
    // Sembunyikan layar mulai, tampilkan layar kuis
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Reset status
    currentQuestionIndex = 0;
    score = 0;

    // 3.6. Ambil 50 soal dari 'allQuestions' (dari data.js)
    const allCategoryQuestions = allQuestions[currentCategory];

    // 3.7. Acak 50 soal dan ambil 15 soal pertama
    selectedQuestions = allCategoryQuestions.sort(() => 0.5 - Math.random()).slice(0, 15);

    // Tampilkan soal pertama
    showQuestion();
}

// Fungsi untuk Menampilkan Soal
function showQuestion() {
    // Reset tampilan sebelumnya
    resetState();

    // Ambil data soal saat ini
    const question = selectedQuestions[currentQuestionIndex];
    
    // Tampilkan nomor soal dan teks pertanyaan
    questionCounter.textContent = `Soal ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
    questionText.textContent = question.question;

    // Buat tombol untuk setiap pilihan jawaban
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn', 'w-full', 'p-4', 'rounded-lg', 'border-2', 'border-gray-300', 'text-left', 'text-lg', 'hover:bg-gray-100', 'transition-colors', 'duration-200');
        
        // Simpan jawaban yang benar di tombol (untuk pengecekan)
        if (option === question.answer) {
            button.dataset.correct = true;
        }

        // Tambahkan event listener ke tombol pilihan
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

// Fungsi untuk Mereset Tampilan Soal
function resetState() {
    // Sembunyikan tombol 'Selanjutnya'
    nextButton.classList.add('hidden');
    
    // Hapus semua pilihan jawaban dari soal sebelumnya
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

// Fungsi saat Pengguna Memilih Jawaban
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    // Cek apakah jawaban benar
    if (isCorrect) {
        // Tambah skor dan beri warna hijau
        score++;
        selectedButton.classList.add('bg-hijau-benar', 'text-white', 'border-hijau-benar');
    } else {
        // Beri warna merah
        selectedButton.classList.add('bg-merah-salah', 'text-white', 'border-merah-salah');
    }

    // Beri tahu jawaban yang benar (jika pengguna salah pilih)
    Array.from(optionsContainer.children).forEach(button => {
        if (button.dataset.correct === 'true' && !isCorrect) {
            button.classList.add('bg-hijau-benar', 'text-white', 'border-hijau-benar');
        }
        // Matikan semua tombol agar tidak bisa diklik lagi
        button.disabled = true;
    });

    // Tampilkan tombol 'Selanjutnya'
    nextButton.classList.remove('hidden');
}

// Fungsi untuk Menangani Soal Berikutnya
function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        // Jika masih ada soal, tampilkan soal berikutnya
        showQuestion();
    } else {
        // Jika soal sudah habis, tampilkan skor
        showScore();
    }
}

// Fungsi untuk Menampilkan Layar Skor
function showScore() {
    // Sembunyikan layar kuis, tampilkan layar skor
    quizScreen.classList.add('hidden');
    scoreScreen.classList.remove('hidden');

    // Hitung skor akhir (misal: 100 poin maks)
    // 1 soal = 100 / 15 = 6.66... poin. Kita bulatkan.
    const finalScoreValue = Math.round((score / selectedQuestions.length) * 100);

    // Tampilkan skor dan ringkasan
    finalScore.textContent = finalScoreValue;
    correctCount.textContent = score;
    totalCount.textContent = selectedQuestions.length;
}

// Fungsi untuk Menyimpan Skor ke Leaderboard
function saveScore() {
    const username = usernameInput.value;

    // Validasi nama
    if (!username || username.trim() === '') {
        alert('Harap masukkan nama Anda!');
        return;
    }

    // 3.8. Sistem Leaderboard menggunakan localStorage
    // 'localStorage' adalah penyimpanan kecil di browser pengguna
    
    // Buat data skor baru
    const newScore = {
        name: username,
        score: Math.round((score / selectedQuestions.length) * 100),
        category: currentCategory
    };

    // 1. Ambil data leaderboard yang sudah ada dari localStorage
    // JSON.parse() mengubah teks kembali menjadi object/array
    const leaderboards = JSON.parse(localStorage.getItem('leaderboards')) || { mudah: [], normal: [], sulit: [] };

    // 2. Tambahkan skor baru ke kategori yang sesuai
    leaderboards[currentCategory].push(newScore);

    // 3. Urutkan skor dari yang tertinggi ke terendah
    leaderboards[currentCategory].sort((a, b) => b.score - a.score);

    // 4. Simpan kembali ke localStorage
    // JSON.stringify() mengubah object/array menjadi teks
    localStorage.setItem('leaderboards', JSON.stringify(leaderboards));

    // 5. Arahkan pengguna kembali ke halaman utama (langsung ke bagian leaderboard)
    window.location.href = 'index.html#leaderboard';
}