import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setStockData } from '../reduxComponents/stockDataActions';
import { addToFavorites, removeFromFavorites } from '../reduxComponents/favoritesActions';

const RealTimeStockData = () => {
    const dispatch = useDispatch();
    const stockData = useSelector((state) => state.stockData) || [];
    const favorites = useSelector((state) => state.favorites) || [];
    const [buttonText, setButtonText] = useState({});
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

    useEffect(() => {
        const API_KEY = 'sk_466b1325bcd045ea83cd96c4e0cb94de';
        const symbols = [
            'AAPL', 'AMZN', 'GOOGL', 'MSFT', 'FB', 'TSLA', 'NVDA', 'JNJ', 'JPM', 'V',
            'WMT', 'DIS', 'PFE', 'NFLX', 'KO', 'BAC', 'ADBE', 'PYPL', 'MCD', 'HD',
        ];

        const fetchStockData = async () => {
            try {
                const requests = symbols.map(symbol =>
                    axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${API_KEY}`)
                );

                const responses = await Promise.all(requests);
                // const data = responses.map(response => response.data);
                const data = responses.map(response => ({
                    companyName: response.data.companyName,
                    symbol: response.data.symbol,
                    delayedPrice: response.data.delayedPrice,
                    high: response.data.high,
                    currency: response.data.currency,
                    // Add more fields as needed
                }));

                dispatch(setStockData(data)); // Update stockData in Redux

                setButtonText(
                    data.reduce((acc, stock) => {
                        acc[stock.symbol] = favorites.includes(stock.symbol)
                            ? 'Remove from Favorites'
                            : 'Add to Favorites';
                        return acc;
                    }, {})
                );
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchStockData();
    }, [favorites, dispatch]);

    const handleAddToFavorites = (symbol) => {
        if (favorites.includes(symbol)) {
            dispatch(removeFromFavorites(symbol));
        } else {
            dispatch(addToFavorites(symbol));
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
                    {buttonText[symbol]}
                </Button>
            ),
        },
    ];

    return (
        <div>
            <h2>Real-Time Stock Data</h2>
            <Table dataSource={stockData} columns={columns} />
        </div>
    );
};

export default RealTimeStockData;

