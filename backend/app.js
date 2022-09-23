const Cities = require('./functions');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    return res.json({
        system: {
            nome: "Silvio",
            version: '0.0.1-SNAPSHOT'
        }
    });
});

app.use('/clima', Cities);

app.listen(3000, () => console.log("Listening at 3000"));