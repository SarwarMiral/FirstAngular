using PlayingWithCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PlayingWithCRUD.Controllers
{
    public class PersonController : ApiController
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public List<Person> personList = new List<Person>() 
        {
            new Person{
            PersonID = 0, PersonAge = 20, PersonName = "Miral", PersonPhoneNo = "01679781566"    
            },
            new Person{
            PersonID = 1, PersonAge = 20, PersonName = "Najim", PersonPhoneNo = "01679781568"    
            },
            new Person{
            PersonID = 2, PersonAge = 20, PersonName = "Plabon", PersonPhoneNo = "01679781569"    
            }
        }; 

        public List<Person> Get()
        {
            log.Info("Get Persons");
            return personList;
        }

        // GET: api/Person/5
        public Person Get(int age, string name)
        {
            log.Info("Get Persons' age and name");
            for (int i = 0; i< personList.Count; i++)
                if (personList[i].PersonAge == age && personList[i].PersonName.Equals(name, StringComparison.InvariantCultureIgnoreCase))
                {
                    return personList[i];
                }
                return null;
        }

        // POST: api/Person
        public bool Post(Person person)
        {
            log.Info("Add");
            personList.Add(person);
            return true;
        }

        // PUT: api/Person/5
        public bool Put(int id, Person person)
        {
            log.Info("put");
            personList[id] = person;
            return true;
        }

        // DELETE: api/Person/5
        public void Delete(int id)
        {
            log.Info("Delete");
        }
    }
}
