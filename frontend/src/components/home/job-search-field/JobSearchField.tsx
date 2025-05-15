import React from 'react'
import "./JobSearchField.scss"

export default function JobSearchField() {

  return (
    <div className="bg-gradient1">
      <div className="w-[1280px] h-[600px] mx-auto ">
        <div>
          <p>Search for a job</p>
        </div>
        <div className="flex h-full gap-1 justify-center items-center">
          <input type="text" placeholder="Search for a job" className="input" />
          <input type="text" placeholder="Location" className="input" />
          <input type="text" placeholder="Category" className="input" />
          <input type="text" placeholder="Experience" className="input" />
          <input type="text" placeholder="Salary" className="input" />
          <input type="text" placeholder="Job Type" className="input" />
          <button className="btn-secondary px-7 py-3 text-white ">Search</button>
        </div>
      </div>
    </div>
  );
}
