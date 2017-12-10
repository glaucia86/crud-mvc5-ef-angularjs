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

        public JsonResult GetFuncionário()
        {
            using (var db = new FuncionariosEntities())
            {
                List<Funcionario> listarFuncionarios = db.Funcionarios.ToList();

                return Json(listarFuncionarios, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion
    }
}