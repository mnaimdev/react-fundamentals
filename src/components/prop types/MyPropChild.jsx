import PropTypes from 'prop-types';
import React from 'react';

const MyPropChild = ({user}) => {
    
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
    </div>
  )
}


export default MyPropChild;

MyPropChild.propTypes = {
    // name: PropTypes.string,
    // age: PropTypes.number
    // user: PropTypes.shape({
    //     name: PropTypes.string,
    //     age: PropTypes.number
    // }),
    user: PropTypes.object,
}


// MyPropChild.defaultProps = {
//     name: 'Anisul Islam',
//     age: 32
// }