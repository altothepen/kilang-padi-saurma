const newsContainer = document.getElementById('news-container');
fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=YOUR_NEWS_API_KEY')
  .then(response => response.json())
  .then(data => {
    data.articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.className = 'article';
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(articleElement);
    });
  });
