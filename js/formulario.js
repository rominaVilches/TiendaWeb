

// Validar campos obligatorios con onBlur
// Campos: Rut, Nombre, Correo, Celular, Dirección y Region.
function obligatorio(campo, error){
	var campo =document.getElementById(campo);
	if(campo.value == ''){
		document.getElementById(error).innerHTML = 'Campo Obligatorio';
		campo.style.cssText = 'border: 3px solid #FF0000; border-radius: 3px;';
	} else {
		document.getElementById(error).innerHTML = '';
		campo.style.cssText = 'backgroundColor= #fff';
	}
}

// Validar datos con onSubmit
// Validar campos obligatorios nuevamente 
// Validar la seleccion de al menos 1 producto
// También validar con expresiones regulares cada campo que lo requiera

function valida(){

	var rut = document.getElementById('rut');
	var expRut = /^[0-9]{7,8}[-|‐]{1}[0-9kK]{1}$/;
	if(rut.value == '' || !rut.value.match(expRut)){
		alert('El Rut es obligatorio y debe contener solo numeros y guion antes del dígito verificador \nEj: 12133435-k');
		rut.focus();
		return false;
	}

	var nombre = document.getElementById('nombre');
	var expNombre = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/;
	if(nombre.value == '' || !expNombre.test(nombre.value)){
		alert('El Nombre es obligatorio y debe contener solo letras y espacios');
		nombre.focus();
		return false;
	}

	var correo = document.getElementById('correo');	
	var expCorreo = /^[\w\.\-\_]+[\@]{1}[A-Za-z\.]+$/;
	if(correo.value == '' || !correo.value.match(expCorreo)){
		alert('El Correo es obligatorio y debe contener solo letras, numeros o carácteres (".", "_", "-")  \nEj: ejemplo_@gmail.com');
		correo.focus();
		return false;
	}

	var celular = document.getElementById('telefono');
	var expCelular = /^[9]{1}[\d]{8}$/;
	if(celular.value == '' || !expCelular.test(celular.value)){
		alert('El Celular es obligatorio y debe contener 9 dígitos, comenzando con "9" \nEj: 9 XXXXXXXX');
		celular.focus();
		return false;
	}

	var direccion = document.getElementById('direccion');
	var expDireccion = /^[\w\s\#]+$/;
	if(direccion.value == '' || !direccion.value.match(expDireccion)){
		alert('La Direccion es obligatoria y debe contener solo letras, numeros y #');
		direccion.focus();
		return false;
	}
	

	var region = document.getElementById('region');
	if(region.selectedIndex == 0){
		alert('La Region es obligatoria');
		region.focus();
		return false;
	}

	var productos = document.getElementsByName('productos');
	var cont = 0;
	for(var i = 0; i < productos.length; i++){
		if(productos[i].checked){
			cont++;
		}
	}
	if(cont == 0){
		alert('Debe selecionar al menos 1 producto');
		return false;
	}
	

	return true;
}
