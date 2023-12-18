// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1: Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede

let teamcontainer = document.querySelector(".containerteams");


const employers = [
    impiegato1 = {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    impiegato2 = {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    impiegato3 = {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    impiegato4 = {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    impiegato5 = {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    impiegato6 = {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
        
    },
]

// SOLUZIONE BONUS
for (let i = 0; i < employers.length; i++){
    teamcontainer.innerHTML += `<h2>${employers[i]['name']}</h2>`;
    teamcontainer.innerHTML += `<p>${employers[i]['role']}</p>`;
    teamcontainer.innerHTML += `<img src="${employers[i]['image']}">`;
}

// SOLUZIONE ESERCIZIO BASE
// for (let i = 0; i < employers.length; i++){
//     for (let key in employers[i]){
//         console.log(employers[i][key]);
//         teamcontainer.innerHTML +=
//         `<div>${employers[i][key]}</div>`;
//     }
// }

