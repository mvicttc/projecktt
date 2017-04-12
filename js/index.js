$(function(){
$("#btn-submit").click(sendForm);
});

function sendForm(e){
e.preventDefault();

$.ajax({
url: "https://formspree.io/slavav9779@gmail.com", 
method: "POST",
data: {
clientName: $("#text").val(),
clientEmail:$("#email").val(),
comment:$("#message").val()
},
dataType: "json"
}).done(function(){
$("#done").html("Дякуємо, ми обов'язково розглянемо ваше повідомлення, та надамо відповідь.");
}
);

}

document.querySelector("input[type=submit]").addEventListener("click",sendForm);
function sendForm(e) {
var form = document.querySelector("form");
if(form.checkValidity()){
e.preventDefault();
alert("Write code to send form here");
}
}