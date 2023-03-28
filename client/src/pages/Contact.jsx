import React from "react";

import { GrHomeRounded } from "react-icons/gr";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";

import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
  return (
    <>
      <Meta title="Contacts" />
      <BreadCrumb title="Contacts" />

      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50107.177917410896!2d105.83495387050854!3d21.02314973423887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1679755351116!5m2!1svi!2s"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact Us</h3>
                <form action="" className="d-flex flex-column gap-20">
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone number"
                    />
                    <label htmlFor="phone">Phone number</label>
                  </div>
                  <div className="form-floating mb-5">
                    <textarea
                      id="conmments"
                      className="w-100 form-control"
                      cols="30"
                      rows="5"
                      placeholder="Comments"
                    ></textarea>
                    <label htmlFor="conmments">Comments</label>
                  </div>
                  <div>
                    <button type="submit" className="button mt-5">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <GrHomeRounded className="fs-5" />
                      <address className="mb-0">
                        277, Near village chopal, Mandaura, Sonipat, Haryana
                      </address>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <FiPhoneCall className="fs-5" />
                      <a href="tel:+84969958007">+84 969-958-007</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <FiMail className="fs-5" />
                      <a href="mailto:duongpc99@gmail.com">
                        duongpc99@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BsInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
