import {updateEmployee} from "../service/empService.js";

export default async ({params, request, response}) => 
{
    var result = await request.body();
    const updateEmpId = params.id;
    const employee = {
        name: result.value.name,
        email: result.value.email,
        contact: result.value.contact,
        // occupations_id = result.value.occuptions_id,
    }
    await updateEmployee(updateEmpId, employee);
    response.body = {msg: "Updated"};
}