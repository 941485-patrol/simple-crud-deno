import empRepo from "../repo/empRepo.js";

export const getEmployees = async ()=> 
{
    const employees = await empRepo.findAll();
    var employeesList = [];
    employees.rows.map(employee => {
        var employeeObj = {};
        employees.rowDescription.columns.map((data, index) => {         
            employeeObj[data.name]=employee[index];           
        });
        employeesList.push(employeeObj);
    });
    return employeesList;
}

export const getEmployee = async (id) => 
{
    const employee = await empRepo.findById(id);
    var employeeObj = {};
    employee.rows.map(emp => {
        employee.rowDescription.columns.map((data, index) => {          
            employeeObj[data.name]=emp[index];           
        });
    });
    return employeeObj;
}

export const createEmployee = async (employee)=>
{
    var returnId = ''
    const newEmployee = {
        name:String(employee.name),
        email:String(employee.email),
        contact:String(employee.contact),
        created_at:new Date(),
        updated_at:new Date(),
        occupations_id:1,
    }
    const created = await empRepo.create(newEmployee);
    created.rows.map(row=>{
        row.map(r=>{returnId = r})
    })

    return returnId;
}

export const updateEmployee = async (id, employee)=>{
    const updatedEmployee = {
        name:String(employee.name),
        email:String(employee.email),
        contact:String(employee.contact),
        updated_at:new Date(),
        occupations_id:1,
    }
    const updateId = parseInt(id);
    await empRepo.update(updateId, updatedEmployee);
}

export const deleteEmployee = async (id)=>
{
    await empRepo.delete(id);
}