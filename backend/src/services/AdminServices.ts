import { Admin, IAdmin } from "../models/AdminModel";
import ApiError from "../utils/apiError";
import { Types } from "mongoose";

// Create Admin
export const createAdmin = async (data: Partial<IAdmin>): Promise<IAdmin> => {
  try {
    const admin = new Admin(data);
    return await admin.save();
  } catch (error: any) {
    throw new ApiError(500, "Error while creating admin", [error.message]);
  }
};

// Get All Admins
export const getAllAdmins = async (): Promise<IAdmin[]> => {
  try {
    return await Admin.find();
  } catch (error: any) {
    throw new ApiError(500, "Error while getting all admins", [error.message]);
  }
};

// Get Admin By ID
export const getAdminById = async (id: string): Promise<IAdmin | null> => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid admin ID");
    }

    const admin = await Admin.findById(id);
    if (!admin) throw new ApiError(404, "Admin not found");
    return admin;
  } catch (error: any) {
    throw new ApiError(500, "Error while getting admin by ID", [error.message]);
  }
};

// Update Admin
export const updateAdmin = async (
  id: string,
  updates: Partial<IAdmin>
): Promise<IAdmin | null> => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid admin ID");
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedAdmin) throw new ApiError(404, "Admin not found");
    return updatedAdmin;
  } catch (error: any) {
    throw new ApiError(500, "Error while updating admin", [error.message]);
  }
};

// Delete Admin
export const deleteAdmin = async (id: string): Promise<IAdmin | null> => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid admin ID");
    }

    const deletedAdmin = await Admin.findByIdAndDelete(id);
    if (!deletedAdmin) throw new ApiError(404, "Admin not found");
    return deletedAdmin;
  } catch (error: any) {
    throw new ApiError(500, "Error while deleting admin", [error.message]);
  }
};
