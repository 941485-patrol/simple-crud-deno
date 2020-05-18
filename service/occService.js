import occRepo from "../repo/occRepo.js";

export const getOccupations = async ()=> 
{
    const occupations = await occRepo.findAll();
    var occupationsList = [];
    occupations.rows.map(job => {
        var occObj = {};
        occupations.rowDescription.columns.map((data, index) => {         
            occObj[data.name]=job[index];           
        });
        occupationsList.push(occObj);
    });
    return occupationsList;
}

export const getOccupation = async (id) => 
{
    const occupation = await occRepo.findById(id);
    var occObj = {};
    occupation.rows.map(occ => {
        occupation.rowDescription.columns.map((data, index) => {          
            occObj[data.name]=occ[index];           
        });
    });
    return occObj;
}

export const createOccupation = async (occupation)=>
{
    var returnId = ''
    const newOccupation = {
        name:String(occupation.name),
        description:String(occupation.description),
        created_at:new Date(),
        updated_at:new Date(),
    }
    const created = await occRepo.create(newOccupation);
    created.rows.map(row=>{
        row.map(r=>{returnId = r})
    })

    return returnId;
}

export const updateOccupation = async (id, occupation)=>{
    const updatedOccupation = {
        name:String(occupation.name),
        description:String(occupation.description),
        updated_at:new Date(),
    }
    const updateId = parseInt(id);
    await occRepo.update(id, updatedOccupation);
}

export const deleteOccupation = async (id)=>
{
    await occRepo.delete(id);
}