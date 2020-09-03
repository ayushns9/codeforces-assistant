/*
* Function to add a user to the database.
*/


async function AddUser(pool, chat_id, handle) {
    const client = await pool.connect();
    console.log(chat_id, handle)
    try {
        const result = await client.query(`SELECT * FROM users`);
        var qry = `INSERT INTO public.users(chat_id, handle) VALUES (${chat_id}, '${handle}')`;
        console.log(qry)
        await client.query(qry);
    }
    catch (err) {
        throw err;
    }
}


module.exports = {
    AddUser
}