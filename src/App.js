import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Dashboard from './Dashboard';
import ProductsManagement from './ProductsManagement';
import OrdersManagement from './OrdersManagement';
import CalendarView from './CalendarView'; 
import 'react-calendar/dist/Calendar.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    state = {
        products: [
            { name: "Home Audio", category: "Electronics", price: 30000, stockQuantity: 100 },
            { name: "OnePlus", category: "Mobiles", price: 60000, stockQuantity: 50 },
            { name: "Serums", category: "Beauty", price: 599, stockQuantity: 75 },
            { name: "Sneakers", category: "Footwear", price: 3000, stockQuantity: 15 },
            { name: "Laundry", category: "Grocery", price: 399, stockQuantity: 10 }
        ],
        orders: [
            { orderId: "ORD101", customerName: "Siri Chikka", orderDate: "2024-03-03", status: "Delivered" , deliveryDate: "2024-03-03"},
            { orderId: "ORD102", customerName: "Arjun Gomatam", orderDate: "2024-03-05", status: "Shipped" , deliveryDate: "2024-03-08"},
            { orderId: "ORD103", customerName: "Suriya Sivakumar", orderDate: "2024-03-08", status: "Shipped" , deliveryDate: "2024-03-13"},
            { orderId: "ORD104", customerName: "Vaishnavi Ega", orderDate: "2024-03-13", status: "Processing" , deliveryDate: "2024-03-15"},
            { orderId: "ORD105", customerName: "Vishal Chikka", orderDate: "2024-03-15", status: "Processing" , deliveryDate: "2024-03-18"}
        ]
    };

    /* Functionality that allows you to add the product. */
    addProduct = () => {
        // Dummy implementation for demonstration
        const productName = prompt("Enter product name:");
        const category = prompt("Enter product category:");
        const price = parseFloat(prompt("Enter product price:"));
        const stockQuantity = parseInt(prompt("Enter product stock quantity:"));
        // Add the product to the state
        this.setState(prevState => ({
            products: [...prevState.products, { name: productName, category, price, stockQuantity }]
        }));
    };

    /* Functionality that allows you to only edit the product name. */
    /*editProduct = (productName) => {
        // Dummy implementation for demonstration
        const newProductName = prompt("Enter new product name:");
        // Find the product in the state and update its name
        this.setState(prevState => ({
            products: prevState.products.map(product =>
                product.name === productName ? { ...product, name: newProductName } : product
            )
        }));
    };*/

    /* Functionality that allows you to edit all details of the product. */
    editProduct = (productName) => {
        // Dummy implementation for demonstration
        const newProductName = prompt("Enter new product name:");
        const newCategory = prompt("Enter new category:");
        const newPrice = prompt("Enter new price:");
        const newStockQuantity = prompt("Enter new stock quantity:");
    
        // Find the product in the state and update its properties
        this.setState(prevState => ({
            products: prevState.products.map(product =>
                product.name === productName ? { 
                    ...product, 
                    name: newProductName,
                    category: newCategory,
                    price: parseFloat(newPrice), // Parse the price as float if needed
                    stockQuantity: parseInt(newStockQuantity) // Parse the stock quantity as integer if needed
                } : product
            )
        }));
    };
    
    /* Functionality that allows you to delete the product. */
    deleteProduct = (productName) => {
        // Dummy implementation for demonstration
        const confirmDelete = window.confirm(`Are you sure you want to delete ${productName}?`);
        if (confirmDelete) {
            // Filter out the product to be deleted from the state
            this.setState(prevState => ({
                products: prevState.products.filter(product => product.name !== productName)
            }));
        }
    };

    /* Functionality that allows you to view the order details. */
    viewOrderDetails = (orderId) => {
        // Dummy implementation for demonstration
        window.alert(`Viewing order details for order ID: ${orderId}`);
    };

    /* Functionality that allows you to update the order status. */
    updateOrderStatus = (orderId) => {
        const newStatus = prompt("Enter product status:");
        this.setState(prevState => ({
            orders: prevState.orders.map(order =>
                order.orderId === orderId ? { ...order, status: newStatus } : order
            )
        }));
    };

    /* Functionality that allows you to delete the order. */
    deleteOrder = (orderId) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete order ${orderId}?`);
        if (confirmDelete) {
            this.setState(prevState => ({
                orders: prevState.orders.filter(order => order.orderId !== orderId)
            }));
        }
    };

    render() {
        const { products, orders } = this.state;
        return (
            <Router>
                <div>
                    <Dashboard/>
                        <Routes>
                            <Route path="/" component={Dashboard}/>
                            {/* Route for Products Management */}
                            <Route path="/products" 
                            element={<ProductsManagement 
                            products={products}
                            addProduct={this.addProduct}
                            editProduct={this.editProduct}
                            deleteProduct={this.deleteProduct}/>} 
                            />
                            {/* Route for Orders Management */}
                            <Route path="/orders" 
                            element={<OrdersManagement 
                            orders={orders}
                            viewOrderDetails={this.viewOrderDetails}
                            updateOrderStatus={this.updateOrderStatus}
                            deleteOrder={this.deleteOrder}/>} 
                            />
                            {/* Route for Calendar View */}
                            <Route path="/calendar" 
                            element={<CalendarView orders={orders}/>} 
                            />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;

