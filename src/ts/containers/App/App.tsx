import React, {Fragment} from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Loading = () => <div>Loading...</div>;

const About = Loadable({
  loader: () => import('../About/About'),
  loading: Loading
});

const Home = Loadable({
  loader: () => import('../Home/Home'),
  loading: Loading
});

const Playlists = Loadable({
  loader: () => import('../Playlists/Playlists'),
  loading: Loading
});

const Podcasts = Loadable({
  loader: () => import('../Podcasts/Podcasts'),
  loading: Loading
});

const Search = Loadable({
  loader: () => import('../Search/Search'),
  loading: Loading
});

const Terms = Loadable({
  loader: () => import('../Terms/Terms'),
  loading: Loading
});

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/playlists" component={Playlists} />
        <Route path="/podcasts" component={Podcasts} />
        <Route path="/search" component={Search} />
        <Route path="/terms" component={Terms} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);



// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <NavBar />
//       </div>
//     );
//   }
// }

export default App;
