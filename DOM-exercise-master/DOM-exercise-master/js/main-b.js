// Put code of task B here
const main = document.querySelector('main');

//tee article ja lisää se mainiin
/*const article = document.querySelector('main');

const h = document.createElement('header');

const t = document.createTextNode("Tässä on kappale.");
h.appendChild(t);

article.appendChild(h);
 */

main.innerHTML += `<article>
            <header>
                <h2>Article header 2</h2>
            </header>
            <figure>
                <img src="http://placekitten.com/320/160" alt="title">
                <figcaption>Caption</figcaption>
            </figure>
            <p>dfkdsofkd Here is some text. Here is some text. Here is some text. Here is some text.</p>
        </article>`;
