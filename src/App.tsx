import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.scss";

import Home from "./components/Home";

export default function App() {

  return (
    <Router>
      <div className="App xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-full mx-auto my-0 h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
}
