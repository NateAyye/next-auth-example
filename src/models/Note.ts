
import { generateRandomId } from '@/lib/utils';
import mongoose, { Schema, model } from 'mongoose';

interface INotes {
  workspaceId: Schema.Types.ObjectId;
  content: string;
}

const notesSchema = new Schema<INotes>(
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


export default notesSchema;
