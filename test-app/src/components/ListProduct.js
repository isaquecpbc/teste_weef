import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListProduct() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        axios.get('http://localhost/api/products/').then(function(response) {
            console.log(response.data.message);
            setProducts(response.data.data);
        });
    }

    const deleteProduct = (id) => {
        axios.delete(`http://localhost/api/products/${id}`).then(function(response){
            console.log(response.data.message);
            getProducts();
        });
    }
    return (
        <div>
            <h1>List Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, key) =>
                        <tr key={key}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`product/${product.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}
