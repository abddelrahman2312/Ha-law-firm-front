import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";
export default function Service() {
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
    <div className="service" id="service">
      <h1>الخدمات</h1>
      <div className="service-list">
        <div className="service-item">
          <h3>مجال أعمال الشركات</h3>
          <p>
            شركات الأموال – شركات الأشخاص . تأسيس الشركات وتعديل عقود الشركات .
            وضع اللوائح الداخلية للشركات . تأسيس و تنظيم ووضع قواعد العمل
            للإدارات القانونية للشركات . صياغة و توثيق و إعتماد محاضر إجتماعات
            مجالس الإدارة و الجمعيات العمومية للشركات .
          </p>
          <button className="btn" onClick={handleClickOpen}>
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
        </div>
        <div className="service-item">
          <h3>مجال العقود والإتفاقيات</h3>
          <p>
            صياغة وتحريرومراجعة كافة انواع العقود والاتفاقيات وتوثيقها . صياغة
            وتحريرالعقود الخاصة بالشركات المساهمة . صياغة الاتفاقيات العامة
            الغير مباشرة بشأن الشركات والضمانات الخاصة بذلك . تحرير وصياغة
            العقود الدولية فيما يخص الاتفاق على تكوين وإنشاء الشركات متعددة
            الجنسيات . صياغة العقود الخاصة بحق إستغلال الاسماء والعلامات
            التجارية الخاصة بالشركات الدولية بمصر.
          </p>
          <button className="btn" onClick={handleClickOpen}>
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
        </div>
      </div>
    </div>
  );
}
