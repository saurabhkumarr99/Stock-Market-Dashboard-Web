import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import MyDashboard from './MyDashboard';

const RealTimeStockData = () => {

    const [stockData, setStockData] = useState([]);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const API_KEY = 'sk_466b1325bcd045ea83cd96c4e0cb94de';

        const symbols = [
            'AAPL', 'AMZN', 'GOOGL', 'MSFT', 'FB', 'TSLA', 'NVDA', 'JNJ', 'JPM', 'V', // Top 10
            'WMT', 'DIS', 'PFE', 'NFLX', 'KO', 'BAC', 'ADBE', 'PYPL', 'MCD', 'HD', // 11-20
            // 'IBM', 'CRM', 'ABT', 'VZ', 'GE', 'XOM', 'CSCO', 'T', 'PG', 'MA' // 21-30
        ];

        const fetchStockData = async () => {
            try {
                const requests = symbols.map(symbol =>
                    axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${API_KEY}`)
                );

                const responses = await Promise.all(requests);
                const data = responses.map(response => response.data);

                setStockData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchStockData();
    }, []);

    const handleAddToFavorites = (symbol) => {
        if (favorites.includes(symbol)) {
            setFavorites(favorites.filter((fav) => fav !== symbol));
        } else {
            setFavorites([...favorites, symbol]);
        }
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
                <Button onClick={() => handleAddToFavorites(symbol)}>
                    {favorites.includes(symbol) ? 'Remove from Favorites' : 'Add to Favorites'}
                </Button>
            ),
        },
    ];

    return (
        <div>
          <h2>Real-Time Stock Data</h2>
          <Table dataSource={stockData} columns={columns} />
          <MyDashboard favorites={favorites} /> {/* Pass favorites data to MyDashboard */}
        </div>
      );

};

export default RealTimeStockData;

