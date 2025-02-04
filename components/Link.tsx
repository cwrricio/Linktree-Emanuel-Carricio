import Box from '@mui/material/Box'
import React from 'react'
import Link from "next/link";

interface LinkProps {
    linkData: { linkTitle: string; link: string };
}

const CustomLink = ({ linkData }: LinkProps) => {
    return (
        <Box
            className="linkBackground"
            sx={{
                padding: "0.75rem 5.625rem",
                width: {
                    xs: "9rem",
                    md: "13rem"
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.8rem 0",
                borderRadius: "0.75rem"
            }}>

            <Link
                href={linkData.link}
                target="_blank"
                className="link"
                style={{
                    display: "flex",       
                    justifyContent: "center", 
                    alignItems: "center",   
                    width: "100%",         
                    height: "100%",       
                    textDecoration: "none"   
                }}>
                {linkData.linkTitle}
            </Link>
        </Box>
    );
};

export default CustomLink;
