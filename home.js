const articlesList = document.querySelector('.articles ul');

fetch('/html/')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const htmlLinks = doc.querySelectorAll('a[href$=".html"]');

    htmlLinks.forEach(link => {
      const href = link.getAttribute('href');
      const text = link.textContent.split('.html')[0];
      const articleLink = document.createElement('li');
      const articleAnchor = document.createElement('a');
      articleAnchor.href = href;
      articleAnchor.textContent = text;
      articleLink.appendChild(articleAnchor);
      articlesList.appendChild(articleLink);
    });
  });