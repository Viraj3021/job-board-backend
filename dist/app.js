"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const jobs_1 = __importDefault(require("./routes/jobs"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Swagger definition and options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Job Board API',
            version: '1.0.0',
            description: 'API for managing job postings',
        },
        components: {
            schemas: {
                Job: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'The job ID',
                        },
                        title: {
                            type: 'string',
                            description: 'The job title',
                        },
                        company: {
                            type: 'string',
                            description: 'The company offering the job',
                        },
                        location: {
                            type: 'string',
                            description: 'The job location',
                        },
                        salary: {
                            type: 'integer',
                            description: 'The salary for the job',
                        },
                        description: {
                            type: 'string',
                            description: 'The job description',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/jobs.ts'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('<h1>Hello Welcome to Job Board!</h1><p>Click here:<br><a href="/api/docs">Here</a></p>');
});
// Register job routes
app.use('/jobs', jobs_1.default);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/docs`);
});
exports.default = app;
