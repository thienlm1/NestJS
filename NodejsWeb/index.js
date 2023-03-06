const express = require("express");
const app = express();
app.set('view engine', 'hbs');
app.set("views", "./views");
const PORT = process.env.PORT || 2023;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
    res.render("index")
})

//UserPage
app.get('/users/:id', (req, res) =>{
    if(req.params.id == 0){
        res.render("getUsers")
    }
    else{
        res.render("updateUser", { UserId: req.params.id})
    }
})

app.get('/users', (req, res) =>{
    res.render("createUser")
})

//BlogPage
app.get('/blogs/:id', (req, res) =>{
    if(req.params.id == 0){
        res.render("getBlogs")
    }
    else{
        res.render("updateBlog", { BlogId: req.params.id})
    }
})

app.get('/blogs', (req, res) =>{
    res.render("createBlog")
})

//login

app.get('/login', (req, res) =>{
    res.render("login")
})

//403
app.get('/403', (req, res) =>{
    res.render("forbidden")
})


app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});