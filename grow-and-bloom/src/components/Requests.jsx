import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { baseURL } from '../constants.js';
import axios from "axios";

const Title = styled.h2`
  margin: 10 auto;
  text-align: center;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  input {
    padding: 10px;
    margin: 10px 0;
  }
  button {
    background-color: #633D2E;
    color: white;
    font-weight: bold;
    padding: 8px;
    border-radius: 10px;
    width: 120px;
    align-self: center;
  }
  button:hover {
    background-color: #F7AF63;
  }
`;

const StyledDiv = styled.div`
  background: #DDD9AB;
  padding: 30px;
  max-width: 500px;
  margin: 30px auto;
  border-radius: 30px;
`;

const Request = ({fetchPlants, setFetchPlants}) => {
  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      scientificName,
      description,
      image,
      link,
    };
    await axios.post(`${baseURL}/plants`, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    })

    setFetchPlants(!fetchPlants)
    setName("");
    setScientificName("");
    setDescription("");
    setImage("");
    setLink("");
  };

  return (
    <StyledDiv>
      <Title>Request a Plant</Title>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="scientificName">Genus</label>
        <input
          name="scientificName"
          type="text"
          value={scientificName}
          onChange={(e) => setScientificName(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          name="image"
          type="link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="link">Link</label>
        <input
          name="link"
          type="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          name="description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Submit</button>
      </StyledForm>
    </StyledDiv>
  );
};

export default Request;
