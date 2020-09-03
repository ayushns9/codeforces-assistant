/*
* Function to add a match to the database.
*/


async function AddMatch(pool, user1, user2) {
    const client = await pool.connect();
    try {
        var qry = `INSERT INTO public.matches(user1, user2) VALUES (${user1}, ${user2})`;
        console.log(qry)
        await client.query(qry);
        const result = await client.query(`SELECT * FROM public.matches WHERE user1 = ${user1} AND user2 = ${user2}`)
        return result.rows[0].id;
    }
    catch (err) {
        throw err;
    }
}


module.exports = {
    AddMatch
}