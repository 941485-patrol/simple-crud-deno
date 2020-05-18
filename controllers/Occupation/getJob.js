import { getOccupation } from "../../service/occService.js";

export default async({params, response})=>{
    response.body = await getOccupation(params.id);
}