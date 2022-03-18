import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      aria-label={`Loading Content`}
      data-testid={`backdropLoader`}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
