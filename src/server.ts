import "reflect-metadata";
import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running at port ${port} ...`));