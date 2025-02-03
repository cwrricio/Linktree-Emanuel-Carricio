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
                    xs: "9rem", // largura de 11rem em telas pequenas
                    md: "13rem"  // largura de 14rem em telas médias e maiores
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
                className="link">
                {linkData.linkTitle}
            </Link>
        </Box>
    );
};

export default CustomLink;
