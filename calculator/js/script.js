function szamol() {
    let szam1Szoveg = document.getElementById("szam1").value;
    let szam2Szoveg = document.getElementById("szam2").value;
    let muv = document.getElementById("muvelet").value
    let kiiras = document.getElementById("kiiras")

    let x = parseInt(szam1Szoveg);
    let y = parseInt(szam2Szoveg);
    let eredmeny = 0;
  


    if (muv === "+"){
        eredmeny = x + y;
        
    } else if  (muv === "-"){
        eredmeny = x - y;
        
    } else if (muv === "*"){
        eredmeny = x * y;
    
    } else if (muv === "/") {
        eredmeny = x / y;
        
    }
    kiiras.innerText = `${x} ${muv} ${y} = ${eredmeny}`

    document.getElementById("szam1").value= "";
    document.getElementById("szam2").value= "";
    document.getElementById("muvelet").value = "+";

    
    
    document.getElementById("szam1").focus();
}


    document.getElementById("szam1").focus();
