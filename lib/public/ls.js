"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const os = require("os");
const path = require("path");
function ls(dir, filter) {
    let fileList = [];
    if (!dir)
        return fileList;
    if (dir[0] === '~') {
        dir = path.join(os.homedir(), dir.slice(1));
    }
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((file) => {
            if (fs.lstatSync(path.join(dir, file)).isDirectory()) {
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
    }
    return fileList;
}
exports.ls = ls;
//# sourceMappingURL=ls.js.map