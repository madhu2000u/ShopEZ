$(document).ready(function(){
	$("#login_form").validate({
		rules:{
			username: {required: true,  minlength: 9, number: true},
			password: {required: true, minlength: 5}
		},
		messages:{
			username: {required: "This field is required", minlength: "Must be 9 characters long", number: "Field must be a number"},
			password: {required: "This field is required", minlength: "Must be atleast 5 characters long"}
			
		},
		submitHandler: function(form){
			form.submit();
		}
});
});
