import React from 'react';

import great from '../img/shape.svg'

const InfoAccountCreate = props => {
  console.log(props.show)
  return (
    <div className="info-account-create-hidde">
      <div className="great">
        <p><img src={great}/>Great!</p><span><a href="#">&times;</a></span>
      </div>
      <p className="text">your account has been successfully created.</p>
    </div>
  )
}

export default InfoAccountCreate;
