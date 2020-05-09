import React from 'react';
import Navi from "../navi/Navi"
import {Route,Switch} from "react-router-dom"
import Dashboard from './Dashboard';
import Projects from '../projects/Projects';
import Aboutme from "../staticPages/Aboutme";
import Resume from "../staticPages/Resume";
import Contact from "../staticPages/Contact";
import NotFound from '../common/NotFound';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import AdminPanel from '../../admin/AdminPanel';

function App() {
  return (
    <div>
    <Navi/>
      <Switch>
        <Route path ="/" exact component={Dashboard} />
        <Route path ="/projects" exact component={Projects} />
        <Route path ="/aboutme" exact component={Aboutme} />
        <Route path ="/resume" exact component={Resume} />
        <Route path="/adminpanel"component={AdminPanel}/>
        <Route path="/saveproduct"component={AddOrUpdateProduct}/>
        <Route path ="/contact" exact component={Contact} />
        <Route  exact component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
