import React, { useState } from 'react';

const ConditionalComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState('guest');
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div >

            <div>
                <h3>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h3>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </div>


            {isLoggedIn && (
                <div>
                    <p>Welcome back! You are now logged in.</p>
                </div>
            )}

            <div>
                <h3>User Type</h3>
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="guest">Guest</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <div style={{ marginTop: '10px' }}>
                    {userType === 'guest' && (
                        <p>You are browsing as a guest. Limited access.</p>
                    )}
                    {userType === 'user' && (
                        <p>You have standard user privileges.</p>
                    )}
                    {userType === 'admin' && (
                        <p>You have full admin access!</p>
                    )}
                </div>
            </div>

            <div>
                <button onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>

                {showDetails && (
                    <div >
                        <h4>Additional Information</h4>
                        <ul>
                            <li>Login Status: {isLoggedIn ? 'Active' : 'Inactive'}</li>
                            <li>User Type: {userType}</li>
                            <li>Access Level: {userType === 'admin' ? 'Full' : 'Limited'}</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ConditionalComponent;
