import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const LoadingRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        console.log('loading found');
        return <div className='text-center my-48'><button className="btn loading">loading</button></div>
    }
    return children;
};

export default LoadingRoute;