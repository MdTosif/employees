const express = require('express');
const Employee = require('./model/employee');
// const { getEmployee, getEmployees } = require('./model/employee');
// const employee = require('./model/employee');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/employees', async (req, res, next) => {
  try {
    res.json(await Employee.getEmployees());
  } catch (e) {
    next(e);
  }
});

app.get('/employees/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json(await Employee.getEmployee(id));
  } catch (e) {
    next(e);
  }
});
/*
example request.body
{
    "id":2,
    "name":"tosif",
    "phoneNumber":"9083611556",
    "email":"mdtosif0mt@gmail.com"
}
 */

app.post('/employees', async (req, res, next) => {
  try {
    const { body } = req;
    const employee = new Employee(body);
    const result = await employee.save();
    res.json(result);
  } catch (e) {
    next(e);
  }
});
/* eslint no-unused-vars:"off" */
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});
app.listen(3000);
