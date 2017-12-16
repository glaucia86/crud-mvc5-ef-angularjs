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

    //Método responsável por carregar todos as propriedades do Funcionário:
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

    //Método responsável por adicionar cada propriedade de um Novo Funcionário:
    $scope.adicionarFuncionario = function() {

        var funcionario = {
            funcionarioId: $scope.funcionarioId,
            nome: $scope.nome,
            email: $scope.email,
            departamento: $scope.departamento,
            cargo: $scope.cargo
        };

        var adicionarInfos = funcionarioService.adicionarFuncionario(funcionario);

        adicionarInfos.then(function(d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Funcionário Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Funcionário não Adicionado!"); }
        },
            function() {
                alert("Ocorreu um erro ao tentar adicionar um Novo Funcionário!");
            });
    }

    //Limpar os campos após inserir os dados no db://Limpar os campos após inserir os dados no db:
    $scope.limparDados = function() {
        $scope.funcionarioId = '';
        $scope.nome = '';
        $scope.email = '';
        $scope.departamento = '';
        $scope.cargo = '';
    }
});