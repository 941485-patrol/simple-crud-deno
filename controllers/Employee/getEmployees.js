import {getEmployees} from "../../service/empService.js"

export default async ({ response }) => {
  response.body = await getEmployees();
};