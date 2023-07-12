import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CreateEmployee from './Employee/CreateEmployee';
import EmployeeList from './Employee/EmployeeList';
import ErrorPage from './404/ErrorPage';

export default function Router() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/list-employee" element={<EmployeeList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
