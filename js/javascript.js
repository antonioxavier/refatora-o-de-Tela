


$('#ww').click(function() {
    $('#background').css({
        'background-image': 'url(images/weworldphoto.png)'
    });
});

$('#parceiro').click(function() {
    $('#background').css({
        'background-image': 'url(images/parceirophoto.png)'
    });
});


/* var current_id = 0;
    $('#addrisk').click(function(){
        nextElement($('#riskclone'));
    })
    
    function nextElement(element){
        var newElement = element.clone();
        var id = current_id+1;
        current_id = id;
        if(id <10)id = "0"+id;
        newElement.attr("id",element.attr("id").split("_")[0]+"_"+id);
        var field = $('input', newElement).attr("id");
        $('input', newElement).attr("id", field.split("_")[0]+"_"+id );
        newElement.appendTo($("#risks"));
  }*/

$("#addrisk").click(function () {
  $("#risks").append('<li><div class="collapsible-header"><i class="material-icons">priority_high</i>Risco</div><div class="collapsible-body"><div class="row"><div class="input-field col s6"><input id="risk3" type="text" class="validate"><label for="risk3">Risco: </label></div><div class="input-field col s6">                    <textarea id="gere3" type="text" class="validate materialize-textarea"></textarea>                    <label for="gere3">Gerenciamento: </label>                  </div>                  <div class="input-field col s12">                    <textarea id="plan3" type="text" class="validate materialize-textarea"></textarea>                    <label for="plan3">Plano de mitigação: </label>                  </div>                </div>              </div>            </li>');
});



$("#indicadores1").click(function () {
  $("#atividades1").append('<li><div class="collapsible-header cor"><i class="material-icons">flag</i>Atividade</div> <div class="collapsible-body">           <div class="input-field"> <textarea class="materialize-textarea" id="desatvidade" type="text" class="validate"></textarea> <label for="desatvidade">Descrição da atividade</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="fontev" type="text" class="validate"></textarea><label for="fontev">Fontes de verificação</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="cond" type="text" class="validate"></textarea>  <label for="cond">Condições prévias</label> </div>   </div>  </li>');
});
$("#indicadores2").click(function () {
  $("#atividades1").append('<li><div class="collapsible-header cor"><i class="material-icons">flag</i>Atividade</div> <div class="collapsible-body">           <div class="input-field"> <textarea class="materialize-textarea" id="desatvidade" type="text" class="validate"></textarea> <label for="desatvidade">Descrição da atividade</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="fontev" type="text" class="validate"></textarea><label for="fontev">Fontes de verificação</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="cond" type="text" class="validate"></textarea>  <label for="cond">Condições prévias</label> </div>   </div>  </li>');
});

$("#addatividade").click(function () {
  $("#atividades").append('<li><div class="collapsible-header cor"><i class="material-icons">flag</i>Atividade</div> <div class="collapsible-body">           <div class="input-field"> <textarea class="materialize-textarea" type="text" class="validate"></textarea> <label>Descrição da atividade</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="#" type="text" class="validate"></textarea><label for="#">Fontes de verificação</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="#" type="text" class="validate"></textarea>  <label for="#">Condições prévias</label> </div>   </div>  </li>');
});

$("#addatividade1").click(function () {
  $("#atividades1").append('<li><div class="collapsible-header cor"><i class="material-icons">flag</i>Atividade</div> <div class="collapsible-body">           <div class="input-field"> <textarea class="materialize-textarea" id="desatvidade" type="text" class="validate"></textarea> <label for="desatvidade">Descrição da atividade</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="fontev" type="text" class="validate"></textarea><label for="fontev">Fontes de verificação</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="cond" type="text" class="validate"></textarea>  <label for="cond">Condições prévias</label> </div>   </div>  </li>');
});



$("#addatividade2").click(function () {
  $("#atividades2").append('<li><div class="collapsible-header cor"><i class="material-icons">flag</i>Atividade</div> <div class="collapsible-body">           <div class="input-field"> <textarea class="materialize-textarea" id="desatvidade" type="text" class="validate"></textarea> <label for="desatvidade">Descrição da atividade</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="fontev" type="text" class="validate"></textarea><label for="fontev">Fontes de verificação</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="cond" type="text" class="validate"></textarea>  <label for="cond">Condições prévias</label> </div>   </div>  </li>');
});

$("#addresultado").click(function () {
	$("#resultados").append('<li> <div class="card cor " style="margin-bottom: 0; "> <div class="card-content cor"> <span class="card-title cor">Resultados Esperados</span> <div class="input-field"> <textarea id="2" type="text" class="validate materialize-textarea"></textarea> <label for="2">Resultados esperados</label> </div> </div> <ul class="collapsible z-depth-0 acoordion" id="atividades1" style="margin: 0;"> <li> <div class="collapsible-header cor"><i class="material-icons">flag</i>Atividade</div> <div class="collapsible-body"> <div class="input-field"> <textarea class="materialize-textarea" id="desatvidade" type="text" class="validate"></textarea> <label for="desatvidade">Descrição da atividade</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="fontev" type="text" class="validate"></textarea> <label for="fontev">Fontes de verificação</label> </div> <div class="input-field"> <textarea class="materialize-textarea" id="cond" type="text" class="validate"></textarea> <label for="cond">Condições prévias</label> </div> </div> </li> </ul> <div class="row" style="margin-right: 15px;"> <a style="margin-bottom: 15px; margin-top: 15px; margin-right: 30px;" id="addatividade1" class="btn-floating btn-small waves-effect waves-light cor right"><i class="material-icons">add</i></a> </div> </div> </li>');
});


$("#addfun").click(function () {
  $("#func").append('<li>              <div class="collapsible-header"><i class="material-icons">person</i>Função </div>              <div class="collapsible-body">                <div class="row">                  <div class="input-field col s6">                    <input id="q1" type="text" class="validate">                    <label for="q1">Função: </label>                  </div>                  <div class="input-field col s6">                    <textarea id="q2" type="text" class="validate materialize-textarea"></textarea>                    <label for="q2">Objetivo da função: </label>                  </div>                  <div class="input-field col s6">                    <textarea id="q3" type="text" class="validate materialize-textarea"></textarea>                    <label for="q3">Papéis: </label>                  </div>                  <div class="input-field col s6">                    <textarea id="q4" type="text" class="validate materialize-textarea"></textarea>                    <label for="q4">Responsabilidades: </label>                  </div>                  <div class="input-field col s6">                    <textarea id="q5" type="text" class="validate materialize-textarea"></textarea>                    <label for="q5">Qualificação e experiência: </label>                  </div>                  <div class="input-field col s6">                    <textarea id="q6" type="text" class="validate materialize-textarea"></textarea>                    <label for="q6">Competências pessoais: </label>                  </div>                </div>                </div>            </li>')
});


 

  $('#dropdown-trigger').dropdown({
    coverTrigger: false,
    constrainWidth: false

});