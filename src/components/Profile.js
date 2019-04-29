import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { getUser } from '../queries';
import { useRouter } from 'wouter';


function Profile({ params }) {
  const { history } = useRouter();

  return (
    <Query query={getUser(params.user)}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error: {error}</div>


        const goBack = () => {
          history.push('/')
        }

        console.log(data)
        return (
          <div className='flex flex-column'>
            <span>Profile</span>
            <span>Name: {data.user.name}</span>
            <span>Name: {data.user.bio}</span>
            <div onClick={goBack}>Back</div>

          </div>
        )
      }}
    </Query>
  )
}

Profile.propTypes = {

}

export default Profile

