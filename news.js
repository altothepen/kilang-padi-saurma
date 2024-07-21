const apiKey = '0b38231e743d44eea246bd062264c755';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = `${proxyUrl}https://newsapi.org/v2/everything?q=pupuk+pertanian+indonesia&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log data untuk memeriksa struktur
        if (data.articles) {
            displayNews(data.articles);
        } else {
            console.error('No articles found in the response');
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-articles');
    newsContainer.innerHTML = '';
    if (!articles || articles.length === 0) {
        newsContainer.innerHTML = '<p>No articles found.</p>';
        return;
    }
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Baca Selengkapnya</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}

fetchNews();
