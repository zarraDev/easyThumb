import express, { Request, Response, NextFunction } from 'express';
import { connectDB } from './config/db';
import loggerApp from './utils/logger';
import ApiError from './utils/apiError';
import ApiResponse from './utils/apiResponse';
import { errorHandler } from "./middlewares/errorHandler";
import { PORT, NODE_ENV } from './utils/env';
import cors from 'cors';
import dotenv from 'dotenv';
// Config
dotenv.config();

//Create the server
const app = express();

// CORS
app.use(cors({
  origin: 'http://localhost:3500',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // méthodes HTTP autorisées
  credentials: true, // si tu utilises les cookies ou authentification

}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes importées


// Health Check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json(new ApiResponse(200, undefined, "Server is healthy"));
});

// 404 - Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(404, "Route not found"));
});

// Global Error Handler
app.use(errorHandler);

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    loggerApp.info(`Server running on port ${PORT} in ${NODE_ENV} mode`);
  });
};

startServer();
