// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import Image from "../assets/image.png";
// import Logo from "../assets/logo.png";
// import GoogleSvg from "../assets/icons8-google.svg";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { LoginApi } from "../services/api"; // Ensure this path is correct
// import { storeUserData } from "../services/storage";
// import { isAuthenticated } from "../services/auth";
// import "./Getin.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [redirect, setRedirect] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const [error, setError] = useState({
//     email: false,
//     password: false,
//   });

//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrorMessage(""); // Clear previous errors
//     let isValid = true;

//     const updatedErrors = {
//       email: !inputs.email,
//       password: !inputs.password,
//     };

//     if (updatedErrors.email || updatedErrors.password) {
//       isValid = false;
//     }

//     setError(updatedErrors);

//     if (isValid) {
//       setLoading(true);
//       LoginApi(inputs)
//         .then((response) => {
//           storeUserData(response.data.idToken, "teacher"); // Store token & role
//           setLoading(false);
//           setRedirect(true);
//         })
//         .catch((error) => {
//           console.error("Login error:", error);
//           setErrorMessage("Invalid email or password.");
//           setLoading(false);
//         });
//     }
//   };

//   const handleInput = (event) => {
//     setInputs({ ...inputs, [event.target.name]: event.target.value });
//   };

//   if (isAuthenticated() || redirect) {
//     return <Navigate to="/teacher-dashboard" />;
//   }

//   return (
//     <div className="login-main">
//       <div className="login-left">
//         <img src={Image} alt="Left visual" />
//       </div>
//       <div className="login-right">
//         <div className="login-right-container">
//           <div className="login-logo">
//             <img src={Logo} alt="Logo" />
//           </div>
//           <div className="login-center">
//             <h2>CAMPS (Teacher Login)</h2>
//             <p>Please enter your details</p>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={handleInput}
//                 placeholder="Email"
//                 value={inputs.email}
//               />
//               {error.email && (
//                 <span className="text-danger">Email is required.</span>
//               )}
//               <div className="pass-input-div">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   onChange={handleInput}
//                   placeholder="Password"
//                   value={inputs.password}
//                 />
//                 {showPassword ? (
//                   <FaEyeSlash onClick={() => setShowPassword(false)} />
//                 ) : (
//                   <FaEye onClick={() => setShowPassword(true)} />
//                 )}
//                 {error.password && (
//                   <span className="text-danger">Password is required.</span>
//                 )}
//               </div>
//               <div className="login-center-options">
//                 <Link to="/getin" className="forgot-pass-link">
//                   Are you a Student?
//                 </Link>
//               </div>
//               <div className="login-center-buttons">
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Logging in..." : "Log In"}
//                 </button>
//                 <button type="button">
//                   <img src={GoogleSvg} alt="Google logo" />
//                   Log In with Google
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { LoginApi } from "../services/api";
import { storeUserData } from "../services/storage";
import { isAuthenticated } from "../services/auth";
import { auth, googleProvider } from "../services/firebase"; // ✅ Import Firebase Auth
import { signInWithPopup } from "firebase/auth"; // ✅ Import Google Sign-In
import "./Getin.css";

const TeacherLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  // 🔹 Handle Manual Login
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous errors
    let isValid = true;

    const updatedErrors = {
      email: !inputs.email,
      password: !inputs.password,
    };

    if (updatedErrors.email || updatedErrors.password) {
      isValid = false;
    }

    setError(updatedErrors);

    if (isValid) {
      setLoading(true);
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken, "teacher"); // Store token & role
          setLoading(false);
          setRedirect(true);
        })
        .catch((error) => {
          console.error("Login error:", error);
          setErrorMessage("Invalid email or password.");
          setLoading(false);
        });
    }
  };

  // 🔹 Handle Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Login Successful:", user);

      // Store user data in localStorage
      storeUserData(user.accessToken, "teacher");

      setRedirect(true);
    } catch (error) {
      console.error("Google Login Error:", error);
      setErrorMessage("Google login failed. Try again.");
    }
    setLoading(false);
  };

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  if (isAuthenticated() || redirect) {
    return <Navigate to="/teacher-dashboard" />;
  }

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Left visual" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>CAMPS (Teacher Login)</h2>
            <p>Please enter your details</p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                placeholder="Email"
                value={inputs.email}
              />
              {error.email && (
                <span className="text-danger">Email is required.</span>
              )}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleInput}
                  placeholder="Password"
                  value={inputs.password}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(true)} />
                )}
                {error.password && (
                  <span className="text-danger">Password is required.</span>
                )}
              </div>
              <div className="login-center-options">
                <Link to="/getin" className="forgot-pass-link">
                  Are you a Student?
                </Link>
              </div>
              <div className="login-center-buttons">
                <button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Log In"}
                </button>
                <button type="button" onClick={handleGoogleLogin} disabled={loading}>
                  <img src={GoogleSvg} alt="Google logo" />
                  {loading ? "Logging in..." : "Log In with Google"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
