import { Home, NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const styles = {
  breadCrumbs: {
    bgcolor: "white",
    p: 2,
    borderRadius: 2,
    boxShadow: "0 0 5px rgba(0,0,0,0.5)",
  },
  link: { display: "flex", alignItems: "center" },
};
const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="inherit"
    component={RouterLink}
    to={"/"}
    sx={styles.link}
  >
    <Home />
  </Link>,
  <Typography key="2" color="text.primary">
    Categories
  </Typography>,
];

export const BreadCrumbs = ({ items }) => {
  if (!items) {
    return null;
  }
  return (
    <Breadcrumbs
      sx={styles.breadCrumbs}
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
    >
      {items.map((item, index) => {
        if (index !== items.length - 1) {
          return (
            <Link
              underline="hover"
              key="1"
              color="inherit"
              component={RouterLink}
              to={item.path}
              sx={styles.link}
            >
              {item.icon && item.icon}
              {item.label}
            </Link>
          );
        } else {
          return (
            <Typography key="2" color="text.primary">
              {item.label}
            </Typography>
          );
        }
      })}
    </Breadcrumbs>
  );
};
