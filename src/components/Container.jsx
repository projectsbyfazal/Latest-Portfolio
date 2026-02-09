import React from 'react'

const Container = ({ children, className = "" }) => {
    return (
        <section className={`container-box ${className}`}>
            {children}
        </section>
    )
}

export default Container
