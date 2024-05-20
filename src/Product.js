import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import { useContext, useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'


function Product() {

    let params = useParams()
    let navigate = useNavigate()

    let { getProduct, deleteProduct } = useContext(ProductContext)
    let [product, setProduct] = useState();

    let [error, setError] = useState()

    useEffect(() => {
        setError(null)
        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
                .catch((message) => setError(message))
                
        }
        fetch()
    }, [params.productId, getProduct])


    function errorMessage() {
        return <Alert variant="danger">There was an error attempting to load this product: {error}</Alert>
    }

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
    }

    function productCard() {
        let { id, name, description, price, imageUrl, rating } = product
        return (
            <Card className="align-self-start w-25">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                    <Card.Text>
                        <strong>Price:</strong> <span>{price} Galleons</span><br></br>
                        <strong>Rating:</strong> <span>{rating}</span>
                    </Card.Text>
                    <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                    <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
                </Card.Body>
            </Card>
        )
    }
    
    if (error) return errorMessage()
    if (product === undefined){
        return loading()}

    if (product.id !== params.productId) {
        loading()
    }
    else {
        return productCard();
    }


}

export default Product