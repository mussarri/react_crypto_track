import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box p={3} pt={10} borderTop="1px solid grey">
      <Typography fontSize={12}>
        Copyright © 2023 CryptoTracker. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
