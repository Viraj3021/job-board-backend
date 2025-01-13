import { Request, Response } from 'express';
import * as jobService from '../services/jobService';  // Adjust the path if necessary

export const getJobs = async (req: Request, res: Response): Promise<Response> => {
    try {
        const jobs = await jobService.getAllJobs();
        return res.status(200).json(jobs);
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch jobs' });
    }
};

export const getJob = async (req: Request, res: Response): Promise<Response> => {
    try {
        const job = await jobService.getJobById(Number(req.params.id));
        if (job) {
            return res.status(200).json(job);
        } else {
            return res.status(404).json({ error: 'Job not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch job' });
    }
};

export const createJob = async (req: Request, res: Response): Promise<Response> => {
    try {
        const newJob = await jobService.createJob(req.body);
        return res.status(201).json(newJob);
    } catch (err) {
        return res.status(500).json({ error: 'Failed to create job' });
    }
};

export const updateJob = async (req: Request, res: Response): Promise<Response> => {
    try {
        const updatedJob = await jobService.updateJob(Number(req.params.id), req.body);
        if (updatedJob) {
            return res.status(200).json(updatedJob);
        } else {
            return res.status(404).json({ error: 'Job not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: 'Failed to update job' });
    }
};

export const deleteJob = async (req: Request, res: Response): Promise<Response> => {
    try {
        await jobService.deleteJob(Number(req.params.id));
        return res.status(204).send(); // No content on successful deletion
    } catch (err) {
        return res.status(500).json({ error: 'Failed to delete job' });
    }
};
