var dados = [];

function populaTabela() {
  if (Array.isArray(dados)) {
    $("#tblDados tbody").html("");
    dados.forEach(function (item) {
      //TEMPLATE STRING
      $("#tblDados tbody").append(`<tr>
        <td>${item.ID}</td>
        <td>${item.Nome}</td>
        <td>${item.Sobrenome}</td>
        <td>${item.DtNascimsento}</td>
        <td>${item.Formacao}</td>
      </tr>`);
    });
  }
}

$(function () {
  //EXECUTA AO CARREGAR A TEL

  dados = JSON.parse(localStorage.getItem("__dados__"));

  if (dados) {
    PopulaTabela();
  }
});
