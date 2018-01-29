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
    $scope.adicionarFuncionario = function () {

        var funcionario = {
            funcionarioId: $scope.funcionarioId,
            nome: $scope.nome,
            email: $scope.email,
            departamento: $scope.departamento,
            cargo: $scope.cargo
        };

        var adicionarInfos = funcionarioService.adicionarFuncionario(funcionario);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Funcionário Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Funcionário não Adicionado!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Funcionário!");
            });
    }

    //Limpar os campos após inserir os dados no db://Limpar os campos após inserir os dados no db:
    $scope.limparDados = function () {
        $scope.funcionarioId = "";
        $scope.nome = "";
        $scope.email = "";
        $scope.departamento = "";
        $scope.cargo = "";
    }

    //Método responsável por atualizar Funcionario pelo Id:
    $scope.atualizarFuncionarioPorId = function (funcionario) {

        $scope.AtualizadoFuncionarioId = funcionario.FuncionarioId;
        $scope.AtualizadoNome = funcionario.Nome;
        $scope.AtualizadoEmail = funcionario.Email;
        $scope.AtualizadoDepartamento = funcionario.Departamento;
        $scope.AtualizadoCargo = funcionario.Cargo;
    }

    //Método responsável por resgatar dados para a exclusão do Funcionário:
    $scope.excluirFuncionarioPorId = function(funcionario) {
        $scope.AtualizadoFuncionarioId = funcionario.FuncionarioId;
        $scope.AtualizadoNome = funcionario.Nome;
    }

    //Método responsável por atualizar dados do Funcionario:
    $scope.atualizarFuncionario = function () {
        var funcionario = {
            FuncionarioId: $scope.AtualizadoFuncionarioId,
            Nome: $scope.AtualizadoNome,
            Email: $scope.AtualizadoEmail,
            Departamento: $scope.AtualizadoDepartamento,
            Cargo: $scope.AtualizadoCargo
        };
        var atualizarInfos = funcionarioService.atualizarFuncionario(funcionario);
        atualizarInfos.then(function (d) {
                if (d.data.success === true) {
                    carregarFuncionarios();
                    alert("Funcionario Atualizado com Sucesso!");
                    $scope.limparDadosAtualizados();
                }
                else {
                    alert("Funcionário não Atualizado");
                }
            },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o Funcionário!");
            });
    }

    //Método responsável por Limpar os Dados depois de Atualizar Funcionário:
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoFuncionarioId = '';
        $scope.AtualizadoNome = '';
        $scope.AtualizadoEmail = '';
        $scope.AtualizadoDepartamento = '';
        $scope.AtualizadoCargo = '';
    }

    //Método responsável por excluir o Funcionario pelo Id:
    $scope.excluirFuncionario = function (AtualizadoFuncionarioId) {

        var excluirInfos = funcionarioService.excluirFuncionario($scope.AtualizadoFuncionarioId);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                carregarFuncionarios();

                alert("Funcionário excluído com Sucesso!");
            }
            else {
                alert("Funcionário não excluído!");
            }
        });
    }
});