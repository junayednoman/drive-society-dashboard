import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <main className="mx-auto flex flex-col items-center justify-center">
      <div className="h-screen grid grid-cols-2 w-full">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://i.postimg.cc/VvBQ2Jt5/login-image.png)`,
          }}
        ></div>
        <div className="flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
