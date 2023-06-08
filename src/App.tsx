import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, Stack } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import PassengerPage from "./pages/PassengerPage";
import ContextPage from "./pages/ContextPage";
import TodoPage from "./pages/TodoPage";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open />
        <Drawer variant="permanent" open>
          <Stack
            sx={{
              margin: "0 auto",
              padding: "20px",
            }}
          >
            <img
              src="https://d1ypgq8z79ms9z.cloudfront.net/wp-content/uploads/2021/08/Logo.x98915.png"
              alt="logoDoCheck"
              width="120px"
            />
          </Stack>
          <Sidebar />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Content>
            <Routes>
              <Route path="/penumpang" element={<PassengerPage />} />
              <Route path="/react-context-pattern" element={<ContextPage />} />
              <Route path="/todo-list" element={<TodoPage />} />
            </Routes>
          </Content>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
