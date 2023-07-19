/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
