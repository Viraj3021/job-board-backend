"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.createJob = exports.getJobById = exports.getAllJobs = void 0;
const db_1 = __importDefault(require("../config/db"));
// Get all job postings
const getAllJobs = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query('SELECT * FROM jobs');
    return rows; // Explicitly type the rows as Job[]
});
exports.getAllJobs = getAllJobs;
// Get a single job by its ID
const getJobById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query('SELECT * FROM jobs WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null; // Corrected this to handle RowDataPacket
});
exports.getJobById = getJobById;
// Create a new job posting
const createJob = (job) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.default.query('INSERT INTO jobs SET ?', job);
    job.id = result.insertId; // Access insertId from OkPacket
    return job;
});
exports.createJob = createJob;
// Update an existing job posting by ID
const updateJob = (id, job) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.default.query('UPDATE jobs SET ? WHERE id = ?', [job, id]);
    if (result.affectedRows === 0) {
        return null; // If no rows were affected, return null
    }
    return (0, exports.getJobById)(id); // Fetch and return the updated job
});
exports.updateJob = updateJob;
// Delete a job posting by ID
const deleteJob = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.default.query('DELETE FROM jobs WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        throw new Error(`Job with ID ${id} not found.`);
    }
});
exports.deleteJob = deleteJob;
