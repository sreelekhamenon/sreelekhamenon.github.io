using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace StringComparerApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StringComparerController : ControllerBase
    {
         private readonly ILogger<StringComparerController> _logger;

        public StringComparerController(ILogger<StringComparerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public StringCompareResult Get()
        {

            return new StringCompareResult();
          
        }
    }
}
