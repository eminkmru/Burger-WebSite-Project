import { FormLabel, Input, InputLabel, TextareaAutosize } from "@mui/material";
import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <InputLabel>Ad Soyad</InputLabel>
          <Input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          ></Input>{" "}
          <InputLabel> Email</InputLabel>
          <Input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          ></Input>
          <InputLabel>Mesajınız</InputLabel>
          <textarea
            rows="6"
            name="name"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
