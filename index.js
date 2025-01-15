// let numero = [1,2,3,4,5,6,7,8,9,10];
// let alunos = ["marcus","nagila","camila","leonardo"];
// alunos[25] = "Isaac"
// let booleans = [true, true, false, true, false];

// for(let i = 0; i < 4; i++){
//     console.log(`Bem vindo(a) ${alunos[i]}`);
// }


// for(let i = 1; i <= 31; i++){
//     dia.innerHTML += `<option>${i}</option>`
// }

let nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for(let i = 0; i < nomesMeses.length; i++){
    mes.innerHTML += `<option>${nomesMeses[i]}</option>`
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

let selectElement = document.getElementById('mes');
function definirDia(){
    if(Number(ano.value) % 4 == 0 && selectElement.value === 'Fevereiro'){
        for(let i = 1; i <= 29; i++){
            dia.innerHTML += `<option>${i}</option>`
        }  
        }else if(Number(ano.value) % 4 != 0 && selectElement.value === "Fevereiro"){
            for(let i = 1; i <= 28; i++){
                dia.innerHTML += `<option>${i}</option>`
            } 
        }else if(selectElement.value === "Abril" ||selectElement.value === "Junho" ||selectElement.value === "Setembro" ||selectElement.value === "Novembro"){
            for(let i = 1; i <= 30; i++){
                dia.innerHTML += `<option>${i}</option>`
            } 
        }else if(selectElement.value === "Janeiro" ||selectElement.value === "Março" ||selectElement.value === "Maio" ||selectElement.value === "Julho"|| selectElement.value === "Agosto" ||selectElement.value === "Outubro" ||selectElement.value === "Dezembro"){
            for(let i = 1; i <= 31; i++){
                dia.innerHTML += `<option>${i}</option>`
            } 
        } 

    }

