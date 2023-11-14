import { Box } from "@mui/material";
import Sidebar from "../Component/Sidebar";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        welcome to dashboard
      </Box>
    </Box>
  );
};

export default Dashboard;
