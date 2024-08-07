import { useState } from "react";
import "./ProductForm.css";
function ProductForm(){
    let [pName, updateName] = useState('');
    let [pPrice, updatePrice] = useState('');
    let [pDescription, updateDescription] = useState('');
    let [pAvailability, updateAvailability] = useState('');
    let [pImage, updateImage] = useState('');

    // let[userInput, updateUserInput] = useState({
    //     pName: '',
    //     pPrice: '',
    //     pDescription: '',
    //     pAvailability: '',
    //     pImage: ''
    // });
    
    function nameInputHandler(event){
        updateName(event.target.value);

        // updateUserInput({
        //     ...userInput,
        //     pName: event.target.value
        // })

        // updateUserInput((prevState) => {
        //     return {...prevState, pName: event.target.value}
        // })
    }
    function priceInputHandler(event){
        updatePrice(event.target.value);

        // updateUserInput({
        //     ...userInput,
        //     pPrice: event.target.value
        // })

        // updateUserInput((prevState) => {
        //     return {...prevState, pPrice: event.target.value}
        // })
    }
    function descriptionInputHandler(event){
        updateDescription(event.target.value);

        // updateUserInput({
        //     ...userInput,
        //     pDescription: event.target.value
        // })

        // updateUserInput((prevState) => {
        //     return {...prevState, pDescription: event.target.value}
        // })

    }
    function availabilityInputHandler(event){
        updateAvailability(event.target.checked);

        // updateUserInput({
        //     ...userInput,
        //     pAvailability: event.target.checked
        // })

        // updateUserInput((prevState) => {
        //     return {...prevState, pAvailability: event.target.checked}
        // })
    }
    function imageInputHandler(event){
        updateImage(event.target.value);

        // updateUserInput({
        //     ...userInput,
        //     pImage: event.target.value
        // })

        // updateUserInput((prevState) => {
        //     return {...prevState, pImage: event.target.value}
        // })
    }
    function createProductEventHandler(event){
        event.preventDefault();
        let product = {
            pID : 1,
            pName: pName,
            desc: pDescription,
            isAvailable:Boolean(pAvailability),
            image: pImage,
            price: Number(pPrice)
        }

        updateName('');
        updatePrice('');
        updateDescription('');
        updateAvailability(false);
        updateImage('');
        
        console.log(product);
    }
    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Product Name"
                        value={pName}
                        onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number" 
                        min="1" 
                        step="0" 
                        className="form-control" 
                        id="price" 
                        placeholder="Product Price"
                        value={pPrice}
                        onChange={priceInputHandler} />
            </div>
            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Product Description" 
                        value={pDescription}
                        onChange={descriptionInputHandler} />
            </div>
            <div className="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"
                checked={pAvailability} onChange={availabilityInputHandler} />
                <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>
            <div className="form-group">
                <label for="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" 
                value={pImage} onChange={imageInputHandler} />
            </div>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    );
}

export default ProductForm;