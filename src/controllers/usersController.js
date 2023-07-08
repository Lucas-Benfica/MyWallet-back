import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../database/databaseConnection.js";

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        const exist = await db.collection("users").findOne({ email });
        if (exist) return res.status(409).send("Email já cadastrado!");


        await db.collection("users").insertOne({ name, email, password: hashPassword });
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });
        if (!user) return res.status(401).send("Usuário não cadastrado");

        const passwordCorrect = bcrypt.compareSync(password, user.password);
        if (!passwordCorrect) return res.status(401).send("Senha incorreta");

        await db.collection("session").deleteMany({ idUser: user._id });

        const token = uuid();
        await db.collection("session").insertOne({ token, idUser: user._id });

        res.send(token);
    } catch (err) {
        res.status(500).send(err.message);
    }
}