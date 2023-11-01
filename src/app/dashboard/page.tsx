import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div className="flex-1 flex flex-row">
      <aside className="w-60 border-r px-2 flex flex-col">
        <h2 className="font-bold text-2xl text-center my-4">All Notes</h2>
        <ul className="flex-1">
          <li>
            <a href="/dashboard/notes">Notes</a>
          </li>
        </ul>
        <div className="my-3">
          <Button className="w-full">+ New Note</Button>
        </div>
      </aside>

      <section className="flex-1 px-3 py-2">
        <div className="flex justify-between items-center">
          <p className="text-4xl font-bold ">All Notes</p>
          <form className="flex justify-center items-center gap-2">
            <Input type="search" />
            <Button>Search</Button>
          </form>
        </div>
        <h2>Notes</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>My Note</td>
              <td>My Note Content</td>
              <td>
                <a href="/dashboard/notes/1">View</a>
                <a href="/dashboard/notes/1/edit">Edit</a>
                <a href="/dashboard/notes/1/delete">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
