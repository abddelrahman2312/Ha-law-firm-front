import React from "react";
import logo from "../assets/logo.jpg";
import "./nav.css";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consult, setDetails] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://ha-law-firm-production.up.railway.app/api/contact",
        {
          name,
          phone,
          consult,
        }
      );
      alert("تم إرسال البيانات بنجاح");
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء الإرسال");
    }
    handleClose();
  };
  return (
    <div className="nav-container">
      <nav className="nav">
        <img
          src={logo}
          alt="شعار الموقع"
          width={50}
          className="logo"
          loading="lazy"
        />

        <ul className="nav-links">
          <li>
            <a href="/">الرئيسية</a>
          </li>
          <li>
            <a href="#service">الخدمات</a>
          </li>
          <li>
            <a href="#contact">اتصل بنا</a>
          </li>
          <li>
            <a href="#about">من نحن</a>
          </li>
        </ul>
        <button className="booking-btn" onClick={handleClickOpen}>
          حجز استشاره
        </button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>استشاره</DialogTitle>
          <DialogContent sx={{ paddingBottom: 0 }}>
            <DialogContentText>
              برجاء ملئ البيانات وسنتواصل معك في اقرب وقت
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="الاسم"
                type="name"
                fullWidth
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="phone"
                name="phone"
                label="رقم الهاتف"
                type="phone"
                fullWidth
                variant="standard"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="consult"
                name="consult"
                label="استفسارك"
                type="text"
                fullWidth
                variant="standard"
                value={consult}
                onChange={(e) => setDetails(e.target.value)}
              />
              <DialogActions>
                <button onClick={handleClose}>الغاء</button>
                <button type="submit">ارسال</button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </nav>
    </div>
  );
}
