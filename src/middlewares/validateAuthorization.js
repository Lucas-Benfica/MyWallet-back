import { db } from "../database/databaseConnection.js";


export async function validadeAuth(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if(!token) return res.sendStatus(401);

    try{
        const session = await db.collection("session").findOne({token});

        if(!session) return res.sendStatus(401);

        //mandamos a session para ter as informações do usuário conectado.
        res.locals.session = session;

        next()

    } catch (err){
        res.status(500).send(err.message);
    }
}