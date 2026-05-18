export const loginUser = (
  email,
  password
) => {

  return new Promise(
    (resolve, reject) => {

      setTimeout(() => {

        if (
          email ===
            "admin@getmecab.com" &&
          password ===
            "admin123"
        ) {

          const userData = {
            name: "Deepanshu",

            role:
              "System Administrator",

            email,
          };

          localStorage.setItem(
            "admin-auth",
            "true"
          );

          localStorage.setItem(
            "cab-user",
            JSON.stringify(userData)
          );

          resolve({
            success: true,

            user: userData,
          });

        } else {

          reject({
            success: false,

            message:
              "Invalid email or password",
          });
        }

      }, 1000);
    }
  );
};