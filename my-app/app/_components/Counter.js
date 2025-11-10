"use client";

import { useState } from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";

function Counter({ usersCount }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-6 mb-8 bg-primary-900 p-6 rounded-lg">
      <div className="flex items-center gap-3">
        <UserGroupIcon className="h-8 w-8 text-accent-400" />
        <div>
          <p className="text-xl font-semibold">Total Users</p>
          <p className="text-3xl text-accent-500">{usersCount}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-accent-500 hover:bg-accent-600 text-primary-800 font-semibold py-3 px-6 rounded transition-all"
        >
          Counter: {count}
        </button>
      </div>
    </div>
  );
}

export default Counter;
