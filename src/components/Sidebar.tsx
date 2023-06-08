import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import CodeIcon from "@mui/icons-material/Code";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const Menu = [
  { icon: TableViewIcon, link: "/penumpang", label: "Task 1" },
  { icon: CodeIcon, link: "/react-context-pattern", label: "Task 2" },
  { icon: PlaylistAddCheckIcon, link: "/todo-list", label: "Task 3" },
];

const Sidebar = () => {
  return (
    <Stack sx={{ width: "200px", lineHeight: "3em" }}>
      {Menu.map((item, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="20px"           
          justifyContent="center"
          color='primary'
        >
          {React.createElement(item.icon, { style: { color: '#2fcc71' } })}
          <Link style={{ color: '#2fcc71', textDecoration: 'none'}} to={item.link}>{item.label}</Link>
        </Box>
      ))}
    </Stack>
  );
};

export default Sidebar;
