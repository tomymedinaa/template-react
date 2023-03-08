import React, { useState } from 'react'
import Card from './Card';
import style from '../style.module.css'


export default function Formulario() {

    const [nombre , setNombre] = useState('');
    const [pais , setPais] = useState('');
    const [mensaje, setMensaje] = useState(false)

    const onChangeinput = (event)=>{
        setNombre(event.target.value)
    }

    const onChangePais = (event)=>{
        setPais(event.target.value)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();
        const nombreValido = nombre.trim();
        const paisValido = pais.trim()

        if(nombreValido.length > 3 && paisValido.length > 6){
            setMensaje(true)
        }
        else{
            setMensaje(false)
            alert('Por favor chequea que la información sea correcta')
        }
    }
  return (
    <>
    <h1>Mi formulario</h1>
    <form className={style.form} onSubmit={onSubmitForm}>
        <input type="text" placeholder='ingrese su nombre' onChange={onChangeinput} value={nombre}/>
        <input type="text" placeholder='ingrese su pais favorito'onChange={onChangePais} value={pais}/>
        <button>Enviar</button>
    </form>

    {mensaje ? <Card userName={nombre} pais={pais} /> : null}
    </>

  )
}