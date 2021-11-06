import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Special from './Special';
import Order from './Order';
import Footer from './Footer';
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
// ************** Use React Router in Navbar *************//
  <>
   <Navbar />

   <Switch>

   <Route exact path="/" component={Home} />
   <Route exact path="/about" component={About} />
   <Route exact path="/service" component={Service} />
   <Route exact path="/special" component={Special} />
   <Route exact path="/order" component={Order} />
   <Redirect to="/"/>

   </Switch>

   <Footer />

   </>

  )
}
// *********** export app and end ****************//
export default App;
