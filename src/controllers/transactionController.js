import { db } from "../database/databaseConnection.js";
import dayjs from "dayjs";

export async function doTransaction(req, res) {
    const { type } = req.params;
    const { value, description } = req.body;
    const date = dayjs().format('YYYY-MM-DD HH:mm:ss');

    const { session } = res.locals;

    if(type != "entrada" && type != "saida"){
    return res.status(401).send("Tipo de operação inválida");
    }

    const transaction = {
        idUser: session.idUser,
        type, value, description, date
    }

    try {
        await db.collection("transactions").insertOne(transaction);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function historyTransactions(req, res) {
    const { session } = res.locals;

    try {
        const list = await db.collection("transactions").find({ idUser: session.idUser }).toArray();
        
        res.send(list);
    } catch (err) {
        res.status(500).send(err.message);
    }
}