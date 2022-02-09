import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<ExercisesList />}></Route>
        <Route path='/edit/:id' element={<EditExercise/>} ></Route>
        <Route path='/create' element={<CreateExercise/>} ></Route>
        <Route path='/user' element={<CreateUser/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
