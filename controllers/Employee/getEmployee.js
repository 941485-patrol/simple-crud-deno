import {getEmployee} from "../../service/empService.js"

export default async ({ params, response }) => {
    response.body = await getEmployee(params.id);
};