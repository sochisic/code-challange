import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER } from '../dal/gql-queries';
import PropTypes from 'prop-types';


function Item(props) {
  const { user, onClick, isActive, getItemProps } = props;

  return (
    <Query query={GET_USER} variables={{ user }}>
      {({ loading, error, data }) => {
        if (loading) return <li className='main-item'>Loading...</li>
        if (error) return <li className='main-item' >{error.message}</li>

        return (
          <li className={`main-item ${isActive ? 'selected' : ''} flex flex-row`} onClick={onClick} {...getItemProps}>
            <img height='50px' width='50px' src={data.user.avatarUrl} alt='User Avatar Logo' />
            <div className='flex flex-column justify-around ml3'>
              <span>{data.user.name}</span>
              <i>{data.user.company}</i>
            </div>
          </li>
        )
      }}
    </Query>
  )
}

Item.propTypes = {

};

export default Item;

