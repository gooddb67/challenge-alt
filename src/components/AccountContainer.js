import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    allTransactions: [],
  }

  componentDidMount = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(json => this.setState({allTransactions: json}))
  }

  //was unfortunately not able to get backspace working on filter.
  searchTransactions = (term) => {
    let filteredTransactions = this.state.allTransactions.filter((transaction) => transaction.description.includes(term))

    this.setState({allTransactions: filteredTransactions})
  }


  render() {

    return (
      <div>
        <Search onInput={this.searchTransactions} />
        <TransactionsList transactions={this.state.allTransactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
