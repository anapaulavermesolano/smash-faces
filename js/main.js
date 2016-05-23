var value=0;
var historial = [];
var random = 0;
var errores = 0;
var puntos = 0;
var paises;

$("#seleccion").change(function() {
	value = $(this).val();
	if(value == 2){	
		random = generarAleatorio(peru)	
		laboratoria("peru",peru)
	}else if (value == 3) {	
		random = generarAleatorio(mexico)
		laboratoria("mexico",mexico)
	}
});

function generarAleatorio(pais) {
	var cantidad = pais.length;
	var aleatorio
	var existe = true
	do {
		aleatorio = Math.floor(Math.random()*(cantidad-1)) + 1;
		if (historial.length == cantidad) {
			aleatorio = -1
			existe = false
		} else if (historial.length == 0) {
			historial.push(aleatorio)
			existe = false
		} else {
			var encontrado = historial.indexOf(aleatorio)
			if (encontrado < 0) {
				historial.push(aleatorio)
				existe = false 	
			} else {
				console.log("Se repite! -> " + aleatorio)
			}
		}
	} while (existe)
	return aleatorio
}

function laboratoria(paisCoder, coders) {
	paises = coders[random]
	$("#fondo").html("<img class= 'img-responsive' src='fotos/"+ paisCoder+ "/"+ paises.image + "'/>");
}

$("#comprobar").click(function () {
	if ($('#nombre').val()==peru[random].name) {
		$("#mensaje").html('Exelente es '+ $('#nombre').val());
		puntos= puntos + 5;
		$("#puntaje").html(puntos);
		random = generarAleatorio(peru)
		laboratoria("peru",peru);
		clean();
	}
	else if ($('#nombre').val()==mexico[random].name) {
		$("#mensaje").html('Exelente es '+ $('#nombre').val());
		puntos= puntos + 5;
		$("#puntaje").html(puntos);
		random = generarAleatorio(peru)
		laboratoria("mexico",mexico);
		clean();
	}
	else if($("#nombre").val() != "") {
		errores++;
		$("#mensaje").text('Prueba otra vez.');
		$("#errores").text('Tienes ' + (5 - errores) + ' vidas');
		puntos= puntos - 1;
		$("#puntaje").html(puntos);
		clean();

		if (errores===5) {
			alert("Perdiste, sigue intetando");
			puntos = 0;
			$("#mensaje").text("");
			$("#errores").html("");
			errores= 0;
			$("#puntaje").html("0");
			$("#selecion").val();
			if(value == 2){	
				random = generarAleatorio(peru)	
				laboratoria("peru",peru)
			}else if (value == 3) {	
				random = generarAleatorio(mexico)
				laboratoria("mexico",mexico)
			}
			clean();
		}
	}
		
});


// // for (var i = 0; i < 20; i++) {
// // 	var aleatorio = generarAleatorio(20)
// // 	if (aleatorio == -1) console.log("Ya no hay más números disponibles")
// // 	else console.log(aleatorio)
// // }

console.log(historial)

function clean(){
   var borrar = document.getElementById("nombre");
   borrar.value="";
   borrar.focus();
}