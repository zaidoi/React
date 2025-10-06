import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});


app.get('/jokes',(req,res) => {
const jokes = [
    {
        id: 1,
        title: 'A joke',
        content:'This is a joke'
    },
    {
        id: 2,
        title: 'A joke Another',
        content:'This is a joke another'
    },{
        id: 3,
        title: 'A joke 3',
        content:'This is a joke 3'
    },
]
res.send(jokes)
})




const port = process.env.PORT || 5173;

app.listen(port, () => {
  console.log(`Serve at https://localhost:${port}`);
});
