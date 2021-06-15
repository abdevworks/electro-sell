import React, {useState, useEffect} from 'react';


export default function Customers(){

    const [customers, setCustomers] = useState([]);

    useEffect((customers) => {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => {
                setCustomers(customers);
                console.log('Customers fetched..', customers);
            });    
    },[]);

    return(
        <div className="bg-white p-5">
            <h2>Customers</h2>
            <ul>
                {customers.map(customer => {
                    return <li key={customer.id} >{customer.firstName} {customer.lastName}</li>
                })}
            </ul>
        </div>
    );
}