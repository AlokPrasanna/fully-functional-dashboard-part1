import { useState } from "react";
import { Menu , MenuItem , Sidebar} from "react-pro-sidebar";
import { Box , IconButton , Typography , useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import {token} from "../../theme";
import {Images} from "../../constant"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        sx={{ '&:hover': { backgroundColor: colors.greenAccent[600] } }}
      >
        <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>{title}</Link>
      </MenuItem>
    );
  };  

const SideBar = () => {
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    const [isCollapsed , setIsCollapsed] = useState(false);
    const [selected ,  setSelected] = useState("Dashboard");

    const menuItemStyle = {
        '&:hover': { 
            backgroundColor: colors.greenAccent[600],
        },
    };
    return (
        <Box >
            <Sidebar backgroundColor={colors.primary[400]} padding="5px 35px 5px 20px" collapsed={isCollapsed}>
                <Menu 
                    iconShape="square"
                >
                    {/* Logo and MenuIcon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                        margin: "10px 0 20px 0",
                        }}
                    >
                        {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                            ADMINIS
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                        )}
                    </MenuItem>
                    {/* User */}
                    {!isCollapsed && (
                        <Box>
                            <Box display="flex" justifyContent="center">
                                <img src={Images.user} alt="User-Image" width="100px" height="100px" style={{cursor:"pointer" , borderRadius:"50%"}} />
                            </Box>
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}} >Alok Prasanna</Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>Admin</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item 
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m: "15px 0 5px 20px"}}
                        >
                            Data
                        </Typography>
                        <Item 
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Contacts Informations"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m: "15px 0 5px 20px"}}
                        >
                            Pages
                        </Typography>
                        <Item 
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m: "15px 0 5px 20px"}}
                        >
                            Charts
                        </Typography>
                        <Item 
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Geography Chart"
                            to="/geo"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>    
    )
}

export default SideBar;