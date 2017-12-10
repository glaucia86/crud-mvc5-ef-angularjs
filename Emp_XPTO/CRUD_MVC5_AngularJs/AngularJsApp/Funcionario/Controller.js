/**
 * Arquivo: Controller.js
 * Data: 10/12/2017
 * Descrição: Esse arquivo irá conter o código do 'funcionarioCtrl' a qual controlará os módulos de
 * 'funcionarios'
 * Author: Glaucia Lemos
 */

// Controller - Funcionário:
funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {

    //Aqui estamos carregando todos os dados gravados do Funcionário quando a página for recarregada:
    carregarFuncionarios();

    function carregarFuncionarios() {
        var listarFuncionarios = funcionarioService.getTodosFuncionarios();


        listarFuncionarios.then(function (d) {
            //se tudo der certo:
            $scope.Funcionarios = d.data;
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os funcionários!");
            });
    }
});