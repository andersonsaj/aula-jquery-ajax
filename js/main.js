function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            console.log(response);
            document.getElementById("Cep").innerHTML = response.cep;
           // document.getElementById("logradouro").innerHTML = response.logradouro;
           $("#logradouro").html(response.logradouro);
           document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("cidade").innerHTML = response.localidade;
            document.getElementById("estado").innerHTML = response.uf;
        }
    })
}