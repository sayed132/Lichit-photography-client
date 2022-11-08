import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast, { ToastBar } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
  const { signIn, setLoading, providerLogin, githubLogin , setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [showPass, setShowPass] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => console.error(error))
  }

  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => console.error(error))
  }

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
    signIn(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        toast.success('success fully LogeIn.')
        form.reset();
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
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          onChange={handleEmailChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="password"
            onChange={handlePasswordChange}
          />
          <div className="absolute right-5 top-5" onClick={() => setShowPass(!showPass)}>
            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <button>Login</button>
        {errors.general && <p className="error-message">{errors.general}</p>}
        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button onClick={handleGoogleSignIn}><FcGoogle className='text-2xl' /> &nbsp;Google</button>
      <button onClick={handleGithubLogin}><FaGithub className='text-2xl'/> &nbsp; Github </button>
    </div>
  );
};

export default Login;