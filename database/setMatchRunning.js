/*
* Function to delete a match from the table.
*/


async function setMatchRunning(pool, matchId) {
    const client = await pool.connect();
    try {
        var qry = `UPDATE public.matches SET state='running' where id = ${matchId}`;
        console.log(qry)
        await client.query(qry);
    }
    catch (err) {
        throw err;
    }
}


module.exports = {
    setMatchRunning
}