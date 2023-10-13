import { CreateMenu, deleteMenu, getMenu, getSinglemenu, updateMenu } from "../Controller/Menu-Controller";
import { Router } from "express";

const menuRouter = Router()

menuRouter.post("/",CreateMenu)
menuRouter.get("/",getMenu)
menuRouter.get("/single/:id",getSinglemenu)
menuRouter.delete("/:id",deleteMenu)
menuRouter.put("/:id",updateMenu)

export default menuRouter;