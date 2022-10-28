import Header from "./components/Header/Header"
// import HeaderClass from "../components/HeaderClass";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.scss';


function App(){
  return(
    <div className="container">
        <Header/>
        <Main/>
        <Sidebar/>
        <Footer/>
    </div>
  );
}

export default App;
