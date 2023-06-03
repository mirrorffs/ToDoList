const ToDoList = require('../models/todo')

module.exports.home=function(req,res) {
    ToDoList.find({}).then(list => {
       return res.render('home',{
        title: 'ToDo App',
        todoList: list
    })
    }).catch(error=>{
        console.log(error)
    })
}

module.exports.createToDo=function(req,res){
    ToDoList.create(req.body).then(todo => {
        console.log('ToDoCreated',todo)
        return res.redirect('/')
    }).catch(error=>{
        console.log('error in createToDo',error)
    })
}

module.exports.deleteToDo=function(req,res){
    ids=req.query.id
    id_list=ids.split(',');
    for(let i=0;i<id_list.length;i++){
        ToDoList.findByIdAndDelete(id_list[i]).then(()=>{
            return res.redirect('/');
        }).catch(error=>{
            console.log('error in deleteToDo',error)
        })
    }
}

