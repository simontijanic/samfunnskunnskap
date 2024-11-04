fetch('/views/header.html')
.then(response => response.text())
.then(html => {
    document.getElementById('header-container').innerHTML = html;
});

document.addEventListener('DOMContentLoaded', function() {
    const htmlFiler = [];
  
    fetch('/views/header.html')
      .then(response => response.text())
      .then(data => { //stringen av HTML data som jeg vil gjøre til dom
        // console.log(data)
  
        fetch('/html/')
          .then(response => response.text())
          .then(data => {
            const parser = new DOMParser(); //parse html til document objekt model
            const doc = parser.parseFromString(data, 'text/html'); //forteller at det er html istedet for xml
            const htmlLinks = doc.querySelectorAll('a[href$=".html"]');
  
            htmlLinks.forEach(link => {
                const href = link.getAttribute('href');
                const text = link.textContent.split('.html')[0];
                htmlFiler.push({ href, text });
              });
  
            const navbarRight = document.querySelector('.right');
            if (navbarRight) {
              htmlFiler.forEach(file => {
                const link = document.createElement('a');
                link.href = file.href;
                link.textContent = file.text;
                navbarRight.appendChild(link);
              });
            }
          }).then(() => {
            const navbarLinks = document.querySelectorAll('.right');
            navbarLinks.forEach(link => {
              const links = link.querySelectorAll('a');
              links.forEach(link => {
                if (link.href === window.location.href) {
                  link.style.backgroundColor = '#ccc';
                  link.style.color = 'black';
                }
              });
            });
          });
      });
  });


