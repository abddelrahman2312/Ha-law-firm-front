import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";
const contactOptions = [
  {
    id: 1,
    icon: <MdEmail />,
    title: "Email",
    info: "hany_a2005@hotmail.com",
    link: "mailto:hany_a2005@hotmail.com",
  },
  {
    id: 2,
    icon: <FaFacebookMessenger />,
    title: "Messenger",
    info: "HA Law Firm",
    link: "https://www.facebook.com/hany.abdel.aziz.688521",
  },
  {
    id: 3,
    icon: <IoLogoWhatsapp />,
    title: "Whatsapp",
    info: "+201025202531",
    link: "https://api.whatsapp.com/send?phone=201025202531",
  },
];

function Contact() {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_a9b349f",
      "template_0ihm748",
      form.current,
      "ipjIVXbdJrTFjUpfq"
    );
    if (e.target === form.current) {
      e.target.reset();
    }
  };
  // snackbar
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Messege Sent"
        action={action}
      />
      <section className="contact" id="contact">
        <div className="top-section">
          <h1>للتواصل</h1>
        </div>
        <div className="container contact-container">
          <div className="contact-options">
            {contactOptions.map(({ id, icon, title, info, link }) => (
              <article key={id} className="contact-option">
                {icon}
                <h4>{title}</h4>
                <h5>{info}</h5>
                <a href={link} target="_blank">
                  Send Messege
                </a>
              </article>
            ))}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="الاسم" name="name" />
            <input type="email" placeholder="البريد الالكتروني" name="email" />
            <textarea
              rows={10}
              name="message"
              id=""
              placeholder="استفسارك"
            ></textarea>
            <button className="btn btn-primary" onClick={handleClick}>
              Send Messege
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Contact;
