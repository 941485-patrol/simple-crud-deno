import { getOccupations } from "../../service/occService.js";
export default async({ response })=>{
    response.body = await getOccupations();
}