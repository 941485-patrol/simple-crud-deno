import empRepo from "../repo/empRepo.js";

export const getEmployees = async ()=> 
{
    const employees = await empRepo.findAll();
    var employeesList = [];
    employees.rows.map(employee => {
        var employeeObj = {};
        var occObj={};
        employees.rowDescription.columns.map((data, index) => {   
            if(data.name == 'occupations_id'){ occObj[data.name]=employee[index];}
            else if(data.name == 'job_name'){ occObj[data.name]=employee[index];}
            else if (data.name == 'description'){ occObj[data.name]=employee[index];}
            else {employeeObj[data.name]=employee[index];}
        });
        employeeObj['job_details']=occObj;
        employeesList.push(employeeObj);
        
    });
    return employeesList;
}

export const getEmployee = async (id) => 
{
    const employee = await empRepo.findById(id);
    var employeeObj = {};
    var occObj = {};
    employee.rows.map(emp => {
        employee.rowDescription.columns.map((data, index) => {
            if(data.name == 'occupations_id'){ occObj[data.name]=emp[index];}
            else if(data.name == 'job_name'){ occObj[data.name]=emp[index];}
            else if (data.name == 'description'){ occObj[data.name]=emp[index];}
            else {employeeObj[data.name]=emp[index];}                 
        });
    });
    employeeObj['job_details']=occObj;
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
        occupations_id:parseInt(employee.occupations_id),
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
        occupations_id:parseInt(employee.occupations_id),
    }
    const updateId = parseInt(id);
    await empRepo.update(updateId, updatedEmployee);
}

export const deleteEmployee = async (id)=>
{
    await empRepo.delete(id);
}