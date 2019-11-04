const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
    res.json([{
        firstname: "Jeanilyn",
        course: "CCT",
        Idnumber: "24"
    },
    {
        firstname: "Pearl",
        course: "Engineering",
        Idnumber: "7"
    }]);

})

app.get('/student/:idstudent', (req, res) => {
    res.send(
        "student id: " + req.params.idstudent
    );
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))