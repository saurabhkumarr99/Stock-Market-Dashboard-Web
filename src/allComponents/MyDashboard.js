import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'antd'; // Import Table and Button components from Ant Design
import { removeFromFavorites } from '../reduxComponents/favoritesActions'; // Import the action creator
import { Typography } from 'antd';
import '../App.css';

const { Title, Text } = Typography;

const MyDashboard = () => {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites) || [];
    const stockData = useSelector((state) => state.stockData) || [];
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

    const getRowClassName = (record, index) => {
        return index % 2 === 0 ? 'table-row-white' : 'table-row-black';
    };

    const columns = [
        {
            title: 'Sr. No',
            dataIndex: 'symbol',
            key: 'symbol',
            render: (_, __, index) => {
                return (pagination.current - 1) * pagination.pageSize + index + 1;
            },
        },
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
            dataIndex: 'latestPrice',
            key: 'latestPrice',
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
                <Button
                    onClick={() => handleRemoveFromFavorites(symbol)}
                    style={{
                        color: 'red',
                    }}
                >
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
            <div style={{ backgroundColor: '#1890ff', padding: '20px 0' }}>
                <Title style={{ color: 'white', textAlign: 'center' }}>My Dashboard</Title>
            </div>
            <Table
                dataSource={favoriteStocks}
                columns={columns}
                rowClassName={getRowClassName}
                pagination={{
                    ...pagination,
                    onChange: (page) => setPagination({ ...pagination, current: page }),
                }} />
        </div>
    );
};

export default MyDashboard;

