import express from 'express';
import bodyParser from 'body-parser';
import jobRoutes from './routes/jobs';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
app.use(bodyParser.json());

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

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('<h1>Hello Welcome to Job Board!</h1><p>Click here:<br><a href="/api/docs">Here</a></p>');
});

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Register job routes
app.use('/jobs', jobRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/docs`);
});

export default app;
