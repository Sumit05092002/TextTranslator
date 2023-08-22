import './App.css';
import { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';
function App() {
  const[alert,setAlert]=useState(null);
  const[buttontext,newbutton]=useState("Enable Dark Mode");
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };
  const [styles, setmystyle] = useState({
    backgroundColor: "White",
    color: "Black"
  })
  const darkMode = () => {
    if (styles.color === "Black") {
      setmystyle({
        backgroundColor: "Black",
        color: "White"
      })
      newbutton("Enable Light Mode");
      showAlert("Dark Mode enabled Successfully","success");
    } else {
      setmystyle({
        backgroundColor: "White",
        color: "Black"
      })
      newbutton("Enable Dark Mode");
      showAlert("Light mode enabled successfully","success");
    }
  }
  return (
    <>
      <div className="parent" style={styles} >
        <div className="mycontainer">
          <button onClick={darkMode} className='darkbutton'>{buttontext}</button>
          <NavigationBar home="Home" file="File" contact="Contact" about="About us" profile="Profile" placeholder="Search Here" />
        </div>
        <div className="alert">
          <Alert alert={alert}/>
        </div>
        <br />
        <br />
        <TextArea low="LowerCase" up="UpperCase" showAlert={showAlert}></TextArea>
      </div>
    </>
  );
}

export default App;
