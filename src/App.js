import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import Navbar from './components/Pages/Navbar';
import HomePage from './components/Pages/HomePage';
import Profile from './components/Pages/Profile';
import Portfolio from './components/Pages/Portfolio';
import ProjectRequest from './components/Pages/ProjectRequest';
import ApplyForEmployment from './components/Pages/ApplyForEmployment';

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
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/project-request' component={ProjectRequest} />
          <Route exact path='/apply-for-job' component={ApplyForEmployment} />
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
