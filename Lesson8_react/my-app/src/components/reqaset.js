import React, {useState, useEffect} from 'react'
import {map} from 'underscore'

function Reqaset() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const API = 'https://api.github.com/users'

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => {
                setIsLoaded(true);
                console.log(res)
                setItems(res);
            },
            error => {
                setIsLoaded(true);
                setError(error);
            })
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
            <ul>
                {map(items, ({login, id, avatar_url, html_url}) => (
                    <li key={id}>
                        <img src={avatar_url} />
                        {login}
                        {html_url}
                    </li>
                )
                )}
            </ul>
        );
    }
}

export default Reqaset