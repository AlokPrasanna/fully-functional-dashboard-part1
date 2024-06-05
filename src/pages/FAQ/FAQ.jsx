import { Box , Typography , useTheme } from "@mui/material";
import {Header} from "../../components/molecules";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {token} from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question 01
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est!
                    </Typography> 
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question 02
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est!
                    </Typography> 
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question 03
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est!
                    </Typography> 
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question 04
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est!
                    </Typography> 
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question 05
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est!
                    </Typography> 
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question 06
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est!
                    </Typography> 
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question 07
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est!
                    </Typography> 
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;