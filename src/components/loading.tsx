import { CircularProgress, Stack } from "@mui/material";

export function LoadingPage() {
  return (
    <Stack style={{ alignItems: "center" }} gap={2}>
      <CircularProgress />
      <span>Cargando...</span>
    </Stack>
  );
}
