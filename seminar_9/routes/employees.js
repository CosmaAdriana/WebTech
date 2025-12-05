const { Op } = require("sequelize");
const Employee = require("../models/employee");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    const {simplified, sortBy, order} = req.query;
    try {
        
        const {minSalary, lastName} = req.query;

        const whereClause = {};

        if (minSalary) {
            whereClause.salary = { [Op.gte]: Number(minSalary) };
        }

        if (lastName && lastName.trim() !== "") {
            whereClause.lastName = { [Op.like]: `%${lastName}%` };
        }

        const employees = await Employee.findAll({ attributes: simplified ? {exclude: 'id'} : undefined,
            where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
            order: sortBy ? [[sortBy, order?.toUpperCase() || "ASC"]] : undefined
        });

        return res.status(200).json(employees);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(200).json(newEmployee);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
 
router
  .route("/employees/:id")
  .get(async (req, res) => {
    const employee = await Employee.findOne({
      where: { id: req.params.id },
    });
    if (employee) {
      return res.status(200).json(employee);
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} not found` });
    }
  })
  .put(async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        return res.status(200).json(await employee.update(req.body));
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} does not exists` });
    }
  })
  .delete(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        await employee.destroy();
        return res.status(200).json({ message: `Employee with id ${req.params.id} has been deleted ` });
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;