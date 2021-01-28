import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import Navbar from './components/Pages/Navbar';
import HomePage from './components/Pages/HomePage';
import Profile from './components/Pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
        {/* <HomeBanner />
        <Contact />
        <ProjectsDemo />
        <FAQ />
        <EcommerceAppPricing />
        <Testimonials />

        <OurMission />
        <Register />
        <Login />
        <Profile />
        <OurClients />
        <EcommerceProject /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
