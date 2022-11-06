
let destapadas = 0;
let t1 = null;
let t2 = null;
let r1 = null;
let r2 = null;
let mov = 0;
let aci = 0;
let tempo = false;
let timer = 40;
let timestop = null;
let mosmov = document.getElementById('movimientos');
let mosaci = document.getElementById('aciertos');
let mostempo = document.getElementById('t-restante');
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,9,9,10,10];
numeros = numeros.sort(() => { return Math.random() - 0.5 });
console.log(numeros);

function contarTiempo() {
    timestop = setInterval(() => {
        timer--;
        mostempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0) {
            clearInterval(timestop);
            blockta();
        }
    }, 1000)
}

function blockta(){
    for(let i=0; i<=19; i++){
        let tablock = document.getElementById(i);
        tablock.innerHTML= `<img src="./Imagen/${numeros[i]}.png" alt ="">`;
        tablock.disabled=true;
    }
}




function destapar(id) {

    if (tempo == false) {
        contarTiempo();
        tempo = true;

    }
    destapadas++;

    if (destapadas == 1) {

        t1 = document.getElementById(id);
        r1 = numeros[id]
        t1.innerHTML = `<img src="./Imagen/${r1}.png" alt ="">`;
        

    } else if (destapadas == 2) {
        t2 = document.getElementById(id);
        r2 = numeros[id]
        t2.innerHTML = `<img src="./Imagen/${r2}.png" alt ="">`;
        t2.disable = true;

        mov++;
        mosmov.innerHTML = `Movimientos: ${mov}`;

        if (r1 == r2) {
            destapadas = 0;

            aci++;
            mosaci.innerHTML = `Acertados: ${aci}`;

          if(aci == 10){
            clearInterval(timestop)
            mostempo.innerHTML = `Felicidades completaste el juego`
          }


        } else {

            setTimeout(() => {
                t1.innerHTML = ' ';
                t2.innerHTML = ' ';
                t1.disable = false;
                t2.disable = false;
                destapadas = 0;
            }, 800);
        }
    }
}