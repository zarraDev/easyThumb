import { Request, Response, NextFunction } from "express";
import * as adminService from "../services/AdminServices";
import ApiResponse from "../utils/apiResponse";
import ApiError from "../utils/apiError";



// Create Admin
export const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admin = await adminService.createAdmin(req.body);
    const response = new ApiResponse(201, admin, "Admin created successfully");
    res.status(201).json(response);
  } catch (error) {
    next(error); 
  }
};

// Get All Admins
export const getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admins = await adminService.getAllAdmins();
    const response = new ApiResponse(200, admins, "Admins retrieved successfully");
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// Get Admin by ID
export const getAdminById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const admin = await adminService.getAdminById(id);
    if(!admin){
      throw new ApiError(400,"admin not found")
    }
    const response = new ApiResponse(200, admin, "Admin retrieved successfully");
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// Update Admin
export const updateAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updated = await adminService.updateAdmin(id, req.body);
    if(!updated){
      throw new ApiError(400,"admin to update not found")
    }
    const response = new ApiResponse(200, updated, "Admin updated successfully");
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// Delete Admin
export const deleteAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await adminService.deleteAdmin(id);
    if(!deleted){
      throw new ApiError(400,"admin to delete not found")
    }
    const response = new ApiResponse(200, deleted, "Admin deleted successfully");
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
