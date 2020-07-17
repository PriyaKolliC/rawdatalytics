using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace rawdatalytics.Controllers
{
    public class IntroductionController : Controller
    {
        // GET: Introduction
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult DataScientists()
        {
            return View();
        }
        public ActionResult Difference_ML_AI()
        {
            return View();
        }
        public ActionResult Lifecycle()
        {
            return View();
        }
    }
}