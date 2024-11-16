
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

export default function ImageCard({ image }: { image: string }) {
  console.log(image)
  return (
    <Card sx={{ display: "flex", maxWidth: '100%', marginBottom: '15px' }}>
      {/* Imagen a la izquierda */}
      <CardMedia
        component="img"
        sx={{ width: 300, height: 200 }}
        image={image}
        alt="Ejemplo de imagen"
      />
      {/* Detalles a la derecha */}
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Título de la tarjeta
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Este es un ejemplo de una descripción en detalle. Puedes incluir texto adicional aquí.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
