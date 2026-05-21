const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const ADMIN_CREDENTIALS = {
  email: "admin@getmecab.com",
  password: "admin123",
};

export async function loginApi({
  email,
  password,
}) {
  await delay(1000);

  const normalizedEmail =
    email.trim().toLowerCase();

  const normalizedPassword =
    password.trim();

  const isValidUser =
    normalizedEmail ===
      ADMIN_CREDENTIALS.email &&
    normalizedPassword ===
      ADMIN_CREDENTIALS.password;

  if (!isValidUser) {
    return {
      success: false,
      message:
        "Invalid email or password",
    };
  }

  const user = {
    id: 1,
    name: "Deepanshu",
    role:
      "System Administrator",
    email: normalizedEmail,
  };

  localStorage.setItem(
    "admin-auth",
    "true"
  );

  localStorage.setItem(
    "cab-user",
    JSON.stringify(user)
  );

  return {
    success: true,
    user,
    token:
      "mock-jwt-token-getmecab",
  };
}

export async function logoutApi() {
  await delay(400);

  localStorage.removeItem(
    "admin-auth"
  );

  localStorage.removeItem(
    "cab-user"
  );

  return {
    success: true,
  };
}