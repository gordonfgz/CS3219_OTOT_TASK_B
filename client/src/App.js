import React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Roster from './components/Roster';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);


function App() {

  return (
    <div className="App">
      <Roster></Roster>
    </div>
  );
}

export default App;
