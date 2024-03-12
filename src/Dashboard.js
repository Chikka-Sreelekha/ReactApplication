import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css'; 

const Dashboard = () => {
    return (
        <div className={styles.container}> 
            <h1><center>Enterprise Resource Planning</center></h1>
            <h2>Home - Dashboard</h2>
            <hr/>
            <p>Welcome to the Enterprise Resource Planning System !!!</p>
            <p>Details about Total Products and Total Orders till now are specified below:-</p>
            <p>Total Products: 5</p>
            <p>Total Orders: 5</p>
            <p>Here are the various sections to which you can navigate to, through the below provided links.</p>
            <p><Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Dashboard</Link> - This will navigate you back to the Home page.</p>
            <p><Link to="/products" style={{ color: 'blue', textDecoration: 'underline' }}>Products</Link> - This will provide you the Products Management content below.</p>
            <p><Link to="/orders" style={{ color: 'blue', textDecoration: 'underline' }}>Orders</Link> - This will provide you the Orders Management content below.</p>
            <p><Link to="/calendar" style={{ color: 'blue', textDecoration: 'underline' }}>Calendar</Link> - This will provide you the Orders Calendar content below.</p>
        </div>
    );
}

export default Dashboard;
