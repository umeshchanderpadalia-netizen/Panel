const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

// Login API
export async function loginApi({
  email,
  password,
}) {

  await delay(900);

  if (
    email ===
      "admin@getmecab.com" &&
    password === "admin123"
  ) {

    return {
      success: true,
      user: {
        name: "Deepanshu",
        role: "Administrator",
        email,
      },
    };
  }

  return {
    success: false,
    message:
      "Invalid email or password",
  };
}