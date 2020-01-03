$(document).ready(function(){
	Swal.fire({
		imageUrl: "../img/alex.jpg",
		imageHeight: 200,
		imageAlt: "Bang Alex",
		title: "<b>WELCOME</b>",
		text: "Please input your name !",
		input: "text",
		inputAttributes:{
			placeholder: "Your Name ....",
			autocapitalize: 'on',
			required: "required"
		},
		confirmButtonText: "Next"
	}).then((result) => {
		if(result.value){
			Swal.fire({
				toast: true,
				title: saySalam(result.value),
				position: "top-end",
				icon: "success",
				showConfirmButton: false,
				timer: 5000,
				timerProgressBar: true
			})
		}
	});
});

function saySalam(nama){
	var nama = nama;
	return "Selamat Datang "+nama;
}
