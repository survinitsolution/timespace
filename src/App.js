import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from "./views/Login";
 const login = true;
 const App= () => {
const [isLoggedIn, setUserData] = useState(false)
    useEffect(() => {
         const checkUserData=()=> {
          const item = localStorage.getItem('isLogin')
      
          if (item) {
            setUserData(item)
          }
        }
      
        window.addEventListener('storage', checkUserData)
      
        return () => {
          window.removeEventListener('storage', checkUserData)
        }
      }, [])
      const getLoginData = ()=>{
          setUserData(true)
      }
     return(
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
            {isLoggedIn ? (
                <div>
                        {routes.map((route, index) => {
                return (
                    <Route

                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={withTracker(props => {
                            return (
                                <route.layout {...props}>
                                    <route.component {...props} />
                                </route.layout>
                            );
                        })}
                    />
                );
            })}
                </div>
            ): <div>
                <Route 
                path="/"
                component={() => <Login getLoginData ={getLoginData} />}
                />
                </div>}
       
        </div>
    </Router>
     )
  
}
export default App;