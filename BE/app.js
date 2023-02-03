import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getFiles, addfile } from './controller/index.js';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.post("/files", addfile);

app.get("/files", getFiles);


app.listen(8000, () => {
    console.log("Server running on port 8000")
});
