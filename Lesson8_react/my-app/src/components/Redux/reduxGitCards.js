import React from 'react'
import {map} from 'underscore'
import {
    Row,
    Col,
} from 'react-bootstrap'

function isAvatar(avatar) {
    const NotFound = 'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png'
    let Photo = avatar

    if (!avatar) Photo = NotFound
    
    return Photo
}

class ReduxGitCards extends React.Component {
    start = e => {
        const API = 'https://api.github.com/users'
        this.props.getCards(API)
    }

    render() {
        const { cards, isError, isFetching } = this.props
        // console.log(this.props)
        return (
            <div>
                <button onClick={this.start}>START</button>
                {isError ? <p>Ошибка загрузки</p> : <p>Было загружено {cards.length} аккаунтов</p>}
                {isFetching ? <p>Загрузка...</p> : ''}
                <ul>
                {map(cards, ({login, id, avatar_url, html_url}) => (
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
            </div>
        )
    }
}

export default ReduxGitCards