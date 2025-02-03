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
                padding: { xs: "1.5rem", sm: "2rem" },
                borderRadius: "0.75rem",
                maxWidth: { xs: "90vw", sm: "400px" }, 
                width: "100%",
                maxHeight: "90vh",
                margin: "auto", 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#1F1F1F",
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
                {"“Computaria e outras coisas”"}
            </Typography>
            {links.map((link) => (
                <CustomLink linkData={link} key={link.link} />
            ))}
        </Box>
    );
};

export default Card;
