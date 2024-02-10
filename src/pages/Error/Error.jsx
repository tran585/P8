import React from 'react'
import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
    return (
        <section className="section-error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={'/'}>Retourner sur la page d'acceuil</Link>
        </section>
    )
}

export default Error
