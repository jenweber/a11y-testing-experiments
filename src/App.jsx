import React from 'react';
import './App.css';

const App = () => {
  let [isSignedIn, setIsSignedIn] = React.useState(false)
  return (
    <div className="App">
      {!isSignedIn &&
        <button onClick={() => setIsSignedIn(true)}>
          SIGN IN
        </button>
      }

      {isSignedIn &&
        <button onClick={() => setIsSignedIn(false)}>
          LOG OUT
        </button>
      }
      <div>
        <label>
          First name
          <input type="text" placeholder="First name" />
        </label>
        <label>
          Last name
          <input type="text" placeholder="Last name" />
        </label>
      </div>
    </div>
  );
};

export default App;