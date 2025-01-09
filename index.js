// let numero = [1,2,3,4,5,6,7,8,9,10];
// let alunos = ["marcus","nagila","camila","leonardo"];
// alunos[25] = "Isaac"
// let booleans = [true, true, false, true, false];

// for(let i = 0; i < 4; i++){
//     console.log(`Bem vindo(a) ${alunos[i]}`);
// }


for(let i = 1; i <= 31; i++){
    dia.innerHTML += `<option>${i}</option>`
}

for(let i = 1; i <= 12; i++){
    mes.innerHTML += `<option>${i}</option>`
}

// for(let i = 2025; i >= 1975; i--){
//     ano.innerHTML += `<option>${i}</option>`
// }
for(let i = new Date().getFullYear(); i >= new Date().getFullYear() - 50; i--){
    ano.innerHTML += `<option>${i}</option>`
}

function verificar(){

    if(Number(ano.value) % 4 == 0){
        alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, nasceu em ano bissexto`)
    }
    
}