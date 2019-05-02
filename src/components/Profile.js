import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER } from '../dal/gql-queries';
import PropTypes from 'prop-types';


function Profile({ location, history }) {
  const user = location.state || location.pathname.slice(1);

  const goGit = () => {
    window.open(`https://github.com/${user}`);
  };

  const goBack = () => {
    history.push('/')
  };

  return (
    <Query query={GET_USER} variables={{ user }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error: {error}</div>
        return (
          <div className='flex justify-center mr-auto-l ml-auto-l mw7 mt4 items-center br4 pa4'>
            <main className='flex flex-column br2 relative shadow-2'>
              <div className='profile-close shadow-2' onClick={goBack} />
              <div className='profile-image w-100 h4' style={{ backgroundImage: `url(${data.user.avatarUrl})` }} />
              <h2 className='profile-name tc'>{data.user.name}</h2>
              <span className='mv1 mh2'>{data.user.bio}</span>
              <span className='mv1 mh2'>{data.user.company}</span>
              <span className='mv1 mh2'>{data.user.location}</span>
              <div className='flex justify-around flex-wrap mv3'>
                <div className='profile-counters flex flex-column items-center flex-grow-1 br b--light-silver pa2'>
                  <b className='db'>{data.user.repositories.totalCount}</b>
                  REPOS
                </div>
                <br />
                <div className='profile-counters flex flex-column items-center flex-grow-1 br b--light-silver pa2'>
                  <b className='db'>{data.user.gists.totalCount}</b>
                  GISTS
                </div>
                <br />
                <div className='profile-counters flex flex-column items-center flex-grow-1 pa2'>
                  <b>{data.user.followers.totalCount}</b>
                  FOLLOWERS
                </div>
              </div>
              <div onClick={goGit} className='profile-gogit'>
                Go to Git
                <img src='/assets/github.png' alt='Github logo' />
              </div>
            </main>
          </div>
        )
      }}
    </Query>
  )
}

Profile.propTypes = {

};

export default Profile;

