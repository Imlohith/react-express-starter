import React, { Component } from 'react';

class Customer extends Component {
    
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }

   componentDidMount() {
       fetch('/api/customers')
       .then(res =>  res.json())
       .then(customers => this.setState({customers}, () => console.log('fetched data', customers)))
   }

  render() {
    return (
      <div >
          <h2>Cutomers</h2>
         <ul>
           {this.state.customers.map(customer => 
              <li key={customer.id}> { customer.name } { customer.email}</li>
            )}     
         </ul>
      </div>
    );
  }
}

export default Customer;
