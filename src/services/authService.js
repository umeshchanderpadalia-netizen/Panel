const ADMIN_EMAIL =
  "admin@getmecab.com";

const ADMIN_PASSWORD =
  "admin123";

// Save Session
const saveSession = (
  userData
) => {

  localStorage.setItem(
    "admin-auth",
    "true"
  );

  localStorage.setItem(
    "cab-user",
    JSON.stringify(userData)
  );
};

// Clear Session
export const logoutUser =
  () => {

    localStorage.removeItem(
      "admin-auth"
    );

    localStorage.removeItem(
      "cab-user"
    );
  };

// Get Current User
export const getCurrentUser =
  () => {

    const user =
      localStorage.getItem(
        "cab-user"
      );

    return user
      ? JSON.parse(user)
      : null;
  };

// Check Auth
export const isAuthenticated =
  () => {

    return (
      localStorage.getItem(
        "admin-auth"
      ) === "true"
    );
  };

// Login
export const loginUser =
  async (
    email,
    password
  ) => {

    return new Promise(
      (
        resolve,
        reject
      ) => {

        setTimeout(() => {

          // Validation
          if (
            !email ||
            !password
          ) {

            reject({
              success: false,
              message:
                "Email and password are required",
            });

            return;
          }

          // Auth Check
          if (
            email ===
              ADMIN_EMAIL &&
            password ===
              ADMIN_PASSWORD
          ) {

            const userData = {

              id: 1,

              name:
                "Deepanshu",

              role:
                "System Administrator",

              email,

              permissions: [
                "dashboard",
                "bookings",
                "drivers",
                "vendors",
                "reports",
                "ledger",
                "settings",
              ],
            };

            saveSession(
              userData
            );

            resolve({
              success: true,
              user: userData,
              token:
                "gmc-admin-token",
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