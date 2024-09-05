import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import CreateUser from './pages/CreateUser';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/users/:id" element={<User/>} />
        <Route path="/createUser" element={<CreateUser/>} />
      </Routes>
    </Router>
  );
}

export default App;
