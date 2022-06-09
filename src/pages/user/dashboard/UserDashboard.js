import React from "react";
// import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import yellow from "@material-ui/core/colors/yellow";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ApexActivityChart from "./components/ActivityChart";

// 
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: theme.spacing(32),
//       height: theme.spacing(16)
//     }
//   },
//   yellowPaper: {
//     backgroundColor: yellow[300]
//   },
//   customBorder: {
//     border: `3px solid ${yellow[200]}`
//   },
//   customBorderRadius: {
//     borderRadius: 25
//   }
// }));

// export default function Dashboard() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root }>
//       <div style={{display:"flex"}}>
//       <Paper elevation={6} style={{marginLeft:"30%", padding:"15px", backgroundColor:"seagreen"}} >
//        <Box p={1}>
//           <Typography variant="h5">Completed Projects
//           <br />
//           <h5 style={{textAlign:"center"}}>10</h5>
//           </Typography>
//         </Box>
//       </Paper>
//       <Paper elevation={6} style={{marginLeft:"30%", padding:"15px", backgroundColor:"lightpink"}} >
//         <Box p={1} >
//           <Typography variant="h5">Pending Projects
//           <br />
//           <h5 style={{textAlign:"center"}}>2</h5  >
//           </Typography>
//         </Box>
//       </Paper>
//       <Paper elevation={6} style={{marginLeft:"30%", padding:"15px",backgroundColor:"lightblue"}}>
//         <Box p={1}>
//           <Typography variant="h5">Working On
//           <br />
//           <h5 style={{textAlign:"center"}}>3</h5  >
//           </Typography>
//         </Box>
//       </Paper>
//       <Paper elevation={6} style={{marginLeft:"30%", padding:"15px",backgroundColor:"orange"}}>
//         <Box p={1}>
//           <Typography variant="h5">Happy Clients
//           <br />
//           <h5 style={{textAlign:"center"}}>7</h5  >
//           </Typography>
//         </Box>
//       </Paper>
//       </div>
//       <br /> <br/>

      
      <div>
        <ApexActivityChart />
      </div>
      
       
      <div style={{marginLeft:"50%", marginTop:"-13%"}}>
      <h5> Meetings</h5>
      <React.Fragment>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Client 1</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Client2</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Client3</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Client4</TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
      </div>

      <br /> <br /> */}

      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "10%" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <ApexActivityChart />
          </Grid>
          <Grid item xs={8}>
            <div>
              <h5
                style={{
                  textAlign: "center",
                  textShadow: "0 0 3px pink, 0 0 5px skyblue",
                }}
              >
                {" "}
                Meetings
              </h5>
              <React.Fragment>
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      09:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Client 1</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Client2</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      12:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Client3</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                      9:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Client4</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </React.Fragment>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>

  );
}
