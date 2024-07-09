const express=require("express")
const todoController = require("../Controllers/todoController")
const authenticator = require("../autheticator")

const router=express.Router()

router.use(authenticator)

router.get("/",todoController.getTodo)
      .post("/",todoController.createTodo)

router.delete("/delete/:id",todoController.deleteTodo)

module.exports=router