// FontIcons

/*
    Milestone 1
    Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
    in cui è presente il nome dell’icona e l’icona stessa.
    Milestone 2
    Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per 
    visualizzare le icone del colore corrispondente.
    Milestone 3
    Aggiungere alla pagina una select in cui le options corrispondono 
    ai vari tipi di icone (animal, vegetable, user). 
    Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
    BONUS
    1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: 
    generare in modo casuale un codice colore, sapendo che la notazione esadecimale 
    è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
    2- popolare le options della select della milestone 3 dinamicamente.

*/

// Array icone

let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Bonus 1 aggiungo color random
const {color} = icons;

let newIcons = icons.map(element => {
	element.color = randomColor();
	return element;
})

// Elementi del DOM

const iconsContainerDom = document.getElementById('icons-container');
const filterDom = document.getElementById('filter');

// Genero card con icone

generaCards(newIcons);

// Filtro dal select

filterDom.addEventListener('change',
    function() {
        let iconsFiltered;

        if (filterDom.value == 'animal') {
            
            filtra('animal', iconsFiltered);

        } else if (filterDom.value == 'vegetable') {

            filtra('vegetable', iconsFiltered);

        } else if (filterDom.value == 'user') {

            filtra('user', iconsFiltered);

        } else {
            iconsContainerDom.innerHTML = "";
            iconsFiltered = icons.filter(element => (element.type) ? true:false)
            generaCards(iconsFiltered);
        }
    })









// FUNZIONI

// Funzione per generare cards da un array
function generaCards(array) {
    array.forEach(element => {
        const {name, prefix, color} = element;
        iconsContainerDom.innerHTML += `<div class="card">
                                            <i class="fa-solid ${prefix}${name}" style="color:${color}"></i>
                                            <span>${name}</span>
                                        </div>`;
        
    });
    
}

// Funzione per filtrare le card dal valore "type"
function filtra(value, array) {
    iconsContainerDom.innerHTML = "";
    array = icons.filter(element => (element.type == value) ? true:false)
    generaCards(array);
    
}

// Funzione per colore random
function randomColor() {
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	return `#${randomColor}`;
}





