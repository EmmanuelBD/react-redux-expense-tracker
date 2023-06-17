import React, { Component } from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import { addTransaction, deleteTransaction, editTransaction } from "../redux/actions";
import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";

export class Main extends Component {
  render() {
    const { transactions, addTransaction, deleteTransaction, editTransaction } = this.props;
    return (
      <div className="container">
        <div className="column">
          <AddTransactions
            addTransaction={addTransaction}
            editTransaction={editTransaction}
            id={transactions[0] ? transactions[0].id + 1 : 1}
          />
        </div>
        <div className="column">
          <div className="column-item">
            <Balance transactions={transactions} />
            <IncomeExpense transactions={transactions} />
          </div>
          <div className="column-item">
            <TransactionsList
              transactions={transactions}
              deleteTransaction={deleteTransaction}
              editTransaction={editTransaction}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  editTransaction: (transaction) => dispatch(editTransaction(transaction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);


















/*import React, { Component } from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import { addTransaction, deleteTransaction, editTransaction } from "../redux/actions";

import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";

export class Main extends Component {
  render() {
    const { transactions, addTransaction, deleteTransaction, editTransaction } = this.props;
    return (
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <TransactionsList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction} // Pass the editTransaction action
        />
        <AddTransactions
          addTransaction={addTransaction}
          editTransaction={editTransaction} // Pass the editTransaction action
          id={transactions[0] ? transactions[0].id + 1 : 1}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  editTransaction: (transaction) => dispatch(editTransaction(transaction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main); */
