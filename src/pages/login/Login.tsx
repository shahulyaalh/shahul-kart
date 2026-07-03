import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/auth.services";
import { useAuth } from "../../features/auth/auth.context";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const user = await loginUser({
        username,
        password,
      });

      login(user);
      toast.success("Login Successfully Shahul!!!!!");

      navigate("/");
    } catch {
      setError("Invalid username or password");
      toast.error("Invalid Username or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg p-3 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="mt-6 text-sm text-gray-600">
          <p className="font-semibold">Demo Credentials</p>
          <p>
            Username: <b>emilys</b>
          </p>
          <p>
            Password: <b>emilyspass</b>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
