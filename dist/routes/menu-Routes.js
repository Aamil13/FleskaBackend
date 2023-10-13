"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_Controller_1 = require("../Controller/Menu-Controller");
const express_1 = require("express");
const menuRouter = (0, express_1.Router)();
menuRouter.post("/", Menu_Controller_1.CreateMenu);
menuRouter.get("/", Menu_Controller_1.getMenu);
menuRouter.get("/single/:id", Menu_Controller_1.getSinglemenu);
menuRouter.delete("/:id", Menu_Controller_1.deleteMenu);
menuRouter.put("/:id", Menu_Controller_1.updateMenu);
exports.default = menuRouter;
//# sourceMappingURL=menu-Routes.js.map