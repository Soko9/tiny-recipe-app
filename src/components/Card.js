import React, { useState, useEffect, useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function Card() {
    const { query, cuisine, diet, intolerance, type } = useContext(GlobalContext);

    const [results, updateResults] = useState([]);

    useEffect(() => {
        fetch(`${CONSTANTS.URL}/complexSearch?query=${query}&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerance}&type=${type}&number=15&apiKey=${CONSTANTS.API_KEY}`)
        .then(res => {
            if (res.ok)
                return res.json()
            else {
                var err = Error(`Error ${res.status}: ${res.statusText}`);
                res.error = err;
                throw err;
            }
            
        }, err => {
            var errMsg = Error(err.message);
            throw errMsg;
        })
        .then(res => res.results)
        .then(results => {updateResults(results)})
        .catch(err => console.log(err.message));
    }, [query, cuisine, diet, intolerance, type])

    return (
        <div className="cmp-cards">
            {results.map((item, index) => {
                return (
                    <div className="card" style={{
                        background: `url('${item.image}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center'
                    }} key={index}>
                        <h3>{item.title}</h3>
                        <h5>{item.id}</h5>
                    </div>
                );
            })}
        </div>
    )
}

export default Card;