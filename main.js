
function desordenar() {
     piezas= piezas.sort(function() {return Math.random() - 0.5});
    console.log(piezas);
}

function desmarcar() {
    for (let i = 0; i <=8; i++) {
        document.getElementById('img-'+i).style.border =null;
        
    }
}

//cuando se le hace click en una casilla 
function seleccionarficha(casilla) {
    //contabilizo los clicks en las casillas 
    num_click=num_click+1;

    if(num_click ==1){
        casilla_click_primero=casilla;
        desmarcar();
        document.getElementById('img-'+casilla).style.border = "solid 2px red";
    }
    

    if (num_click==2) {
       var casilla_click_segundo = casilla;
        //intercambia las posiciones del array
        var aux = piezas[casilla_click_primero];
        //cambio el contenido de las casillas 
        piezas[casilla_click_primero]= piezas[casilla_click_segundo];
        //pongo en la casilla del segundo click el contenido que habia en el primnero 
        piezas[casilla_click_segundo]=aux;
        //pongo el contador de click en 0
        num_click=0;
        refrescarpuzzle();
    }
}

function finalizado() {
    var correcto = true;

    for (var i=0; i<=8; casilla++){
        if (piezas[i] != i) {
            correcto = false;
        }
    }

    var correcto = finalizado();

if(correcto==true){
    alert('puzzle finalizado')
}

}



function refrescarpuzzle() {
    for( let casilla=0; casilla<=8; casilla++){
        //obtengo el numero de la imagen que hay en el array en la casilla
        let imagen = piezas[casilla];
        //pinto en la casilla i la imagen
        document.getElementById('img-'+casilla).src = './imagenes/imagen-'+imagen+'.jpg';
    }
}

var piezas=[0,1,2,3,4,5,6,7,8];
//variable para distinguir el click
var num_click =0;

var casilla_click_primero;

desordenar();
refrescarpuzzle();