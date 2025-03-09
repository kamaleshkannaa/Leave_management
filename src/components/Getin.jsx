
// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import Image from "../assets/image.png";
// import Logo from "../assets/logo.png";
// import GoogleSvg from "../assets/icons8-google.svg";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { LoginApi } from "../services/api";
// import { storeUserData } from "../services/storage";
// import { isAuthenticated } from "../services/auth";
// import { auth, googleProvider } from "../services/firebase"; // ✅ Import Firebase Auth
// import { signInWithPopup } from "firebase/auth"; // ✅ Import Google Sign-In
// import "./Getin.css";

// export default function Getin() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [redirect, setRedirect] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const [error, setError] = useState({
//     email: { required: false },
//     password: { required: false },
//   });

//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//   });

//   // 🔹 Handle Form Login
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrorMessage(""); // Reset error message
//     let isValid = true;

//     const emailError = { required: !inputs.email };
//     const passwordError = { required: !inputs.password };

//     if (emailError.required || passwordError.required) {
//       isValid = false;
//     }

//     setError({ email: emailError, password: passwordError });

//     if (isValid) {
//       setLoading(true);
//       LoginApi(inputs)
//         .then((response) => {
//           storeUserData(response.data.idToken, "student"); // Store token & role
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

//   // 🔹 Handle Google Login
//   const handleGoogleLogin = async () => {
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       console.log("Google Login Successful:", user);

//       // Store user data in localStorage
//       storeUserData(user.accessToken, "student");

//       setRedirect(true);
//     } catch (error) {
//       console.error("Google Login Error:", error);
//       setErrorMessage("Google login failed. Try again.");
//     }
//     setLoading(false);
//   };

//   const handleInput = (event) => {
//     setInputs({ ...inputs, [event.target.name]: event.target.value });
//   };

//   if (isAuthenticated() || redirect) {
//     return <Navigate to="/dashboard" />;
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
//             <h2>CAMPS (Student Login)</h2>
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
//               {error.email.required && (
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
//                 {error.password.required && (
//                   <span className="text-danger">Password is required.</span>
//                 )}
//               </div>
//               <div className="login-center-options">
//                 <Link to="/register" className="forgot-pass-link">
//                   Are you a Mentor?
//                 </Link>
//               </div>
//               <div className="login-center-buttons">
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Logging in..." : "Log In"}
//                 </button>
//                 <button type="button" onClick={handleGoogleLogin} disabled={loading}>
//                   <img src={GoogleSvg} alt="Google logo" />
//                   {loading ? "Logging in..." : "Log In with Google"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { LoginApi } from "../services/api";
import { storeUserData } from "../services/storage";
import { isAuthenticated } from "../services/auth";
import { auth, googleProvider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";
import "./Getin.css";

export default function Getin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [error, setError] = useState({
    email: { required: false },
    password: { required: false },
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    let isValid = true;

    const emailError = { required: !inputs.email };
    const passwordError = { required: !inputs.password };

    if (emailError.required || passwordError.required) {
      isValid = false;
    }

    setError({ email: emailError, password: passwordError });

    if (isValid) {
      setLoading(true);
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken, "student");
          setLoading(false);
          setRedirect(true);
        })
        .catch(() => {
          setErrorMessage("Invalid email or password.");
          setLoading(false);
        });
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      storeUserData(result.user.accessToken, "student");
      setRedirect(true);
    } catch {
      setErrorMessage("Google login failed. Try again.");
    }
    setLoading(false);
  };

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  if (isAuthenticated() || redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Visual representation" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>CAMPS (Student Login)</h2>
            <p>Please enter your details</p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" onChange={handleInput} placeholder="Email" value={inputs.email} />
              {error.email.required && <span className="text-danger">Email is required.</span>}
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} name="password" onChange={handleInput} placeholder="Password" value={inputs.password} />
                {showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} /> : <FaEye onClick={() => setShowPassword(true)} />}
                {error.password.required && <span className="text-danger">Password is required.</span>}
              </div>
              <div className="login-center-options">
                <Link to="/register" className="forgot-pass-link">Are you a Mentor?</Link>
              </div>
              <div className="login-center-buttons">
                <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Log In"}</button>
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
}
