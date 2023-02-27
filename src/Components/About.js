import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımmızda</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          reprehenderit at deserunt minus nisi accusamus ipsum incidunt
          molestias illo minima possimus perferendis fugit, distinctio
          veritatis, cum dolore corporis. Consequuntur, non. Tempora maiores
          harum est repellat iusto pariatur magni cum nostrum laboriosam odio
          dolores, corporis repellendus. Exercitationem illum quasi totam
          dolorem! Vitae commodi perferendis optio esse! Iure quae fugiat
          expedita dolorum. Veniam commodi accusamus nam minus eveniet
          blanditiis quas provident repellendus minima fugiat dolor quam rem
          fuga optio amet, incidunt laboriosam odit unde ea recusandae iusto,
          consequuntur vitae similique. Libero, dicta. Adipisci dolorum quo ut
          sapiente totam, cum quam pariatur eius corporis tempora? Excepturi,
          culpa! Deleniti nihil fugiat quasi nobis eum recusandae excepturi
          quam, dolor, magni id dolorum sequi reprehenderit inventore. Nostrum
          consequuntur nam asperiores nesciunt sit quia, nisi itaque! Cumque,
          non id sapiente quas eveniet delectus. Minus quaerat explicabo ea
          cumque, quisquam sed ducimus accusamus est alias? Deserunt, eligendi
          adipisci?
        </p>
      </div>
    </div>
  );
}

export default About;
