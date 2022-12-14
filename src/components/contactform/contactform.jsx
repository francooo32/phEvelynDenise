import React, { useState, useEffect } from 'react';
import "./contactform.css"
import {useForm} from "react-hook-form"
import {sendMail} from './helper/mailform'
import aboutPhoto from "../../public/media/fotoSobreMi.jpg"

const ContactForm = () => {

  const { register, formState: {errors}, handleSubmit} = useForm();

  const [values, setValues]=useState({
    email:"",
    msj:"",
    status:false
  })
  const {email, msj, status}=values;

  const onSubmit = (data) => {
    console.log(data)
    const email = data.email
    const msj = data.msj
    sendMail({email, msj}).then(data=>{
        if(data.err){
            console.log("err", data.err)
        }else{
            console.log("Success", data)
            setValues({...values,status:true})
        }
    }).catch(console.log("error sending the mail"))
  }

  return (
    <div className="contact-container">
        {/* <h1>Pongamosnos en contacto!</h1> */}

        <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>

            <div className="contactCells">
                <label>Nombre</label>
                <input type="text" {...register('nombre', {required:true, maxLength:20})}/>
                {errors.nombre?.type === 'required' && <p>El campo Nombre es obligatorio</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 20 caracteres</p>}
            </div>

            <div className="contactCells">
                <label>Telefono</label>
                <input type="text" {...register('telefono', {required:true, maxLength:20})}/>
                {errors.nombre?.type === 'required' && <p>El campo Nombre es obligatorio</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 20 caracteres</p>}
            </div>

            <div className="contactCells">
                <label>Email</label>
                <input type="text" {...register('email', {required:true, maxLength:40, 
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}/>
                {errors.email?.type === 'pattern' && <p>El formato de email es incorrecto</p>}    
            </div>

            <div className="contactCells">
                <label for="msj">Mensaje</label>
                <textarea id="msj" name="msj" rows="4" cols="50" {...register('msj', {required:true})}/>
                {errors.msj?.type === 'required' && <p>El campo Mensaje es obligatorio</p>}
            </div>

            <input type="submit" value="Enviar"/>

        </form>

    </div>
  )
}

export default ContactForm