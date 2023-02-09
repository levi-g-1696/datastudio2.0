import { Outlet, Link } from "react-router-dom";
 import './formCSS/bootstrap.min.css'
  
  
const Layout = () => {
  return (
    <>
    <div className='container'>
            
            <nav style={{ backgroundColor: 'lightblue', textAlign: "center" }} >
                {/* //<a href=></> */}
                <Link style={{ fontSize: "28px" }} to="/">Home</Link>
                &nbsp; &nbsp;&nbsp; &nbsp;
                <Link style={{ fontSize: "28px" }} to="/blogs">Blogs</Link>
                &nbsp; &nbsp;&nbsp; &nbsp;
                <Link style={{ fontSize: "28px" }} to="/objects">OBJECTS</Link>

            </nav>
            <br />
            {/* 02 Expose Global State */}
          
                <Outlet />
         
        </div >
      
    </>
  )
};

export default Layout;
