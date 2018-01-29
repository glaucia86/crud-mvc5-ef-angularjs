/**
 * Arquivo: Service.js
 * Data: 10/12/2017
 * Descrição: arquivo responsável por carregar os dados via $http.get - do MVC Controller
 * (onde transformará os dados em Json)
 * Author: Glaucia Lemos
 */

funcionarioApp.service('funcionarioService', function ($http) {

    //Método responsável por Listar todos os Funcionários: READ
    this.getTodosFuncionarios = function () {

        return $http.get("/Funcionario/GetFuncionario");
    }

    //Método responsável por Adicionar Funcionário: CREATE
    this.adicionarFuncionario = function (funcionario) {

        var request = $http({
            method: 'post',
            url: '/Funcionario/AdicionarFuncionario',
            data: funcionario
        });

        return request;
    }

    //Método responsável por Atualizar Funcionário Por Id: Update
    this.atualizarFuncionario = function (funcionario) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Funcionario/AtualizarFuncionario',
            data: funcionario
        });
        return requestAtualizado;
    }

    //Método responsável por Excluir Funcionário Por Id: Delete
    this.excluirFuncionario = function (AtualizadoFuncionarioId) {

        return $http.post('/Funcionario/ExcluirFuncionario/' + AtualizadoFuncionarioId);
    }
});