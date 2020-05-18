import {createEmployee} from "../../service/empService.js"

export default async ({ request, response }) => {
    var result = await request.body();
    const employee = {
        name: result.value.name,
        email: result.value.email,
        contact: result.value.contact,
        occupations_id : result.value.occupations_id,
    }
    const newId = await createEmployee(employee);
    response.body = {msg:"Employee created", newId: newId};
};