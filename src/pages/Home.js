import React from 'react';
import { Link } from '@reach/router';

const Home = () => (
  <>
    <h1>Home Page</h1>
    <ul>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </>
  );

export default Home;