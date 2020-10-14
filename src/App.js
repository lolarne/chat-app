import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
      name="ana Owens"
      avatar="https://randomuser.me/api/portraits/women/32.jpg"
      state= {true}
      />
      <Contact
      name="ana Owens"
      avatar="https://randomuser.me/api/portraits/women/12.jpg"
      state= {false}
      />
      <Contact
      name="Daryl Rhodes"
      avatar="https://randomuser.me/api/portraits/men/46.jpg"
      state= {true}
      />
    </div>
  );
}

export default App;
