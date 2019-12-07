import { Document } from "mongoose";

export interface IPerson extends Document {
  firstname: string;
  lastname: string;
}
