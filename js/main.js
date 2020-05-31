function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            console.log(response);
           $("#CEP").html("cep" + response.cep);
           // document.getElementById("logradouro").innerHTML = response.logradouro;
           $("#logradouro").html(response.logradouro);
           document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("cidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})