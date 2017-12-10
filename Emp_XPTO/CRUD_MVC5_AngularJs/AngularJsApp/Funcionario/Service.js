/**
 * Arquivo: Service.js
 * Data: 10/12/2017
 * Descrição: arquivo responsável por carregar os dados via $http.get - do MVC Controller
 * (onde transformará os dados em Json)
 * Author: Glaucia Lemos
 */

funcionarioApp.service('funcionarioService', function($http) {

    this.getTodosFuncionarios = function() {
        return $http.get("/Funcionario/GetFuncionário");
    }
})