import React from "react";
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({setCategory}) => {
    const OPTIONS = [
      {value: 'general', label: 'General'},
      {value: 'business', label: 'Negocios'},
      {value: 'entertainment', label: 'Entretenimiento'},
      {value: 'health', label: 'Salud'},
      {value: 'science', label: 'Ciencia'},
      {value: 'technology', label: 'Tecnología'},
  ]

  //usando custom hooks

  const [categoria, SelectNews] = useSelect('general', OPTIONS  )


  const searchNews = (e) => {
    e.preventDefault();
    setCategory(categoria);
  }

  return (
    <div className={`${styles.buscador} row`}>
      <h2 className={styles.heading}>Encuentra noticias por categorías</h2>
      <div className="col-sm-12 col-md-8 m-auto">
        <form onSubmit={searchNews}>
          <SelectNews/>
          <button className={`${styles.btn_block} btn btn-outline-primary m-auto `}>Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
