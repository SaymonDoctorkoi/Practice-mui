import Sidebar from "../Component/Sidebar";
import { Box } from "@mui/material";

const SingleProduct = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        welcome to Product Details
      </Box>
    </Box>
  );
};

export default SingleProduct;
