import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={<Home/>} />
                <Route path="/about" component={<About/>} />
                <Route path="/contact" component={<Contact/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
