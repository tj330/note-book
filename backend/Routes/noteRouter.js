const express=require('express')
const noteController = require('../Controllers/noteController')
const authenticator = require('../autheticator')
const router=express.Router()

router.use(authenticator)
router.get("/",noteController.getNotes)
      .post("/",noteController.createNote)

router.delete("/delete/:id",noteController.deleteNote)

module.exports=router