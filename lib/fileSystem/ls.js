"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function ls(dir, filter) {
    let fileList = [];
    fs.readdirSync(dir).forEach((file) => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            fileList = fileList.concat(ls(path.join(dir, file)));
        }
        else if (filter) {
            const newFile = filter(file);
            if (newFile) {
                fileList = fileList.concat(newFile);
            }
        }
        else {
            fileList = fileList.concat(path.join(dir, file));
        }
    });
    return fileList;
}
exports.ls = ls;
//# sourceMappingURL=ls.js.map