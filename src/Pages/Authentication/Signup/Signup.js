// import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { SiGnuprivacyguard } from "react-icons/si";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Login/Login.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {
  const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [showPass, setShowPass] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(name, photoURL);
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL)
        toast.success('success fully register, Please Login Now.')
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setErrors({ ...errors, general: err.message });
        form.reset();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }

    updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.error(error));
}

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const lengthError = password.length < 6;

    if (lengthError) {
      setErrors({ ...errors, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };
  return (
    <div className="login-container">
      <div className="login-title">Sign up <SiGnuprivacyguard /></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name='name'
          placeholder='Your Full Name'
        />
        <input
          name="photoURL" 
          type="text" 
          placeholder="Phot URL"
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          // value={userInfo.email}
          onChange={handleEmailChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="password"
            // value={userInfo.password}
            onChange={handlePasswordChange}
          />
          <div className="absolute right-5 top-5" onClick={() => setShowPass(!showPass)}>
            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button>Sign up</button>
        {errors.general && <p className="error-message">{errors.general}</p>}
        <p>
          Already LoggedIn? <Link to="/login">Sign In first</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;