import mongoose, { Schema, model } from 'mongoose';

interface IUser {
  username: string;
  first_name?: string;
  last_name?: string;
  password: string;
  name?: string;
  image?: string;
  emailVerified?: Date;
  email: string;
  amount_logged_in?: number;
  role?: 'user' | 'admin';
}

const userSchema = new Schema<IUser>(
  {
    username: String,
    name: { type: String, default: '' },
    emailVerified: Schema.Types.Date,
    image: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: String,
    last_name: String,
    amount_logged_in: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
);

const User = mongoose.models?.User || model<IUser>('User', userSchema);

export default User;
