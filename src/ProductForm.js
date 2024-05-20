import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext'

function ProductForm() {
    let params = useParams()
    let [product, setProduct] = useState({
        id: params.productId,
        name: "",
        description: "",
        price: undefined,
        rating: "",
        imageUrl: ""

    })

    let { getProduct, addProduct, updateProduct } = useContext(ProductContext)
    let navigate = useNavigate()
    let { id, name, description, price, rating, imageUrl } = product

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
            await getProduct(id)
                .then((product) => setProduct(product))
        }
        fetch()
    }, [id])

    function handleChange(event) {
        setProduct((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function addOrUpdate() {
        if (id === undefined) {
            return addProduct(product)
        } else {
            return updateProduct(product)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        addOrUpdate().then((product) =>
            navigate(`/products/${product.id}`)
        )
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" value={price} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Rating</Form.Label>
                <Form.Control type="text" name="rating" value={rating} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>imageUrl</Form.Label>
                <Form.Control type="text" name="imageUrl" value={imageUrl} onChange={handleChange} />
            </Form.Group>
            <Button type="submit">Save</Button>
        </Form>
    )
}

export default ProductForm