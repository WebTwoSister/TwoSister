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
            <h2 className="h1-adaptive-text text-center lg:text-start text-black">
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
              />
              <TextField
                id="enter-your-email"
                label="Enter Your Email"
                variant="outlined"
              />
              <TextField
                id="enter-your-number"
                label="Enter Your Number"
                variant="outlined"
              />
            </div>
            <div className="flex w-full h-auto my-5">
              <TextField
                id="choose-a-service"
                select
                label="Choose A Service"
                defaultValue="Regular Cleaning"
                // helperText="Please select your currency"
              >
                {servicesData.map((option) => (
                  <MenuItem
                    key={option.title}
                    value={option.title}
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
              />
            </div>
            <div className="flex w-full h-auto justify-center items-center">
              <Button
                variant="contained"
                size="large"
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
