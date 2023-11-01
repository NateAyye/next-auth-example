
import { Schema } from 'mongoose';

interface ICanvas {
  workspaceId: Schema.Types.ObjectId;
  content: string;
}

const canvasSchema = new Schema<ICanvas>(
  {
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: 'Workspace',
    },
    content: {
      type: String,
      default: '',
    }
  },
  {
    toJSON: {
      getters: true,
    },
  },
);


export default canvasSchema;
