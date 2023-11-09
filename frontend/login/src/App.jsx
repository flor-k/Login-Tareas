import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Welcome from "./components/welcome";
import styles from './App.module.scss';
import PostUnico from "./components/postUnico";

const App = ()=>{
  return (
    <BrowserRouter><div className={styles.container}>
      <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/post" element={<PostUnico/>}/>
      </Routes>
      
      </div></BrowserRouter>
  )
}

export default App;
