import { createOccupation } from "../../service/occService.js";

export default async({request, response})=>{
    var result = await request.body();
    const newJob = {
        name: result.value.name,
        description: result.value.description,
    }
    const newId = await createOccupation(newJob);
    response.body = {msg: 'Job created', newId: newId};
}