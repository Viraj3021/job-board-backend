import { Router } from 'express';
import * as jobController from '../controllers/jobController';

const router = Router();

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs
 *     responses:
 *       200:
 *         description: A list of jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 */
router.get('/', jobController.getJobs);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get a job by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single job
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       404:
 *         description: Job not found
 */
router.get('/:id', jobController.getJob);

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Job created
 *       400:
 *         description: Invalid input
 */
router.post('/', jobController.createJob);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Update a job
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       200:
 *         description: Job updated
 *       404:
 *         description: Job not found
 */
router.put('/:id', jobController.updateJob);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a job
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Job deleted
 *       404:
 *         description: Job not found
 */
router.delete('/:id', jobController.deleteJob);

export default router;
