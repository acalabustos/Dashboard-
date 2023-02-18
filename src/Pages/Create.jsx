import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../Style/Create.css'

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Titulo:', title);
    console.log('Descripción:', description);
    console.log('Categoria:', category);
    console.log('Marca:', brand);
    console.log('Estado:', condition);
    console.log('Precio:', price);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titulo:
        <input type='text' value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Descripción:
        <input type='text' value={description} onChange={handleDescriptionChange} />
      </label>
      <label>
        Categoría:
        <input type='text' value={category} onChange={handleCategoryChange} />
      </label>
      <label>
        Marca:
        <input type='text' value={brand} onChange={handleBrandChange} />
      </label>
      <label>
        Estado:
        <input type='text' value={condition} onChange={handleConditionChange} />
      </label>
      <label>
        Precio
        <input type='text' value={price} onChange={handlePriceChange} />
      </label>

      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
    </div>
    </form>

    )
}

export default Form;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function FormUpload() {
  const [previewImage, setPreviewImage] = useState(null);
  const [title, setTitle] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageReader = new FileReader();

    imageReader.onload = () => {
      setPreviewImage(imageReader.result);
    };

    if (selectedImage) {
      imageReader.readAsDataURL(selectedImage);
    }
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.prevetDefault();
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Imagen:</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e)}
        />
        {previewImage && (
          <img src={previewImage} alt="Vista previa de la imagen" />
        )}
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label htmlFor="textInput">Title:</Form.Label>
        <Form.Control id="textInput" placeholder="Add title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="textInput">Description:</Form.Label>
        <Form.Control id="textInput" placeholder="Add description" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="textInput">Category:</Form.Label>
        <Form.Control id="textInput" placeholder="Add category" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="textInput">Brand:</Form.Label>
        <Form.Control id="textInput" placeholder="Add brand" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="select">Condition:</Form.Label>
        <Form.Select id="select">
        <option></option>
          <option>New</option>
          <option>Nearly new</option>
          <option>Good</option>
          <option>Satisfactory</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="numberInput">Price:</Form.Label>
        <Form.Control id="numberInput" placeholder="Add price" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default FormUpload;