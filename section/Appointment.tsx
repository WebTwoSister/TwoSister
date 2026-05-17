import { useId, useState } from "react";
import Image from "next/image";
import ContainerPadding from "@/components/ContainerPadding";
import NameTitle from "@/components/nameTitle";
// MUI components
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import Button from "@mui/material/Button";
// import data of services
import { servicesData } from "@/app/config";

export default function AppointmentSection() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const messageId = useId();
  const [name, setName] = useState<"" | string>("");
  const [email, setEmail] = useState<"" | string>("");
  const [phone, setPhone] = useState<"" | string>("");
  const [service, setService] = useState<string>(servicesData[0].title);
  const [message, setMessage] = useState<"" | string>("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, phone, service, message };

    try {
      const res = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setOpen(true);
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Error while sending!");
    }
  };

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-title"
      className="w-full h-auto"
    >
      {/* Modal popup */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-3/4 bg-white border-2 border-[#F88944] rounded-3xl shadow-lg p-6">
          <div>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "3rem",
                },
                textAlign: "center",
                color: "#963880",
              }}
            >
              Thank you {name} for your request!
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "2rem",
                },
                textAlign: "center",
                color: "#963880",
                mt: 2,
              }}
            >
              We are already processing your application and will contact you
              shortly.
            </Typography>
          </div>
          <Button
            variant="contained"
            size="large"
            className="mt-4"
            onClick={() => handleClose()}
          >
            OK
          </Button>
        </Box>
      </Modal>
      <ContainerPadding>
        <div className="flex w-full h-auto lg:pr-[35%]">
          <div className="flex w-full flex-col items-center py-5 sm:py-20">
            {/* Subtitle with underline */}
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
          <form onSubmit={handleSubmit} className="flex flex-col flex-2/3">
            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
              <TextField
                id={nameId}
                label="Enter Your Name"
                variant="outlined"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id={emailId}
                label="Enter Your Email"
                variant="outlined"
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id={phoneId}
                label="Enter Your Number"
                variant="outlined"
                required
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => {
                  // only numbers allowed
                  const value = e.target.value.replace(/\D/g, "");
                  const sliceValue = value.slice(0, 10); // max 10 digits
                  setPhone(sliceValue);
                }}
                inputProps={{
                  inputMode: "numeric", // mobile phones will only have a numeric keypad
                  pattern: "[0-9]*",
                }}
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
                  value={service}
                  onChange={(e) => setService(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
