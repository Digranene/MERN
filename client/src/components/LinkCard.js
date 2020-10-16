import React from "react";

export const LinkCard = ({link}) => {
    return (

        <>
            <h2>Links</h2>

            <p>Your Link: <a href={link.to} target="_blank"  rel="noopener noreferrer">{link.to}</a></p>
            <p>From where: <a href={link.from} target="_blank"  rel="noopener noreferrer">{link.from}</a></p>
            <p>The number of clicks on the link: <strong>{link.clicks}</strong></p>
            <p>Creation date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}