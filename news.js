const apiKey = '0b38231e743d44eea246bd062264c755'; // API key dari News API
const apiUrl = `https://newsapi.org/v2/everything?q=pupuk+pertanian+indonesia&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-articles');
    newsContainer.innerHTML = '';
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
