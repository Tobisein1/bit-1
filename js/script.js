"use strict";
const $form = document.getElementById("form");
if ($form) {
	$form.addEventListener("submit", (event) => {
		event.preventDefault();
		const nombre = $form.nombre.value;
		const apellido = $form.apellido.value;
		const email = $form.email.value;
		const cel = $form.cel.value;
		const mensaje = $form.mensaje.value;

		const result = `Gracias por tu mensaje ${nombre} ${apellido} ! El mensaje que escribiste es "${mensaje}". Proximamente te estaremos respondiendo a tu correo ${email} o contactando a tu número ${cel}`;
		alert(result);

		$form.reset();
	});
}
