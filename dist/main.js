"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!process.env.IS_TS_NODE) {
    require('module-alias/register');
}
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map