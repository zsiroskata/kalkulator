function szamol() {
    let szam1Szoveg = document.getElementById("szam1").value;
    let szam2Szoveg = document.getElementById("szam2").value;
    let muv = document.getElementById("muvelet").value


    let x = parseInt(szam1Szoveg)
    let y = parseInt(szam2Szoveg)
    let eredmeny = 0


    if (muv === "osszead"){
        eredmeny = x + y;
    } else if  (muv === "kivon"){
        eredmeny = x - y;
    } else if (muv === "szoroz"){
        eredmeny = x * y;
    } else if (muv === "oszt") {
        eredmeny = x / y;
    }

    console.log(eredmeny);
}



document.getElementById("szam1").focus();