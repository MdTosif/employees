## models

- **db.js** contain class which is used to save or update employees.txt.
- **DBInstance.js** is a singleton class which make sure that there s always one instance of the db class
- **employee.js** is a class which is responsible for employees data(save, show)

## index.js (entrypoint of server)

### **index.js** is self explanatory

- it has three endpoints
  - _GET /employees_ to get all employees
  - _GET /employees/:id_ to get one employee by their id
  - _POST /employees_ to add employee in db
    request body example :
    {
    "id":2,
    "name":"tosif",
    "phoneNumber":"xxx099099",
    "email":"mdtosif0mt@gmail.com"
    }

## improvement

- the data of db is always in memory so it can be hard when db gets too large
- the requirment was “ID”, “Name”, “Email”, “Phone Number” but I changed them to "id", "name", "phoneNumber", "email". It can be changed in the res.json but it make the code more complicate to handle in future
