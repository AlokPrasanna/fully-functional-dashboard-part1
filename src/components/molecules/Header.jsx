import { Typography , Box , useTheme } from "@mui/material";
import { token } from "../../theme";

const Header = ({title , subtitle}) => {
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{m: "5px"}}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]} sx={{m: "5px"}}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header;