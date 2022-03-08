const express = require('express');
const app = express();
const port = 1005;
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    return res.render('about');
});
app.get('/about', (req, res) => {
    return res.render('about');
});
app.get('/tuyendung', (req, res) => {
    return res.render('tuyendung');
});
app.get('/tintuc', (req, res) => {
    return res.render('tintuc');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));