// import Header from "./components/Header/Header"
// // import HeaderClass from "../components/HeaderClass";
// import Footer from "./components/Footer/Footer";
// import Main from "./components/Main/Main";
// import Sidebar from "./components/Sidebar/Sidebar";
import './App.scss';

import './StarRating/Star.css';
import StarRating from "./StarRating/StarFunc";
import StarClass from "./StarRating/StarClass";


function App(){
  return(
    <div className="container">
        {/* <Header/>
        <Main/>
        <Sidebar/>
        <Footer/> */}
      <StarClass  totalStars={5} />
      <StarRating totalStars={5} />
    </div>
  );
}

export default App;
