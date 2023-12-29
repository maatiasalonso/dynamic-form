import { useFetch } from "./hooks/use-fetch";
import { FormInput } from "./components/form-input";
import "./App.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ErrorPage } from "./components/error";
import { LoadingPage } from "./components/loading";

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
      {error && <ErrorPage error={error} />}
      {loading && <LoadingPage />}
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
