import { Schema, model, Document } from "mongoose";

export interface IAdmin extends Document {
  firstName: string;
  lastName: string;
  matricule: string;
  profileImage: string;
  lastSeen: Date;
}

const adminSchema = new Schema<IAdmin>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    matricule: { type: String, required: true, unique: true },
    profileImage: { type: String, default: "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg" },
    lastSeen: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export const Admin = model<IAdmin>("Admin", adminSchema);
