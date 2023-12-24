import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Typography } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { setStockData } from '../reduxComponents/stockDataActions';
import { addToFavorites, removeFromFavorites } from '../reduxComponents/favoritesActions';

const { Title, Text } = Typography;

const RealTimeStockData = () => {
    const dispatch = useDispatch();
    const stockData = useSelector((state) => state.stockData) || [];
    const favorites = useSelector((state) => state.favorites) || [];
    const [buttonText, setButtonText] = useState({});
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const [searchText, setSearchText] = useState('');
    const [sortOrder, setSortOrder] = useState(null);

    const handleSearch = (value) => {
        setSearchText(value);
    };

    const handleSort = (order) => {
        setSortOrder(order);
    };

    // useEffect(() => {
    //     const API_KEY = 'sk_466b1325bcd045ea83cd96c4e0cb94de';
    //     const symbols = [
    //         'AAPL', 'AMZN', 'GOOGL', 'MSFT', 'FB', 'TSLA', 'NVDA', 'JNJ', 'JPM', 'V',
    //         'WMT', 'DIS', 'PFE', 'NFLX', 'KO', 'BAC', 'ADBE', 'PYPL', 'MCD', 'HD',
    //     ];

    //     const fetchStockData = async () => {
    //         try {
    //             const requests = symbols.map(symbol =>
    //                 axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${API_KEY}`)
    //             );

    //             const responses = await Promise.all(requests);
    //             // const data = responses.map(response => response.data);
    //             const data = responses.map(response => ({
    //                 companyName: response.data.companyName,
    //                 symbol: response.data.symbol,
    //                 latestPrice: response.data.latestPrice,
    //                 high: response.data.week52High,
    //                 currency: response.data.currency,
    //                 latestTime:response.data.latestTime
    //             }));

    //             // Update stockData in Redux
    //             dispatch(setStockData(data)); 

    //             setButtonText(
    //                 data.reduce((acc, stock) => {
    //                     acc[stock.symbol] = favorites.includes(stock.symbol)
    //                         ? 'Remove from Favorites'
    //                         : 'Add to Favorites';
    //                     return acc;
    //                 }, {})
    //             );
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchStockData();
    // }, [favorites, dispatch]);


    useEffect(() => {
        const symbols = [
            'AAPL', 'AMZN', 'GOOGL', 'MSFT', 'FB', 'TSLA', 'NVDA', 'JNJ', 'JPM', 'V',
            'WMT', 'DIS', 'PFE', 'NFLX', 'KO', 'BAC', 'ADBE', 'PYPL', 'MCD', 'HD',
        ];

        const generateRandomPrice = () => {
            return (Math.random() * (1000 - 1) + 1).toFixed(2);
        };

        const generateRandomTime = () => {
            const date = new Date();
            return date.toLocaleTimeString();
        };

        const generateDummyData = () => {
            const data = symbols.map(symbol => ({
                companyName: `${symbol} Company`,
                symbol: symbol,
                latestPrice: generateRandomPrice(),
                high: generateRandomPrice(),
                currency: 'USD',
                latestTime: generateRandomTime()
            }));
            return data;
        };

        const dummyData = generateDummyData();

        dispatch(setStockData(dummyData));

        setButtonText(
            dummyData.reduce((acc, stock) => {
                acc[stock.symbol] = favorites.includes(stock.symbol)
                    ? 'Remove from Favorites'
                    : 'Add to Favorites';
                return acc;
            }, {})
        );
    }, [favorites, dispatch]);
    

    const handleAddToFavorites = (symbol) => {
        if (favorites.includes(symbol)) {
            dispatch(removeFromFavorites(symbol));
        } else {
            dispatch(addToFavorites(symbol));
        }
    };

    const sortStocks = (a, b) => {
        if (sortOrder === 'asc') {
            return a.latestPrice - b.latestPrice;
        } else if (sortOrder === 'desc') {
            return b.latestPrice - a.latestPrice;
        }
        return 0;
    };

    const filteredAndSortedStocks = stockData
        .sort(sortStocks)
        .filter(
            (stock) =>
                stock.companyName.toLowerCase().includes(searchText.toLowerCase()) ||
                stock.symbol.toLowerCase().includes(searchText.toLowerCase())
        );

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
                <Button onClick={() => handleAddToFavorites(symbol)}>
                    {buttonText[symbol]}
                </Button>
            ),
        },
    ];

    return (
        <div>
            <div style={{ backgroundColor: '#1890ff', padding: '20px 0' }}>
                <Title style={{ color: 'white', textAlign: 'center' }}> Real-Time Stock Data</Title>
            </div>

            <div>
                <input
                    placeholder="Search by company name or symbol"
                    onChange={(e) => handleSearch(e.target.value)}
                    value={searchText}
                />
                <Button onClick={() => handleSort('asc')}>Sort Low to High</Button>
                <Button onClick={() => handleSort('desc')}>Sort High to Low</Button>
            </div>
            <Table dataSource={filteredAndSortedStocks} columns={columns} />
        </div>
    );
};

export default RealTimeStockData;
