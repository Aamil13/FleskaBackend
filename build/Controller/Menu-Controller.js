"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMenu = exports.deleteMenu = exports.CreateMenu = exports.getSinglemenu = exports.getMenu = void 0;
const Menu_1 = __importDefault(require("../modal/Menu"));
const getMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let menu;
    const page = Number(req.query.page) || 1;
    const limit = 10;
    const startIndex = (page - 1) * limit;
    let count = yield Menu_1.default.countDocuments();
    try {
        menu = yield Menu_1.default.find().skip(startIndex).limit(limit);
        // count = await Post.length
    }
    catch (error) {
        return console.log(error);
    }
    if (!menu) {
        return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ menu, count });
});
exports.getMenu = getMenu;
const getSinglemenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let menu;
    try {
        menu = yield Menu_1.default.findById(id);
    }
    catch (error) {
        return console.log(error);
    }
    if (!menu) {
        return res.status(404).json({ message: "No menu Found" });
    }
    return res.status(200).json({ menu });
});
exports.getSinglemenu = getSinglemenu;
const CreateMenu = (req, res) => {
    const { title, description, price, image } = req.body;
    if (!title || title.trim() === '' || !description || description.trim() === '' || !price) {
        return res.status(422).json({ message: "All Fields Required except Image" });
    }
    let menu;
    try {
        menu = new Menu_1.default({ title, description, price, image });
        menu.save();
    }
    catch (error) {
        return console.log("Unable to create menu", error);
    }
    if (!menu) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(201).json({ menu });
};
exports.CreateMenu = CreateMenu;
const deleteMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let menu;
    try {
        menu = yield Menu_1.default.findByIdAndRemove(id);
    }
    catch (error) {
        return console.log(error);
    }
    if (!menu) {
        return res.status(500).json({ message: "Failed to Delete" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
});
exports.deleteMenu = deleteMenu;
const updateMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(id);
    const { title, description, price, image } = req.body;
    if (!title || title.trim() === '' || !description || description.trim() === '' || !price) {
        return res.status(422).json({ message: "All Fields Required except Image" });
    }
    let menu;
    try {
        menu = yield Menu_1.default.findByIdAndUpdate(id, {
            title, description, price, image
        });
    }
    catch (error) {
        return console.log(error);
    }
    if (!menu) {
        return res.status(500).json({ message: "Unable to Update" });
    }
    return res.status(200).json({ message: "Updated Successfully" });
});
exports.updateMenu = updateMenu;
