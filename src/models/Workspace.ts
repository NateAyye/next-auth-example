import { generateRandomId } from '@/lib/utils';
import mongoose, { Schema, model } from 'mongoose';
import canvasSchema from './Canvas';
import notesSchema from './Note';

interface IWorkspace {
  name: string;
  createdAt: Date;
  canvas: typeof canvasSchema;
  note: typeof notesSchema;
}

const workspaceSchema = new Schema<IWorkspace>(
  {
    name: {
      type: String,
      default: () => {
        return `Untitled File ${generateRandomId().slice(0, 5)}`;
      },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    note: notesSchema,
    canvas: canvasSchema,
  },
  {
    toJSON: {
      getters: true,
    },
  },
);

const User =
  mongoose.models?.User || model<IWorkspace>('Workspace', workspaceSchema);

export default User;
