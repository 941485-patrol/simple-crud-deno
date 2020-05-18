import { updateOccupation } from "../../service/occService.js";

export default async({params, request, response})=>{
    var result = await request.body();
    const updateJobId = params.id;
    const updateJob = {
        name: result.value.name,
        description: result.value.description,
    }
    await updateOccupation(updateJobId, updateJob);
    response.body = {msg: 'Job updated'};
}