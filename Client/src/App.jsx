import Aos from "aos";
import style from "./App.module.css"
import 'aos/dist/aos.css';
import React, { useEffect,lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LargeScreenNavbar = lazy(() => import('./Components/LargeScreenNavbar/LargeScreenNavbar'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Blog = lazy(() => import('./Pages/Blog/Blog'));
const About = lazy(() => import('./Pages/About/About'));
const Work = lazy(() => import('./Pages/work/Work'));
const MainBlog = lazy(() => import('./Pages/MainBlogs/MainBlog'));
const Services = lazy(() => import('./Pages/Services/Services'));
const GetInTouch= lazy(() => import('./Pages/GetInTouch/GetInTouch'));
const Policy= lazy(() => import('./Pages/Policy/Policy'));
const Terms= lazy(() => import('./Pages/Terms/Terms'));
const Client = lazy(() => import('./Sections/HomeSections/Clients/Client'));

function Loading (){
  return(
    <div className={style.LContainer}>
      <div className={style.ldsRipple}><div></div><div></div></div>
    </div>
  )
}

function App() {

  useEffect(() => {
    Aos.init({
    })
  }, []);

  return (
    <Suspense fallback={<Loading/>}>
    <Router>
      <Routes>
        <Route  element={<LargeScreenNavbar />}>
          <Route index element={< Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="blog/:category" element={<MainBlog />} />
          <Route path="/contact" element={<GetInTouch/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/policy" element={<Policy/>}/>
        </Route>
      </Routes>
    </Router>
    </Suspense>
  );
}

export default App;
