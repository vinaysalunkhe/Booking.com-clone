import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import List from "./pages/list/List"
import Hotel from "./pages/hotel/Hotel";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<List/>}></Route>
        <Route path='/hotels/:id' element={<Hotel/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
