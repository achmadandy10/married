import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Design, Feature, Home, Invitation, Login, PageNotFound, Price, Register } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/design" element={<Design />}/>
        <Route path="/feature" element={<Feature />}/>
        <Route path="/price" element={<Price />}/>

        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        
        <Route path="/invitation" element={<Invitation />}/>

        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
