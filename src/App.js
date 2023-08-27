import './App.css';
import { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const [buttontext, newbutton] = useState("Enable Dark Mode");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };
  const [style, setmystyle] = useState(null);
  const mycolor = (backgroundColor, color) => {
    setmystyle({
      backgroundColor: backgroundColor,
      color: color
    })
  }
  var click = 0;
  const darkMode = () => {
    if (click % 2 === 0) {
      mycolor("Black", "White");
      newbutton("Enable Light Mode");
      showAlert("Dark Mode enabled Successfully", "success");
      click = click + 1;
    } else {
      mycolor("White", "Black");
      newbutton("Enable Dark Mode");
      showAlert("Light Mode enabled successfully", "success");
      click = click + 1;
    }
  }
  return (
    <>
      <Router>

        <div className="parent" style={style} >
          <div className="mycontainer">
            <button onClick={darkMode} className='darkbutton'>{buttontext}</button>
            <NavigationBar home="Home" file="File" contact="Contact" about="About" profile="Profile" placeholder="Search Here" />
          </div>
          <div className="alert">
            <Alert alert={alert} />
          </div>
          <br />
          <div className="routed">
            <Routes>
              <Route path="/" element={<TextArea low="LowerCase" up="UpperCase" showAlert={showAlert}></TextArea>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
export default App;
