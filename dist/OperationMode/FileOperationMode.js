"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var FileOperationMode = /** @class */ (function () {
    function FileOperationMode(filePath, operationManger) {
        this.fileContents = "";
        this.filePath = filePath;
        this.operationManager = operationManger;
    }
    FileOperationMode.readFile = function (path) {
        try {
            return fs_1.readFileSync(path_1.resolve(path), {
                encoding: "utf-8"
            });
        }
        catch (error) {
            throw error;
        }
    };
    FileOperationMode.prototype.run = function () {
        var _this = this;
        this.fileContents = FileOperationMode.readFile(this.filePath);
        if (!this.fileContents) {
            console.log("File is empty!");
            this.exit(0);
        }
        var output = this.fileContents.split("\n").map(function (input) {
            return _this.operationManager.execute(input);
        });
        // Print the result
        console.log(output.join("\n"));
        this.exit(0);
    };
    FileOperationMode.prototype.exit = function (code) {
        if (code === void 0) { code = 0; }
        console.log("Exiting...");
        process.exit(code);
    };
    return FileOperationMode;
}());
exports.FileOperationMode = FileOperationMode;
