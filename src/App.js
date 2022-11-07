import React from "react";

import { About, Footer, Header, Projects } from './container';
import { Navbar } from './components'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
