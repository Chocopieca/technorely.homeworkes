import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'

import getCards from '../../actions/CardsActions'
import ReduxGitCards from './reduxGitCards'

class Redux extends React.Component {
    render() {
        const { cards, getCardsAction } = this.props
        return (
            <div className="wrapper">
                <Container>
                    <ReduxGitCards 
                        cards={cards.cards}
                        isError={cards.isError}
                        isFetching={cards.isFetching}
                        getCards={getCardsAction}
                    />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = store => {
    // console.log(store)
    return {cards: store.cards}
}

const mapDispatchToProps = dispatch => {
    return {
        getCardsAction: (API) => dispatch(getCards(API)),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (Redux)