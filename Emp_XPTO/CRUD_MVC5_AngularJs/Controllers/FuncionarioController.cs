using CRUD_MVC5_AngularJs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUD_MVC5_AngularJs.Controllers
{
    public class FuncionarioController : Controller
    {
        #region Método para Listar Funcionário - READ

        // GET Funcionario/GetFuncionario
        public JsonResult GetFuncionário()
        {
            using (var db = new FuncionariosEntities())
            {
                List<Funcionario> listarFuncionarios = db.Funcionarios.ToList();

                return Json(listarFuncionarios, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Método para Adicionar Funcionário - CREATE

        //POST Funcionario/AdicionarFuncionário
        public JsonResult AdicionarFuncionário(Funcionario funcionario)
        {
            if (funcionario != null)
            {
                using (var db = new FuncionariosEntities())
                {
                    db.Funcionarios.Add(funcionario);
                    db.SaveChanges();

                    return Json(new {success = true});
                }              
            }
            return Json(new { success = false });
        }

        #endregion
    }
}