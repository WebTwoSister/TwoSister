import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
// import data of services
import { servicesData } from "@/app/config";


export default function AppointmentSection() {
  return (
    <section id="appointment" className="w-full h-auto">
      <ContainerPadding>
        <div className="flex w-full h-auto lg:pr-[35%]">
          <div className="flex w-full flex-col items-center py-5 sm:py-20">
            {/* Name of title with underline */}
            <NameTitle name="Appointment" color="text-black" />
            {/* Title */}
            <h2 className="h1-adaptive-text text-center lg:text-start max-w-xl text-black">
              Get A <span className="text-[#F88944]">Free</span> Appointment
            </h2>
            {/* Description paragraph */}
            <p className="p-adaptive-text text-center lg:text-start text-black max-w-3xl">
              Quickly schedule your free appointment with our team. We will
              quickly contact you, clarify the details and choose the best time
              for you. A simple and convenient way to start cooperation.
            </p>
          </div>
        </div>
      </ContainerPadding>
      <div className="flex w-full h-auto bg-[#963880] py-10">
        <ContainerPadding className="flex">
          <div className="flex flex-col flex-2/3">
            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
              <TextField
                id="enter-your-name"
                label="Enter Your Name"
                variant="outlined"
                sx={{
                  width: "100%",

                  // Font style for text inside
                  "& .MuiInputBase-input": {
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-bubblegum)",
                    borderRadius: "30px",
                    color: "#fdfdfd",
                    px: "1rem",
                  },

                  // Font style for label
                  "& .MuiInputLabel-root": {
                    fontFamily: "var(--font-bubblegum)",
                    fontSize: "18px",
                    color: "#fdfdfd",
                  },

                  // Border style (regular state)
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "30px",
                      borderColor: "#F88944",
                      borderWidth: "2px",
                    },

                    // Hover state
                    "&:hover fieldset": {
                      borderColor: "#ff5722",
                    },

                    // Active border (focus)
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                      borderWidth: "2px",
                    },
                  },
                  // Color of the raised label when focused
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                }}
              />
              <TextField
                id="enter-your-email"
                label="Enter Your Email"
                variant="outlined"
                sx={{
                  width: "100%",

                  // Font style for text inside
                  "& .MuiInputBase-input": {
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-bubblegum)",
                    borderRadius: "30px",
                    color: "#fdfdfd",
                    px: "1rem",
                  },

                  // Font style for label
                  "& .MuiInputLabel-root": {
                    fontFamily: "var(--font-bubblegum)",
                    fontSize: "18px",
                    color: "#fdfdfd",
                  },

                  // Border style (regular state)
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "30px",
                      borderColor: "#F88944",
                      borderWidth: "2px",
                    },

                    // Hover state
                    "&:hover fieldset": {
                      borderColor: "#ff5722",
                    },

                    // Active border (focus)
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                      borderWidth: "2px",
                    },
                  },
                  // Color of the raised label when focused
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                }}
              />
              <TextField
                id="enter-your-number"
                label="Enter Your Number"
                variant="outlined"
                sx={{
                  width: "100%",

                  // Font style for text inside
                  "& .MuiInputBase-input": {
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-bubblegum)",
                    borderRadius: "30px",
                    color: "#fdfdfd",
                    px: "1rem",
                  },

                  // Font style for label
                  "& .MuiInputLabel-root": {
                    fontFamily: "var(--font-bubblegum)",
                    fontSize: "18px",
                    color: "#fdfdfd",
                  },

                  // Border style (regular state)
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "30px",
                      borderColor: "#F88944",
                      borderWidth: "2px",
                    },

                    // Hover state
                    "&:hover fieldset": {
                      borderColor: "#ff5722",
                    },

                    // Active border (focus)
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                      borderWidth: "2px",
                    },
                  },
                  // Color of the raised label when focused
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                }}
              />
            </div>
            <div className="flex w-full h-auto my-5">
              <TextField
                id="choose-a-service"
                select
                label="Choose A Service"
                defaultValue="Regular Cleaning"
                // helperText="Please select your currency"
                sx={{
                  width: "100%",

                  // Font style for text inside
                  "& .MuiInputBase-input": {
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-bubblegum)",
                    borderRadius: "30px",
                    color: "#fdfdfd",
                    px: "1rem",
                  },

                  // Font style for label
                  "& .MuiInputLabel-root": {
                    fontFamily: "var(--font-bubblegum)",
                    fontSize: "18px",
                    color: "#fdfdfd",
                  },

                  // Border style (regular state)
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "30px",
                      borderColor: "#F88944",
                      borderWidth: "2px",
                    },

                    // Hover state
                    "&:hover fieldset": {
                      borderColor: "#ff5722",
                    },

                    // Active border (focus)
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                      borderWidth: "2px",
                    },
                  },
                  // Color of the raised label when focused
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                  // Color of arrow
                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
              >
                {servicesData.map((option) => (
                  <MenuItem
                    key={option.title}
                    value={option.title}
                    sx={{
                      fontFamily: "var(--font-bubblegum)",
                      fontSize: "18px",
                    }}
                  >
                    {option.title}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="w-full h-auto">
              <TextField
                id="your-message-here"
                label="Your Message Here"
                multiline
                rows={4}
                sx={{
                  width: "100%",

                  // Font style for text inside
                  "& .MuiInputBase-input": {
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-bubblegum)",
                    borderRadius: "30px",
                    color: "#fdfdfd",
                    px: "1rem",
                  },

                  // Font style for label
                  "& .MuiInputLabel-root": {
                    fontFamily: "var(--font-bubblegum)",
                    fontSize: "18px",
                    color: "#fdfdfd",
                  },

                  // Border style (regular state)
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "30px",
                      borderColor: "#F88944",
                      borderWidth: "2px",
                    },

                    // Hover state
                    "&:hover fieldset": {
                      borderColor: "#ff5722",
                    },

                    // Active border (focus)
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                      borderWidth: "2px",
                    },
                  },
                  // Color of the raised label when focused
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                }}
              />
            </div>
            <div className="flex w-full h-auto justify-center items-center">
              <Button
                variant="contained"
                size="large"
                sx={{
                  my: 4,
                  minWidth: 200,
                  maxWidth: 250,
                  maxHeight: 50,
                  fontSize: "18px",
                  fontFamily: "var(--font-bubblegum)",
                  borderRadius: "30px",
                  backgroundColor: "#F88944",
                  color: "#000",
                  textTransform: "none", // Uppercase removal
                  "&:hover": {
                    backgroundColor: "#E0712C",
                  },
                }}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex flex-1/3 relative">
            <Image
              src="/Appointment.webp"
              alt="Appointment"
              width={400}
              height={700}
              className="absolute bottom-0 w-full h-auto max-h-180 object-contain"
            />
          </div>
        </ContainerPadding>
      </div>
    </section>
  );
}
