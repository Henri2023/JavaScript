import { dates } from './dates.js';
import makeFirstCapital from './makeFisrtCapital.js';

const main = document.querySelector('main');
const options = document.querySelector('#options');
const overview = document.querySelector('#overview');

let sortedDates = [];

sortedDates = dates.sort((a, b) => {
  if (a.data > b.data) {
    return 1;
  }
  if (a.data < b.data) {
    return -1;
  }
  return 0;
});

window.addEventListener('load', () => {
  options.innerHTML = `
    <button class="active">Ano</button>
    <button>Jan</button>
    <button>Fev</button>
    <button>Mar</button>
    <button>Abr</button>
    <button>Maio</button>
    <button>Jun</button>
    
    <button>Jul</button>
    <button>Ago</button>
    <button>Set</button>
    <button>Out</button>
    <button>Nov</button>
    <button>Dez</button>
`;
  options.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => {
      const month = index < 10 ? `0${index}` : `${index}`;

      options.querySelectorAll('button').forEach(button => {
        button.classList.remove('active');
      });

      button.classList.add('active');

      generateCards(filterByMonth(month));
    });
  });
});

generateCards(sortedDates);

function filterByMonth(month) {
  if (month === '00') return sortedDates;

  const filteredDates = sortedDates.filter(date => {
    return date.data.split('-')[0] === month;
  });

  //console.log(filteredDates);
  return filteredDates;
}

function generateCards(dateArray) {
  main.innerHTML = '';

  dateArray.forEach(date => {
    RenderCard(
      date.data,
      date.descricao,
      date.tipo
    );
  })
}

function updateOverview() {
  overview.innerHTML = `
  <hr/>
    <p>
      ${main.querySelectorAll('.card').length} Datas
    </p>
  <hr/>
  `
}

function RenderCard(
  date,
  desc,
  type
) {
  const card = document.createElement('div');
  card.classList.add('card');
  const day = date.split('-')[1];
  const month = date.split('-')[0];

  if (type === "comida") {
    card.classList.add('food-date');
  }
  if (type === "muccini") {
    card.classList.add('muccini-date');
  }

  card.innerHTML = `
    <div id="date">
      <div>
        ${getDay(day)} de
      </div>
      <div>
        ${getMonthName(month)}
      </div>
    </div>  
    
    <div id="name">
      <p>
        ${fixName(desc)}
      </p>
    </div>

    <div id="type">
      <p>
        ${makeFirstCapital(type)}
      </p>
    </div>
  `
  main.appendChild(card);
  updateOverview();
}

function fixName(name) {
  let newName = name.replace(/Ã©/g, 'é');
  newName = newName.replace(/Ã§/g, 'ç');
  newName = newName.replace(/Ã£o/g, 'ão');
  newName = newName.replace(/Ã³/g, 'ó');
  newName = newName.replace(/Ã¡/g, 'á');
  newName = newName.replace(/Ãª/g, 'ê');
  newName = newName.replace(/Ãº/g, 'ú');
  newName = newName.replace(/Ãµ/g, 'õ');
  newName = newName.replace(/Ã¢/g, 'â');
  newName = newName.replace(/Ã/g, 'í');
  newName = newName.replace(/Ã­/g, 'í');
  newName = newName.replace(/Ã´/g, 'ô');
  newName = newName.replace(/Ãª/g, 'ê');
  newName = newName.replace(/Ã³/g, 'ó');
  newName = newName.replace(/Ã´/g, 'ô');
  newName = newName.replace(/Ãª/g, 'ê');
  newName = newName.replace(/Âº/g, 'º');

  return newName;
}
function getMonthName(month) {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro',
    'Dezembro'
  ];

  return months[month - 1];
}
function getDay(day) {
  return day.split('')[0] === '0' ? day.split('')[1] : day;
}
