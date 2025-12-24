import "./tech.css"
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { technologies } from "../../data";

export default function Techs() {
    return (
        <>
            <Typography variant="h3" textAlign={"center"} mb={2} className="text">technologies</Typography>
            <Box

                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },// 3 كروت في الصف
                    gap: 4,
                    maxWidth: "900px",
                    margin: "0 auto",
                    marginBottom: "30px",

                }}
            >
                {technologies.map((tech) => (
                    <Card
                        className="tech"
                        key={tech.name}
                        sx={{
                            textAlign: "center",
                            padding: 3,
                            transition: "0.3s",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: 6,
                            },
                        }}

                    >
                        <CardMedia
                            component="img"
                            height="120"
                            image={tech.image}
                            alt={tech.name}
                            sx={{ objectFit: "contain" }}
                        />
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold">
                                {tech.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </>
    );
}
