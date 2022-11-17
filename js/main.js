// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (se avete fatto bonus di ieri e partite da li, sennò range rimane di base 1-100): le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



// let button = document.getElementById("play");
// const contenitore = document.querySelector(".container");

// button.addEventListener("click",
//     function(){
//         contenitore.innerHTML = '';
//         console.clear();
//         contenitore.classList.add("active");
    

//         for (let i = 1; i <= 100; i++){
//             const element = document.createElement('div');
//             element.classList.add("box");
//             contenitore.append(element);
//             element.append(i);

//             element.addEventListener("click",
//                 function(){
//                     element.classList.toggle("clicked");
//                     console.log(i);
//                 }
                
//             );
//         };
//     }
// )


// creo un Array di 16 numeri 
// distribuisco i numeri a random 

let button = document.getElementById("play");
const contenitore = document.querySelector(".container");


button.addEventListener("click",

    function(){
        contenitore.innerHTML = '';
        console.clear();
        contenitore.classList.add("active");
    
        // creo un array di 16 numeri
        const myArr = genNumRandom(16, 1, 16);
        // in console vedo il mio Array creato con le funzioni
        console.log(myArr);
    

        for (let i = 1; i <= 100; i++){
            const element = document.createElement('div');
            element.classList.add("box");
            contenitore.append(element);
            element.append(i);

            element.addEventListener("click",
                function(){
                    element.classList.toggle("clicked");
                    console.log(i);
                }
                
            );
        };
    }
)
    
    // genero numeri random
    function randomInteger(min, max){
        return (Math.floor(Math.random() * ((max + 1) - min) + min));
    }
    
    function genNumRandom (quanti, minNum, maxNum) {
        const newArr = [];
        
        while (newArr.length < quanti){
            let newNumber = randomInteger(minNum, maxNum);
            
            if(!newArr.includes(newNumber)){
                newArr.push(newNumber);
            }
        }
        return newArr;
    }
        