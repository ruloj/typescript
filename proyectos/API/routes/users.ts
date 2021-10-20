import express from "express";
const productsRouter = express.Router();

productsRouter.get("/", ( req, res ) => {
    res.json({ name: "Rulo", edad: 24, genero: "Masculino" });
});

productsRouter.post("/", ( req, res ) => {
    res.json({ name: "Pepe", edad: 24, genero: "Masculino" });
});

productsRouter.put("/", ( req, res ) => {
    res.json({ name: "Ana", edad: 24, genero: "Femenino" });
});

productsRouter.delete("/", ( req, res ) => {
    res.json({ name: "Raul", edad: 24, genero: "Masculino" });
});


export = productsRouter;