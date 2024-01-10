import React, { useEffect, useState } from "react";

import "./PasswordProtected.scss";

import { GET_OPTIONS_ACF } from "../../utils/apiCalls";

const PasswordProtected = ({
  acf,
  handlePasswordProtectedForm,
  setIsPasswordProtected,
}) => {
  const [email, setEmail] = useState(false);

  const getEmail = async () => {
    try {
      const response = await GET_OPTIONS_ACF();
      setEmail(response.data.acf.password_email);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      getEmail();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="pp">
      <div className="pp__bg-cover"></div>
      <div className="pp__container container">
        <div className="pp__form-box">
          <p className="pp__text"> This page is protected by a password.</p>
          {email && (
            <p className="pp__text">
              To request the Password, please email us at:
              <span className="pp__link">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </p>
          )}
          <form
            action=""
            className="pp__form"
            onSubmit={(e) =>
              handlePasswordProtectedForm(e, setIsPasswordProtected, acf)
            }
          >
            <label className="pp__form-label">Password:</label>
            <input className="pp__form-input" type="password" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtected;
