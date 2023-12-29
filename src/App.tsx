import { useFetch } from "./hooks/use-fetch";
import { FormInput } from "./components/form-input";
import "./App.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const URL: string =
  "https://run.mocky.io/v3/c7a96306-c122-4037-8b27-a2120b9e6f04";

function App() {
  const { data, loading, error } = useFetch(URL);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleClear = () => {
    setFormData({});
    window.location.reload();
    setIsSubmitted(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {error && (
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
      )}
      {loading && (
        <Stack style={{ alignItems: "center" }} gap={2}>
          <CircularProgress />
          <span>Cargando...</span>
        </Stack>
      )}
      {data && (
        <form>
          <Card style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <Typography variant="h5" component="div">
              Formulario Dinamico
            </Typography>
            <CardContent style={{ padding: "4rem" }}>
              {data.map((item: any) => (
                <FormInput
                  key={item.name}
                  input={item}
                  onChange={handleChange}
                />
              ))}
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
                onClick={handleSubmit}
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </form>
      )}
      {isSubmitted && (
        <Card style={{ marginTop: "2rem", padding: "2rem", width: "46rem" }}>
          <Typography variant="h5" component="div">
            Datos
          </Typography>
          {Object.entries(formData).map(([key, value]: any) => (
            <Typography key={key} variant="body1">
              <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
              {value}
            </Typography>
          ))}
          <CardActions
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2rem",
            }}
          >
            <Button color="primary" variant="contained" onClick={handleClear}>
              Limpiar Todo
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default App;
