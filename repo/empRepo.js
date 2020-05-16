import client from "../db/database.js";

class EmployeeRepository
{
    findAll = ()=>
    {
        var query = "SELECT * FROM employees ORDER BY id";
        var result = client.query(query);
        return result;
    }

    findById = (id)=>
    {
        var query = "SELECT * FROM employees WHERE id= $1";
        var result = client.query(query, id);
        return result;
    }

    create = (emp)=>
    {
        var query = "INSERT INTO employees (name, email, contact, created_at, updated_at, occupations_id) ";
            query+= " VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
        var result = client.query(query, emp.name, emp.email, emp.contact, emp.created_at, emp.updated_at, emp.occupations_id);
        return result;
    }

    update = (id, emp) =>
    {
        var query = "UPDATE employees SET name=$1, email=$2, contact=$3, updated_at=$4, occupations_id=$5 WHERE id=$6";
        var result = client.query(query, emp.name, emp.email, emp.contact, emp.updated_at, emp.occupations_id, id);
        return result;
    }

    delete = (id)=>{
        var query = "DELETE FROM employees WHERE id = $1";
        var result = client.query(query, id);
        return result;
    }
}

export default new EmployeeRepository();