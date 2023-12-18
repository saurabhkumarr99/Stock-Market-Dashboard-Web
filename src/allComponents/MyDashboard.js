import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'antd'; // Import Table and Button components from Ant Design
import { removeFromFavorites } from '../reduxComponents/favoritesActions'; // Import the action creator

const MyDashboard = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites) || [];
    const stockData = useSelector((state) => state.stockData) || [];

    const columns = [
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'Stock Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
        },
        {
            title: 'Current Price',
            dataIndex: 'delayedPrice',
            key: 'delayedPrice',
        },
        {
            title: 'Highest Price',
            dataIndex: 'high',
            key: 'high',
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
        },
        {
            title: 'Actions',
            dataIndex: 'symbol',
            key: 'actions',
            render: (symbol) => (
                <Button onClick={() => handleRemoveFromFavorites(symbol)}>
                    Remove from Favorites
                </Button>
            ),
        },
    ];

    const handleRemoveFromFavorites = (symbol) => {
        dispatch(removeFromFavorites(symbol));
    };

    const favoriteStocks = stockData.filter(stock => favorites.includes(stock.symbol));

    return (
        <div>
            <h2>My Dashboard</h2>
            <Table dataSource={favoriteStocks} columns={columns} />
        </div>
    );
};

export default MyDashboard;

