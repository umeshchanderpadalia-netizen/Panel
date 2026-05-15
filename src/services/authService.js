export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (email && password) {

        localStorage.setItem("admin-auth", "true");

        resolve({
          success: true,
        });

      } else {

        reject({
          success: false,
          message: "Invalid credentials",
        });

      }

    }, 1500);

  });
};