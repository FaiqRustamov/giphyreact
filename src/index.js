import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

let gifs = []
axios.get('https://api.giphy.com/v1/gifs/search?api_key=O5LyiGH753b9EWs8TEN6LL0DLtx8wqNm&q=cat&limit=25&offset=0&rating=G&lang=en').then((response) => {
    gifs = response.data.data.map((value, index) => {
        return (
            <li key={index}><img src={value.images['480w_still'].url} /></li>
        )
    })
    ReactDOM.render(<ul>{gifs}</ul>, document.getElementById('root'));
})




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
