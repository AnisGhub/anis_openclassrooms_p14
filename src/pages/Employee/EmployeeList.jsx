/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees);

  return (
    <div>
      <h1>List of Employees</h1>
      <ul>
        {employees?.map((employee) => (
          <li key={Math.floor(Math.random() * 100000)}>
            {employee.firstName} {employee.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
