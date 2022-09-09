"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lodash_1 = __importDefault(require("lodash"));
const simple_shared_data_1 = require("@stupidassistant/simple-shared-data");
const app = (0, express_1.default)();
const port = 3001;
app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.get("/", (_req, res) => {
    const responseData = {
        payload: lodash_1.default.snakeCase("Server data returned successfully" + simple_shared_data_1.ABC),
    };
    res.json(responseData);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
