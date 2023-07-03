import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuotes = () => this.props.quotes.map((quote) => <QuoteCard upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} key={quote.id} quote={quote} />);

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              
               {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return {
    quotes: state.quotes 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quote => dispatch({ type: "REMOVE_QUOTE", quote: quote }),
    upvoteQuote: quote => dispatch({ type: "UPVOTE_QUOTE", quote: quote }),
    downvoteQuote: quote => dispatch({ type: "DOWNVOTE_QUOTE", quote: quote }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
