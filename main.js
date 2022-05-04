
let alteZufallsZahl=50;
let Winstreak=0;
let neueZufallsZahl=0;

function hoeherGeschaetzt(){
        neueZufallsZahl= Math.round(Math.random()*100)
        console.log(neueZufallsZahl)
        if (alteZufallsZahl<neueZufallsZahl){
            Winstreak=Winstreak+1
            console.log(Winstreak)
            document.getElementById("ausgabe").innerHTML = "Du hast gewonnen! Du hast schon:"+Winstreak+"-mal gewonnen."
            alteZufallsZahl=neueZufallsZahl
            console.log(neueZufallsZahl)
            document.getElementById("aktuellerWert").innerHTML= "Der Wert ist bei:"+alteZufallsZahl
            document.getElementById("generierteZufallszahl").innerHTML= "Die generierte Zufallszahl lag bei:"+neueZufallsZahl
        }else{
            Winstreak=0
            alteZufallsZahl=50
            alert("Du hast leider verloren! "+neueZufallsZahl+" ist kleiner! "+" :-( .Deine Gewinnfolge ist wieder bei 0.")
            document.getElementById("ausgabe").innerHTML = ""
            document.getElementById("aktuellerWert").innerHTML= "Der Wert ist bei:"+alteZufallsZahl
            document.getElementById("generierteZufallszahl").innerHTML= "Viel Glück!"
        }

}
function tieferGeschaetzt(){
       neueZufallsZahl= Math.round(Math.random()*100)
       console.log(neueZufallsZahl)
       if (alteZufallsZahl>neueZufallsZahl){
           Winstreak=Winstreak+1
           console.log(Winstreak)
           document.getElementById("ausgabe").innerHTML = "Du hast gewonnen! Du hast schon:"+Winstreak+"-mal gewonnen."
           alteZufallsZahl=neueZufallsZahl
           console.log(neueZufallsZahl)
           document.getElementById("aktuellerWert").innerHTML= "Der Wert ist bei:"+alteZufallsZahl
           document.getElementById("generierteZufallszahl").innerHTML= "Die generierte Zufallszahl lag bei:"+neueZufallsZahl
       }else{
           Winstreak=0
           alteZufallsZahl=50
           alert("Du hast leider verloren! "+neueZufallsZahl+" ist größer! "+" :-( .Deine Gewinnfolge ist wieder bei 0.")
           document.getElementById("ausgabe").innerHTML = ""
           document.getElementById("aktuellerWert").innerHTML= "Der Wert ist bei:"+alteZufallsZahl
           document.getElementById("generierteZufallszahl").innerHTML= "Viel Glück!"
       }
}

