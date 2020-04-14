// Put code of task C here
const main = document.querySelector('main');

const article = document.createElement('article');

const h2 = document.createElement('h2');
const htext = document.createTextNode('Article header');
h2.appendChild(htext);

const header = document.createElement('header');
header.appendChild(h2);

const i = document.createElement('img');
i.src = 'http://placekitten.com/320/160';
i.alt = 'title';

const caption = document.createTextNode('Caption');

const fig = document.createElement('figcaption');
fig.appendChild(caption);

const figure = document.createElement('figure');
figure.appendChild(i);
figure.appendChild(fig);

const t = document.createTextNode('Here is some text. Here is some text. Here is some text. Here is some text.');

const p = document.createElement('p');
p.appendChild(t);

article.appendChild(header);
article.appendChild(figure);
article.appendChild(p)

main.appendChild(article);

