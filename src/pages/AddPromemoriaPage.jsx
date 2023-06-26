import React from 'react';
import Title from "../components/Title";
import PromemoriaForm from '../components/PromemoriaForm';

const AddPromemoriaPage= () => {
  return (
    <div>
      <Title title="Aggiungi Promemoria"/>
      <div style={{ margin: "4rem"}}></div>
      <PromemoriaForm />
    </div>
  );
};

export default AddPromemoriaPage;