var value=0;

$(document).ready(function() {
	var paisperu, paismexico;

	$("#seleccion").change(function() {
		value = $(this).val();
		if(value == 2){		
			paisperu = sede(peru)
			$("#fondo").html("<img class= 'img-responsive' src='fotos/peru/"+ paisperu.image + "'/>");
		}else if (value == 3) {	
			paismexico = sede(mexico)
			$("#fondo").html("<img class= 'img-responsive' src='fotos/mexico/"+ paismexico.image + "'/>");
		}
	});
	var errores = 0;
	var puntos = 0;
	var pais = 0;
	var l = 0;
	function valuarPais() {
		value = $("#seleccion").val();
		if (value== 2) {
			 	pais = paisperu;
			 	l= "peru";
		}
		else if (value == 3){
			 	pais = paismexico;
			 	l = "mexico";
			 }	 
		return pais;
		return l;
	}
	$("#comprobar").click(function() {
		if ($('#nombre').val()==valuarPais().name) {
			$("#mensaje").html('Exelente es '+ $('#nombre').val());
			puntos= puntos + 5;
			$("#puntaje").html(puntos);
			clean();
			valuarPais();
			paisperu = sede(peru);
			paismexico = sede(mexico);
			$("#fondo").html("<img class= 'img-responsive' src='fotos/"+ l+"/"+valuarPais().image + "'/>");
		}else if($("#nombre").val() != "") {
			errores++;
			$("#mensaje").text('Prueba otra vez.');
			$("#errores").text('Tienes ' + (5 - errores) + ' vidas');
			puntos= puntos - 1;
			$("#puntaje").html(puntos);
			clean();
			valuarPais();
			$("#fondo").html("<img class= 'img-responsive' src='fotos/"+ l+"/"+valuarPais().image + "'/>");
			if (errores===5) {
				alert("perdiste, sigue intetando");
				puntos = 0;
				paisperu = sede(peru);
				paismexico = sede(mexico);
				$("#mensaje").text("");
				$("#errores").html("");
				$("#fondo").html("<img class= 'img-responsive' src='fotos/"+ l+"/"+valuarPais().image + "'/>");
				errores= 0;
				$("#puntaje").html("0");
			}
		}
		// if(($('#nombre').val()==paisperu.name)||($('#nombre').val()==paismexico.name)){

		// 	clean();
		// 	paisperu = sede(peru);
		// 	paismexico = sede(mexico);
		// 	$("#fondo").html("<img class= 'img-responsive' src='fotos/peru/"+ paisperu.image + "'/>");
		// 	cont++;
		// }
		
	});
});
function sede(pais) {
	var images = pais.length-1;
	randon = Math.floor(Math.random()*(images-1)) + 1;
	var coder = pais[randon];  
	return coder;
}

function clean(){
   var borrar = document.getElementById("nombre");
   borrar.value="";
   borrar.focus();
}