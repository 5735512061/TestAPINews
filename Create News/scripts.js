const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://agile-cliffs-83142.herokuapp.com/api/news', true);
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(news => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h3 = document.createElement('h3');
      h3.textContent = news.title;

      const p = document.createElement('p');
      news.detail = news.detail.substring(0, 300);
      p.textContent = news.detail;

      container.appendChild(card);
      card.appendChild(h3);
      card.appendChild(p);
    });

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Error';
    app.appendChild(errorMessage);
  }
}

request.send();
