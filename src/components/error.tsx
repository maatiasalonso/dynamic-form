import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

interface ErrorProps {
  error: any;
}
export function ErrorPage({ error }: ErrorProps) {
  return (
    <Card style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Typography variant="h5" component="div">
        Error
      </Typography>
      <CardContent style={{ padding: "4rem" }}>
        <Typography variant="h6" component="div">
          Hubo un problema al obtener los datos
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: "2rem",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => window.location.reload()}
        >
          Volver a intentar
        </Button>
      </CardActions>
    </Card>
  );
}
