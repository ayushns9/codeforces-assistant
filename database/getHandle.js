/*
* Function to get the chat_id from handle.
*/


async function getHandle(pool, chat_id) {
    const client = await pool.connect();
    try {
        var qry = `SELECT handle from public.users WHERE chat_id = '${chat_id}'`;
        const result = await client.query(qry);
        return result.rows[0].handle
    }
    catch (err) {
        throw err;
    }
}


module.exports = {
    getHandle
}