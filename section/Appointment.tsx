import { useId } from "react";
import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
// import data of services
import { servicesData } from "@/app/config";

export default function AppointmentSection() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const messageId = useId();

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-title"
      className="w-full h-auto"
    >
      <ContainerPadding>
        <div className="flex w-full h-auto lg:pr-[35%]">
          <div className="flex w-full flex-col items-center py-5 sm:py-20">
            {/* Name of title with underline */}
            <NameTitle name="Appointment" color="text-black" />
            {/* Title */}
            <h2
              id="appointment-title"
              className="h1-adaptive-text text-center lg:text-start text-black"
            >
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
          <form className="flex flex-col flex-2/3">
            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
              <TextField
                id={nameId}
                label="Enter Your Name"
                variant="outlined"
                required
                name="name"
              />
              <TextField
                id={emailId}
                label="Enter Your Email"
                variant="outlined"
                type="email"
                required
                name="email"
              />
              <TextField
                id={phoneId}
                label="Enter Your Number"
                variant="outlined"
                required
                type="tel"
                name="phone"
              />
            </div>
            <div className="flex w-full h-auto my-5">
              <FormControl fullWidth>
                <InputLabel id="service-select-label">
                  Choose A Service
                </InputLabel>

                <Select
                  labelId="service-select-label"
                  id="service-select-component"
                  label="Choose A Service" // Required for correct cutout in the frame (Outline)
                  defaultValue="Regular Cleaning"
                  name="service"
                >
                  {servicesData.map((option) => (
                    <MenuItem key={option.title} value={option.title}>
                      {option.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="w-full h-auto">
              <TextField
                id={messageId}
                label="Your Message Here"
                multiline
                rows={4}
                name="message"
              />
            </div>
            <div className="flex w-full h-auto justify-center items-center">
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </div>
          </form>
          <div className="hidden lg:flex flex-1/3 relative" aria-hidden="true">
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
