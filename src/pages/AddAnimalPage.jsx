import React from 'react';
import Title from "../components/Title";
import AddAnimalForm from "../components/AddAnimalForm";

const AddAnimalPage = () => {
  return (
    <div>
      <Title title="Aggiungi Animale"/>
      <div style={{ margin: "4rem"}}></div>
      <AddAnimalForm />
    </div>
  );
};

export default AddAnimalPage;