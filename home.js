const articlesList = document.querySelector('.articles ul');

// Fetch the contents of the /html/ directory
fetch('/html/')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    // Find all <a> tags that link to .html files
    const htmlLinks = doc.querySelectorAll('a[href$=".html"]');

    // Loop through each link, extract the href, and add it to the list
    htmlLinks.forEach(link => {
      const href = link.getAttribute('href');
      const text = link.textContent.split('.html')[0]; // Remove ".html" from text

      const articleLink = document.createElement('li');
      const articleAnchor = document.createElement('a');
      articleAnchor.href = '/html/' + href; // Ensure it's relative to the /html/ folder
      articleAnchor.textContent = text;
      articleLink.appendChild(articleAnchor);

      // Append to the list in the DOM
      articlesList.appendChild(articleLink);
    });
  })
  .catch(error => {
    console.error('Error fetching the HTML directory:', error);
  });
