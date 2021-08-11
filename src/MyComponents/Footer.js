import React from 'react'

export const Footer = () => {

    let footerStyle = {
        top: "80vh",
        height: "10vh",
        position: "relative",
        width: "100%",
        backgroundColor: "#000000d6",
        color: "white",
        textAlign: "center"
    }

    return (
        <footer style={footerStyle}>
            <p>Copyright &copy; NotesApp.com</p>
        </footer>
    )
}
