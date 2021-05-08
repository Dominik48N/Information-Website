import express from 'express';

const app = express();

app.set("view engine", "html");

app.get('/', (req, res) => {
    res.render('index', {
        content: '...'
    });
});

app.use(express.static("public"));

app.listen(5000, () => {
    console.log('Server running');
});
