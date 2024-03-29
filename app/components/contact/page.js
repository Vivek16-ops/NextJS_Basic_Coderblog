"use client"
import React, { useState } from 'react'
import Navbar from '../Navbar'
import styles from '../../styles/contact.module.css'

const contact = () => {
  const [credentials, setcredentials] = useState({ name: "", email: "", phone: "", concern: "" })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        phone: credentials.phone,
        concern: credentials.concern
      }),
    })
    alert("Thank you for contacting")
    setcredentials({ name: "", email: "", phone: "", concern: "" })
  }

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Contact US</h2>
        <form className={styles.formset} onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>Name: </label>
            <input type="text" name='name' value={credentials.name} onChange={handleChange} id="name" />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>Email: </label>
            <input type="email" name='email' value={credentials.email} onChange={handleChange} id="email" />
            <div id="emailHelp">We'll never share your email with anyone else.</div>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>Phone: </label>
            <input type="phone" onChange={handleChange} name="phone" value={credentials.phone} id="phone" />
          </div>
          <div className={styles.mb3}>
            <textarea id="concerns" name='concern' value={credentials.concern} onChange={handleChange} rows={5}></textarea>
            <label className={styles.formlabel} htmlFor="concerns">Write your concerns here</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default contact
