// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

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

for (let i = 0; i < employers.length; i++){
    for (let key in employers[i]){
        console.log(employers[i][key]);
        document.getElementById('myemployers').innerHTML += employers[i][key];
    }
}
    // console.log(employers[i]);
    // 


// let teams = document.getElementById('myemployers').innerHTML = employers;
// console.log('teams', teams, typeof teams);

// console.log('employers', employers, typeof employers);
// for (let i = 0; i < employers.length; i++){
//     console.log(employers[i]);
//     document.getElementById('myemployers').innerHTML = (employers[i]);
