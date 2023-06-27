import { Router } from "express";
import read from '../controllers/authors/read.js'

const author_router = Router()

//author_router.post()
author_router.get('/',read)
//author_router.put()
//author_router.delete()

export default author_router