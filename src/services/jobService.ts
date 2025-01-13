import pool from '../config/db';
import { Job } from '../models/job';
import { OkPacket, RowDataPacket } from 'mysql2'; // Import RowDataPacket

// Get all job postings
export const getAllJobs = async (): Promise<Job[]> => {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM jobs');
    return rows as Job[]; // Explicitly type the rows as Job[]
};

// Get a single job by its ID
export const getJobById = async (id: number): Promise<Job | null> => {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM jobs WHERE id = ?', [id]);
    return rows.length > 0 ? (rows[0] as Job) : null; // Corrected this to handle RowDataPacket
};

// Create a new job posting
export const createJob = async (job: Job): Promise<Job> => {
    const [result] = await pool.query<OkPacket>('INSERT INTO jobs SET ?', job);
    job.id = result.insertId; // Access insertId from OkPacket
    return job;
};

// Update an existing job posting by ID
export const updateJob = async (id: number, job: Job): Promise<Job | null> => {
    const [result] = await pool.query<OkPacket>('UPDATE jobs SET ? WHERE id = ?', [job, id]);
    if (result.affectedRows === 0) {
        return null; // If no rows were affected, return null
    }
    return getJobById(id); // Fetch and return the updated job
};

// Delete a job posting by ID
export const deleteJob = async (id: number): Promise<void> => {
    const [result] = await pool.query<OkPacket>('DELETE FROM jobs WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        throw new Error(`Job with ID ${id} not found.`);
    }
};
