 // Data artikel disimpan di localStorage sebagai array objek
let articles = JSON.parse(localStorage.getItem('articles')) || [];

// Fungsi untuk menampilkan artikel di index.html
function displayArticles() {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';
    articles.forEach((article, index) => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.date}</p>
            <p>${article.summary}</p>
        `;
        card.onclick = () => openModal(index);
        container.appendChild(card);
    });
}

// Fungsi untuk membuka modal detail artikel
function openModal(index) {
    const modal = document.getElementById('article-modal');
    const article = articles[index];
    document.getElementById('modal-title').textContent = article.title;
    document.getElementById('modal-date').textContent = article.date;
    document.getElementById('modal-image').src = `images/${article.image}`;
    document.getElementById('modal-content').textContent = article.content;
    modal.style.display = 'block';
}

// Tutup modal
document.querySelector('.close').onclick = () => {
    document.getElementById('article-modal').style.display = 'none';
};

// Load artikel saat halaman index dimuat
if (document.getElementById('articles-container')) {
    displayArticles();
}

// Login admin (statis: username "admin", password "password")
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        document.getElementById('login-error').textContent = 'Username atau password salah!';
    }
}

// Logout
function logout() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('admin-panel').style.display = 'none';
}

// Form tambah artikel
document.getElementById('article-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const summary = document.getElementById('summary').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;
    articles.push({ title, date, summary, content, image });
    localStorage.setItem('articles', JSON.stringify(articles));
    alert('Artikel berhasil ditambahkan!');
    this.reset();
}); 