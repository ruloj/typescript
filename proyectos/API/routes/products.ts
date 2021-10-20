import express from "express";
import Product from "../models/products"
import { readFileSync, writeFileSync } from "fs";

const productsRouter = express.Router();

productsRouter.get("/", ( _, res ) => {
    const data: Buffer = readFileSync("./file/data.json");
    const jsonData: Array<Product> = JSON.parse(data.toString());
    res.json(jsonData);
});

productsRouter.post("/", ( req, res ) => {
    let producto: Product = {
        id: "-1",
        name: "invalid",
        price: 0,
        storeID: "-1"
    };
    producto.id = req.body.id;
    producto.name = req.body.name;
    producto.price = req.body.price;
    producto.storeID = req.body.storeID;

    const data = readFileSync("./file/data.json");
    const jsonData: Array<Product> = JSON.parse(data.toString());

    jsonData.push(producto);

    writeFileSync('./file/data.json', JSON.stringify(jsonData));
    res.json(jsonData);
});

productsRouter.put("/", ( req, res ) => {
    let producto: Product = {
        id: "-1",
        name: "invalid",
        price: 0,
        storeID: "-1"
    };
    producto.id = req.body.id;
    producto.name = req.body.name;
    producto.price = req.body.price;
    producto.storeID = req.body.storeID;

    const data = readFileSync("./file/data.json");
    const jsonData: Array<Product> = JSON.parse(data.toString());

    jsonData.forEach( product => {
        if(product.id === req.body.id) {
            product.name = req.body.name;
            product.price = req.body.price;
            product.storeID = req.body.storeID;
        }
    });

    writeFileSync('./file/data.json', JSON.stringify(jsonData));
    res.json(jsonData);
});

productsRouter.delete("/", ( req, res ) => {
    const data = readFileSync("./file/data.json");
    const jsonData: Array<Product> = JSON.parse(data.toString());
    console.log("FUNCTIOND DELETE")
    let newData: Product[] = [];
    jsonData.map( (product,index) => {
        if(product.id === req.body.id) {
            console.log("IF")
            delete jsonData[index];
        }
    });
    newData = jsonData.filter( product => product.id !== req.body.id);

    writeFileSync('./file/data.json', JSON.stringify(newData));
    res.json(newData);
});


export = productsRouter;