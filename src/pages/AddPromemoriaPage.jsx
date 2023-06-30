import React from 'react';
import Title from "../components/Title";
import FormAddPromemoria from '../components/FormAddPromemoria';

const AddPromemoriaPage= () => {
  return (
    <div>
      <Title title="Aggiungi Promemoria"/>
      <div style={{ margin: "4rem"}}></div>
      <FormAddPromemoria />
    </div>
  );
};

export default AddPromemoriaPage;