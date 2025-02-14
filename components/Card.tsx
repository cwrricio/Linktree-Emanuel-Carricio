import Box from '@mui/material/Box';
import React from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import CustomLink from "./Link";

const links = [
    {
        linkTitle: "GitHub",
        link: "https://github.com/cwrricio",
    },
    {
        linkTitle: "Portifólio",
        link: "https://github.com/cwrricio",
    },
    {
        linkTitle: "LinkedIn",
        link: "https://www.linkedin.com/in/emanuel-carricio-341783215/",
    },
    {
        linkTitle: "Twitter",
        link: "https://x.com/cwrricio",
    },
    {
        linkTitle: "Instagram",
        link: "https://www.instagram.com/emanuelcarricio/?hl=pt-br",
    }
];

const Card = () => {
    return (
        <Box 
            className="cardBackground"
            sx={{
                padding: { xs: "1rem", sm: "2rem" }, // Reduz padding em telas pequenas
                borderRadius: "0.75rem",
                maxWidth: { xs: "85%", sm: "400px" }, // Ocupa 85% da tela pequena, mantém tamanho em telas grandes
                width: "100%",
                maxHeight: { xs: "83vh", sm: "90vh" }, // Reduz altura em telas pequenas
                margin: { xs: "2rem auto", sm: "auto" }, // Aumenta margens externas em telas pequenas
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)"
            }}>
            <Image
                src="/emaimg.jpg"
                alt="profile image"
                height={88}
                width={88}
                style={{
                    borderRadius: "50%",
                    marginBottom: "1.5rem"
                }}
            />
            <Typography variant="h1" sx={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                Emanuel Carricio
            </Typography>
            <Typography
                className="neon"
                variant="h2"
                sx={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>
                Programador FullStack
            </Typography>
            <Typography
                sx={{
                    fontSize: "0.9rem",  
                    color: "#A0A0A0",  
                    fontStyle: "italic",  
                    marginBottom: "1.5rem"
                }}>
                {"“Ideias Inventivas”"}
            </Typography>
            {links.map((link) => (
                <CustomLink linkData={link} key={link.link} />
            ))}
        </Box>
    );
};

export default Card;
