function Toast({ message }) {
  return (
    <div className="fixed top-6 right-6 z-[100] bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg">

      {message}

    </div>
  );
}

export default Toast;