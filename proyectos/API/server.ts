import express from "express";
import productsRouter from "./routes/products";

const app = express();
const port: number = 5001;

app.use(express.json());
app.use("/productos",productsRouter);

app.listen(port, () => {
    console.log("Server en el puerto "+ port);
});