import React from 'react';
import styles from './ProductsManagement.module.css';

const ProductsManagement = ({ products, addProduct, editProduct, deleteProduct }) => {
    return (
        <div className={styles.container}>
            <h2>Products Management</h2>
            <table className={styles.ptable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Modify Details</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Product list will be dynamically inserted here */}
                    {products.map(product => (
                        <tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.stockQuantity}</td>
                            <td>
                                <button className={styles.editbtn} onClick={() => editProduct(product.name)}>Edit</button>
                            </td>
                            <td>
                                <button className={styles.delbutton} onClick={() => deleteProduct(product.name)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <button className={styles.addbutton} onClick={addProduct}>Add Product</button>
           
        </div>
    );
}

export default ProductsManagement;
