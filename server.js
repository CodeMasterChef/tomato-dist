"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.default.listen(app_1.default.get("port"), app_1.default.get("address"), () => {
    console.log("App is running on http://%s:%d in %s mode", app_1.default.get("address"), app_1.default.get("port"), app_1.default.get("env"));
});

exports.default = server;
//# sourceMappingURL=server.js.map