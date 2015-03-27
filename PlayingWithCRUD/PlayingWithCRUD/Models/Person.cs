using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlayingWithCRUD.Models
{
    public class Person
    {
        public int PersonID { get; set; }

        public string PersonName { get; set; }

        public string PersonPhoneNo { get; set; }

        public int PersonAge { get; set; }
    }
}