const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

// Login API
export async function loginApi({
  email,
  password,
}) {

  await delay(1000);

  if (
    email ===
      "admin@getmecab.com" &&
    password ===
      "admin123"
  ) {

    const user = {
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
      JSON.stringify(user)
    );

    return {
      success: true,

      user,
    };
  }

  return {
    success: false,

    message:
      "Invalid email or password",
  };
}