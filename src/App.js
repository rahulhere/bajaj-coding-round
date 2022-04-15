import React, { useState, useEffect } from "react";
import List from "./List";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getListData } from "./api";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getListData()
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else if (error) {
    return (
      <Typography
        pt="2rem"
        align="center"
        variant="h6"
        component="h1"
        color="red"
      >
        Error in loading api data...
      </Typography>
    );
  }

  return <List data={data ?? []} />;
};

export default App;
