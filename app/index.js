import './main.scss'
import generateText from './sub';
let app  = document.createElement('div');
let name ="黑卡前端"
app.innerHTML = `<h1>我们来自${name}</h1>`;
document.body.appendChild(app);
app.appendChild(generateText());