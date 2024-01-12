import React from 'react'
import {useParams} from 'react-router-dom'

const UserComponents = () => {
    const params = useParams();
    const { id } = useParams();
  return (
    <div>
        <h2> User Id:{params.id}</h2>
        <h2> user Id:{id}</h2>

    </div>
  );
};

export default UserComponents;