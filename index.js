const express = require('express')
const app = express()
const port = 5000
const users =[
    {id:323, name:'ram', address:'ktm'},
    {id:511, name:'kaylin', address:'gorkha'},
    {id:56, name:'bishwo', address:'gorkha'},
    {id:456, name:'gopal', address:'ktm'}
]

app.get('/users', (req, res) => {
   const filteredUser =  users.filter((item,id)=>{
      if(item.name[0] === req.query.startswith  && item.name[item.name.length -1] ===req.query.endswith){
        return item
      }
    })
    res.send(filteredUser[0].name)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})