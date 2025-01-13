"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.createJob = exports.getJob = exports.getJobs = void 0;
const jobService = __importStar(require("../services/jobService")); // Adjust the path if necessary
const getJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobs = yield jobService.getAllJobs();
        return res.status(200).json(jobs);
    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});
exports.getJobs = getJobs;
const getJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield jobService.getJobById(Number(req.params.id));
        if (job) {
            return res.status(200).json(job);
        }
        else {
            return res.status(404).json({ error: 'Job not found' });
        }
    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to fetch job' });
    }
});
exports.getJob = getJob;
const createJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newJob = yield jobService.createJob(req.body);
        return res.status(201).json(newJob);
    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to create job' });
    }
});
exports.createJob = createJob;
const updateJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedJob = yield jobService.updateJob(Number(req.params.id), req.body);
        if (updatedJob) {
            return res.status(200).json(updatedJob);
        }
        else {
            return res.status(404).json({ error: 'Job not found' });
        }
    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to update job' });
    }
});
exports.updateJob = updateJob;
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield jobService.deleteJob(Number(req.params.id));
        return res.status(204).send(); // No content on successful deletion
    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to delete job' });
    }
});
exports.deleteJob = deleteJob;
