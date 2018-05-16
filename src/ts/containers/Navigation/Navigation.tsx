import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';

class Navigation extends React.Component {

  public render() {
    return (
      <nav className='pv-nav'>
        <div className='pv-nav-begin'>
          <Link 
            className='pv-nav-brand'
            to="/">
            Podverse
          </Link>
        </div>
        <div className='pv-nav-end'>
          <Link 
            className='pv-nav-search'
            to="/search">
            Search
          </Link>
          <Link 
            className='pv-nav-podcasts'
            to="/podcasts">
            Podcasts
          </Link>
          <Link 
            className='pv-nav-playlists'
            to="/playlists">
            Playlists
          </Link>
          <Link 
            className='pv-nav-login'
            to="/login">
            Login
          </Link>
        </div>
      </nav>
    );
  }

}

export default Navigation;