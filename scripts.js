// variables
const cantPremios = document.getElementById("cantPremios");
const origen = document.getElementById('formControlTextArea1');
const destino = document.getElementById('formControlTextArea2')

// funciones generales

function refuerzaMinyMaX(cant) {

    if (parseInt(cant.value) < 1) {
        cant.value = 1;
    } else if (parseInt(cant.value) > 100) {
        cant.value = 100;
    } else {
        cant.value = withoutLetters(cant.value)
    }
}

function withoutLetters(cant) {
    return cant.replace(/[^0-9]/g, '');
}

function copiarDatos(event) {
    event.preventDefault()
    if (destino.value === "") {
        swal({
            text: 'No hay resultado para copiar!',
            icon: "warning"
        });
    } else {
        navigator.clipboard.writeText(destino.value).then(function () {
            swal({
                text: 'Se copió el resultado!'+ destino.value,
                icon: "success"
            });
        }, function (err) {
            swal({
                text: 'No se pudo copiar el resultado (ver consola)',
                icon: "error"
            });
            console.log(err)
        });
    }
}

function borrarDatos() {
    destino.value = ""
    cantPremios.value = "1"
}

// funciones del sorteo

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError(swal({
            text: "La cantidad de participantes es menor a los premios.",
            icon: "error"
        }));
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

    

    


function ejecutarCaptura(event) {
    //function incrementar (){
        
        var valorContador = 3; //incrementar de 1 en 1
       var l = document.getElementById("contador");
        
    let  temp = window.setInterval(function(){
      l.innerHTML = valorContador;
      valorContador--;
      var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', '/media/rialtounie.mp3');

    },500);
    
    setTimeout(() => { clearInterval(temp); 
        var sonido = document.querySelector('#audio2');
    sonido.setAttribute('src', '/media/winner.mp3');
        return (
           
           
        destino.value = resultado.map((value, index) => ` ${(index+1)}: ${value}`).join('\n'),
        swal({
            title: 'EL GANADOR ES!'+ destino.value,
            icon: "success",
            
                     
        })
        
    ); }, 2300);
   
      
    
    
     
    event.preventDefault()
    let premios = parseInt(cantPremios.value)
    let captura = (origen.value).split('\n').map(e => e.trim()).filter(e => e)
    let resultado = getRandom(captura, premios)

    
}


