import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuyNow from './pages/BuyNow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-now/:id" element={<BuyNow />} />
      </Routes>
    </Router>
  );
}

export default App;
