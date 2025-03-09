// export const storeUserData = (token) => {
//    return localStorage.setItem('userToken', token);
//   };
// storage.js
// export const storeUserData = (token) => {
//    localStorage.setItem('userToken', token);
//  };
export const storeUserData = (token, role) => {
  localStorage.setItem('userToken', token);
  localStorage.setItem('userRole', role); // Save user role (student/teacher)
};
