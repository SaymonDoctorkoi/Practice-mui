import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import Sidebar from "../Component/Sidebar";
interface UserDetails {
  label: string;
  value: string | string[] | Array<object> | VisitFee;
  isExtend?: boolean;
}

interface VisitTime {
  fromTime: string;
  toTime: string;
}

interface VisitFee {
  old: string;
  new: string;
  report: string;
}

interface BasicInfo {
  name: string;
  updatedDate: string;
  id: string;
  monile: string; // Typo fixed from "monile" to "mobile"
  details: UserDetails[];
}

interface UserInfo {
  basicInfo: BasicInfo;
}

const Profile = () => {
  //   const [showMore, setShowMore] = useState(!isShowMore);

  const userInfo: UserInfo = {
    basicInfo: {
      name: "safa",
      updatedDate: "12:09pm",
      id: "SLDE230923021Q",
      monile: "01934234342",
      details: [
        { label: "Email", value: "email@gmail.com" },
        { label: "Speciality", value: "Special" },
        { label: "Designation", value: "Associate" },
        { label: "Degree", value: "mbbs" },
        { label: "Specialization", value: "denties" },
        { label: "Chember OF Day", value: ["monday", "sunday"] },
        { label: "BMDC", value: "2333" },
        { label: "Appointment Slot", value: "10" },
        {
          label: "Visiting Hour",
          value: [
            { fromTime: "10:27-PM", toTime: "12:27-PM" },
            { fromTime: "09:27-PM", toTime: "11:50-pm" },
            { fromTime: "10:27-PM", toTime: "10:27-PM" },
          ],
          isExtend: true,
        },
        {
          label: "VisitFee",
          value: { old: "12", new: "33", report: "66" },
          isExtend: true,
        },
      ],
    },
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        welcome to profile
        <Grid container justifyContent="center" alignContent="center" ml={-0.5}>
          {/* <Collapse in={showMore} timeout="auto" unmountOnExit> */}
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              flexWrap: "wrap",
              width: "100%",
              pt: 1,
              pl: 0.5,
            }}
          >
            {userInfo?.basicInfo?.details?.map(
              (field, index) => (
                console.log(field),
                (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    key={index + 1}
                    sx={{
                      display: "flex",
                      p: 1,
                      pr: 1.5,
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Typography
                      sx={{ pr: 0.7, color: "#757575", minWidth: "33%" }}
                    >{`${field.label}:  `}</Typography>
                    <Typography
                      sx={{ pr: 0.7, color: "#757575", minWidth: "33%" }}
                    >{`${field.value}:  `}</Typography>
                    {field.isExtend ? (
                      <Accordion>
                        <AccordionSummary>
                          <Typography>{field.label}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* Render content for extended details */}
                          {field.label === "Visiting Hour" ? (
                            <div>
                              {field.value.map(
                                (timeSlot: VisitTime, i: number) => (
                                  <Typography key={i}>
                                    {`${timeSlot.fromTime} to ${timeSlot.toTime}`}
                                  </Typography>
                                )
                              )}
                            </div>
                          ) : (
                            <Typography>
                              {`Old: ${field.value.old}, New: ${field.value.new}, Report: ${field.value.report}`}
                              {/* visit time is not set */}
                            </Typography>
                          )}
                        </AccordionDetails>
                      </Accordion>
                    ) : (
                      <></>
                      //   <Typography
                      //     sx={{ fontWeight: "bold", textAlign: "right" }}
                      //   >
                      //     {field.label === "VisitFee" ? (
                      //       <div>
                      //         {field.value.map((timeSlot, i) => (
                      //           <Typography key={i}>
                      //             {`${timeSlot.fromTime} to ${timeSlot.toTime}`}
                      //           </Typography>
                      //         ))}
                      //       </div>
                      //     ) : (
                      //       `${field.value.old}, ${field.value.new}, ${field.value.report}`
                      //     )}
                      //   </Typography>
                    )}
                  </Grid>
                )
              )
            )}
          </Box>
          {/* </Collapse> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
