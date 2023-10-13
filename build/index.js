"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectDB_1 = require("./utils/connectDB");
const menu_Routes_1 = __importDefault(require("./routes/menu-Routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "working" });
});
app.use("/menu", menu_Routes_1.default);
(0, connectDB_1.ConnectDB)();
app.listen(8080, () => {
    console.log("server running on http://localhost:8080/");
});
