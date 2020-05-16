import {deleteEmployee} from "../service/empService.js"

export default async ({ params, response }) => {
    await deleteEmployee(params.id);
    response.body = {msg: "Employee deleted"};
};