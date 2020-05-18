import { deleteOccupation } from "../../service/occService.js"

export default async ({ params, response }) => {
    await deleteOccupation(params.id);
    response.body = {msg: "Job deleted"};
};