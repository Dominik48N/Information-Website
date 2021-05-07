import express from 'express';
import helmet from "helmet";
import path from 'path';

const app = express();

app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

app.use(helmet());

app.use("/", express.static("public"));

app.listen(5000, () => {
    console.log('Server running');
});
