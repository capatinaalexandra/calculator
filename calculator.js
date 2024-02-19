//functia este apelata atunci cand se face click pe una din cifrele de la calculator sau pe semnele +,-,*,/,.
//preia continutul rezultatului afisat pe display si adauga parametrul valoare(care este valoarea pe care noi apasam)la rezultat
//pentru ca functia sa mearga, trebuie sa adaugam un eveniment click in HTML care sa apeleze functia
function addResult(val) {
    let result = document.getElementById('result');
    if(result.textContent==="0"){
        result.textContent=val
    } else {
        result.textContent+=val
    }
}
//functia este apalata atunci cand se apasa pe egal, preluand continutul rezultatului initial si evaluzeaza utilizand functia eval expresia matematica folosita
//atribuie apoi continutului rezultatului valoarea detereminata pe baza expresiei matematice folosite
function calculateResult(){
    let result = document.getElementById('result')
    let content=result.textContent
    let finalResult=eval(content)
    result.textContent=finalResult
}

//functia este apelata atunci cand se face click pe butonul "Clear"
//preaia continutul rezultatului afisat pe display si egaleaza continutul acestuia cu "0"

function clearResult(){
    let result = document.getElementById('result')
    if(result.textContent!=="0"){
        result.textContent="0"
    }
}