/*
* Function to delete a match from the table.
*/


async function deleteMatch(pool, matchId) {
    const client = await pool.connect();
    try {
        var qry = `DELETE FROM public.matches where id = ${matchId}`;
        console.log(qry)
        await client.query(qry);
    }
    catch (err) {
        throw err;
    }
}


module.exports = {
    deleteMatch
}