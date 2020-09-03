/*
* Function to get the chat_id from handle.
*/


async function getChat_id(pool, handle) {
    const client = await pool.connect();
    try {
        var qry = `SELECT chat_id from public.users WHERE handle = '${handle}'`;
        const result = await client.query(qry);
        return result.rows[0].chat_id
    }
    catch (err) {
        throw err;
    }
}


module.exports = {
    getChat_id
}