import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './CalendarView.module.css';


function CalendarView({ orders }) {
  const [date, setDate] = useState(new Date());

  const ordersOnSelectedDate = orders.filter(order => {
    const orderDate = new Date(order.orderDate);
    return orderDate.toDateString() === date.toDateString();
  });

  return (
    <div className={styles.container}>
      <h2>Orders Calendar View</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <h3>Orders on {date.toDateString()}</h3>
      <ul>
        {ordersOnSelectedDate.map(order => (
          <li key={order.orderId}>
            Order ID: {order.orderId}, Customer Name: {order.customerName}, Status: {order.status}, Delivery Date: {order.deliveryDate}
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default CalendarView;
