import React from "react";
import "./Footer.css";
import { BiPhoneCall } from "react-icons/bi";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer text-center" id="contacto">
      <div className="row">
        <div className="col-lg-6 info">
          <p>JHOHAN ESTIWAR PALACIOS MENA</p>
          <p>
            <strong>
              {" "}
              <BiPhoneCall />
            </strong>
            : 3245645465 - 3116770929
          </p>
        </div>

        <div className="col-lg-6">
          <a href="" target="__blank">
            {" "}
            <span className="iconos">
              <AiFillTwitterCircle />
            </span>
          </a>
          <a href="" target="__blank">
            {" "}
            <span className="iconos">
              <AiOutlineLinkedin />
            </span>
          </a>
          <a href="" target="__blank">
            {" "}
            <span className="iconos">
              <AiFillInstagram />
            </span>
          </a>
          <a href="" target="__blank">
            {" "}
            <span className="iconos">
              <AiOutlineMail />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
