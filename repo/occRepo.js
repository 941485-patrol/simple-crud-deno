import client from "../db/database.js";

class OccupationRepository
{
    findAll = ()=>
    {
        var query = "SELECT * FROM occupations ORDER BY id";
        var result = client.query(query);
        return result;
    }

    findById = (id)=>
    {
        var query = "SELECT * FROM occupations WHERE id=$1";
        var result = client.query(query,id);
        return result;
    }

    create = (occ)=>
    {
        var query = "INSERT INTO occupations (name, description, created_at, updated_at) ";
            query+= " VALUES ($1, $2, $3, $4) RETURNING id";
        var result = client.query(query, occ.name, occ.description, occ.created_at, occ.updated_at);
        return result;
    }

    update = (id, occ) =>
    {
        var query = "UPDATE occupations SET name=$1, description=$2, updated_at=$3 WHERE id=$4";
        var result = client.query(query, occ.name, occ.description, occ.updated_at, id);
        return result;
    }

    delete = (id)=>{
        var query = "DELETE FROM occupations WHERE id = $1";
        var result = client.query(query, id);
        return result;
    }
}

export default new OccupationRepository();