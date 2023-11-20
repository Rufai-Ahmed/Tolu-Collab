import { model, Document, Schema } from "mongoose";

interface iData {
  name: string;
  image: string;
}

interface todoModell extends iData, Document {}

const todoModel = new Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model<todoModell>("kids", todoModel);
