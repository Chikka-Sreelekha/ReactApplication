import React from 'react';
import styles from './OrdersManagement.module.css';

const OrdersManagement = ({ orders, viewOrderDetails, updateOrderStatus, deleteOrder  }) => {
    return (
        <div className={styles.container}>
            <h2>Orders Management</h2>
            <table className={styles.otable}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Delivery Date</th>
                        <th>View Details</th>
                        <th>Modify Status</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Order list will be dynamically inserted here */}
                    {orders.map(order => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.customerName}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.status}</td>
                            <td>{order.deliveryDate}</td>
                            <td><button className={styles.viewbutton} onClick={() => viewOrderDetails(order.orderId)}>View</button></td>
                            <td><button className={styles.editbtn} onClick={() => updateOrderStatus(order.orderId)}>Update</button></td>
                            <td><button className={styles.delbutton}onClick={() => deleteOrder(order.orderId)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}

export default OrdersManagement;
