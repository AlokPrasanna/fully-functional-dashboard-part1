import { GeoChart , Header } from "../../components/molecules";
import { Box, useTheme } from "@mui/material";
import {token} from "../../theme";

const Geo = () => {
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Geo Chart" subtitle="Simple Geo Chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px"> 
                <GeoChart />
            </Box>
        </Box>
    )
}

export default Geo;