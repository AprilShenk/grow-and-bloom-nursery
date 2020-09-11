import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { baseURL } from "../constants.js";
import axios from "axios";
import Button from "./Button"

// ------------STYLING------------
const Title = styled.h2`
  margin: 10 auto;
  text-align: center;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 80%
  input {
    padding: 10px;
    margin: 10px 0;
  }

  button:hover {
    background-color: #f7af63;
  }
  button:focus {
    outline-color: #9cddc8;
  }

  @media only screen and (min-width: 1025px) {
    max-width: 400px;
  }

`;

const StyledDiv = styled.div`
  background: #ddd9ab;
  padding: 30px;
  width: 70%;
  margin: 30px auto;
  border-radius: 30px;

  @media only screen and (min-width: 1025px) {
    max-width: 500px;
  }
`;

const Request = ({ fetchPlants, setFetchPlants }) => {
  // ------------SET STATE------------
  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  // ------------FUNCTIONS------------
  // EVENT LISTENER CALLBACK TO HANDLE SUBMIT
  // POST TO API TO CREATE ENTRY
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      scientificName,
      description,
      image,
      link,
    };
    try {
      await axios.post(
        `${baseURL}/plants`,
        { fields },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    setFetchPlants(!fetchPlants);
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
        <Button text="Submit"/>
      </StyledForm>
    </StyledDiv>
  );
};

export default Request;
