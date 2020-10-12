import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
      name="ana Owens"
      avatar="https://randomuser.me/api/portraits/women/32.jpg"
      status= {true}
      />
      <Contact
      name="ana Owens"
      avatar="https://randomuser.me/api/portraits/women/12.jpg"
      status= {false}
      />
      <Contact
      name="Daryl Rhodes"
      avatar="https://randomuser.me/api/portraits/men/46.jpg"
      status= {true}
      />
    </div>
  );
}

export default App;
