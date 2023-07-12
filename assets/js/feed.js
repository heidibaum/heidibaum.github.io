---
layout: null
---

document.addEventListener('DOMContentLoaded', function() {
  const feedContainer = document.getElementById('rss-feed');
  const feedUrl = 'https://us5.campaign-archive.com/feed?u=bd7eb0aaff403a504de65091d&amp;id=80eb1f8f4b';

  // Fetch the RSS feed
  fetch(feedUrl)
    .then(response => response.text())
    .then(xml => {
      const parser = new RSSParser();
      return parser.parseString(xml);
    })
    .then(feed => {
      // Create HTML elements for each feed item
      feed.items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
          <a href="${item.link}">${item.title}</a>
          <p>${item.contentSnippet}</p>
        `;
        feedContainer.appendChild(itemElement);
      });
    })
    .catch(error => {
      console.error('Error fetching or parsing RSS feed:', error);
    });
});
