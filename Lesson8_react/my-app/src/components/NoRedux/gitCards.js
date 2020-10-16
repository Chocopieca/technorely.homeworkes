import React, {useState, useEffect} from 'react'
import {map} from 'underscore'
import {
    Row,
    Col
} from 'react-bootstrap'

function isAvatar(avatar) {
    const NotFound = 'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png'
    let Photo = avatar

    if (!avatar) Photo = NotFound
    
    return Photo
}

function GitCards() {
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
                        <Row>
                            <Col xs={2}><img alt="logo" src={isAvatar(avatar_url)} /></Col>
                            <Col xs={10}>
                                <div className="login">{login}</div>
                                <a href={html_url}>{html_url}</a>  
                            </Col>
                        </Row>
                    </li>
                )
                )}
            </ul>
        );
    }
}

export default GitCards