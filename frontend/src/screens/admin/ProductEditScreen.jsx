import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'
import { useGetProductDetailsQuery, useUpdateProductMutation, useUploadProductImageMutation } from '../../slices/productApiSlice'
const ProductEditScreen = () => {
    //Reminder that useParams is a hook that returns an object of key/value pairs of URL parameters. Anything with :id in the URL will be a key in the object
    const { id: productId } = useParams()

    const [sizes, setSizes] = useState([{ size: '', qty: 0 }]);

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
   
    const [description, setDescription] = useState('')

    const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId)

    const [updateProduct, { isLoading: loadingUpdate}] = useUpdateProductMutation()

    const [uploadProductImage ] = useUploadProductImageMutation()

    useEffect(() => {
        if (product) {
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)
            setBrand(product.brand)
            setCategory(product.category)
        
            setDescription(product.description)
            setSizes(product.sizes)
            
        }
    
    }, [product])

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          await updateProduct({
            productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            sizes
          }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
          toast.success('Product updated');
          refetch();
          navigate('/admin/productlist');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
    }

    const uploadFileHandler = async (e) => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        try {
            const res = await uploadProductImage(formData).unwrap()
            toast.success('Image uploaded')
            setImage(res.image)
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }

    // Function to handle input change
    const handleInputChange = (index, event) => {
        const values = [...sizes];
        if (event.target.name === "size") {
            values[index].size = event.target.value;
        } else {
            values[index].qty = event.target.value;
        }
        setSizes(values);
    };

    // Function to handle size removal

    const handleRemoveSize = index => {
        const values = [...sizes];
        values.splice(index, 1);
        setSizes(values);
    }

    // Function to handle adding new size
    const handleAddSize = () => {
        setSizes([...sizes, { size: '', qty: 0 }]);
      };
      

  return <>
    <Link to='/admin/productlist' className='btn btn-light my-3'>Go Back</Link>
    <FormContainer>
        <h1> Edit Product </h1>
        {loadingUpdate && <Loader />}

        { isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='number' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type='text' placeholder='Enter image url' value={image} onChange={(e) => setImage(e.target.value)}></Form.Control>
                    <Form.Control type='file' className='my-2' label='Choose file' onChange={ uploadFileHandler}></Form.Control>
                </Form.Group>
                <Form.Group controlId='brand'>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type='text' placeholder='Enter brand' value={brand} onChange={(e) => setBrand(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='category'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type='text' placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)}></Form.Control>
                </Form.Group>
             
                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                </Form.Group>
                {sizes.map((sizeStock, index) => (
                <div key={index}>
                    <div className="size-delete">
                        <Form.Group className="size-length" controlId={`size${index}`}>
                        <Form.Label>Size</Form.Label>
                        <Form.Control
                            type="text"
                            name="size"
                            placeholder="Enter size"
                            value={sizeStock.size}
                            onChange={event => handleInputChange(index, event)}
                        />
                        </Form.Group>
                        <Button type="button" className="trash-button" onClick={() => handleRemoveSize(index)}> <FaTrash/> </Button>
                    </div>
                    <Form.Group controlId={`qty${index}`}>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        name="qty"
                        placeholder="Enter quantity"
                        value={sizeStock.qty}
                        onChange={event => handleInputChange(index, event)}
                    />
                    </Form.Group>
                   
                    
                </div>
                ))}
                <div className='my-2'>
                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                    <Button type="button" className='mx-2' onClick={handleAddSize} >Add a Size</Button>
                </div>
                
            </Form>
        )}
    </FormContainer>
  </>
}

export default ProductEditScreen