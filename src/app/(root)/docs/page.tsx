import connectMongo from '@/lib/connectDb';
import User from '@/models/User';
import { ObjectId } from 'mongodb';
import React from 'react';

interface DocsProps {}

const Docs: React.FC<DocsProps> = async ({}) => {
  await connectMongo();
  const user = await User.find({  });
  console.log(user);
  return (
    <div className="container pt-20">
      <h1>Docs</h1>
    </div>
  );
};

export default Docs;
