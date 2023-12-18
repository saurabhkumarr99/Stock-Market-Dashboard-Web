import React from 'react';
import { useSelector } from 'react-redux';

const MyDashboard = () => {
    const favorites = useSelector((state) => state.favorites) || [];

    return (
        <div>
            <h2>My Dashboard</h2>
            <ul>
                {Array.isArray(favorites) && favorites.length > 0 ? (
                    favorites.map((symbol) => <li key={symbol}>{symbol}</li>)
                ) : (
                    <li>No favorites added yet</li>
                )}
            </ul>
        </div>
    );

    
};

export default MyDashboard;

