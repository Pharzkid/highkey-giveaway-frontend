import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("Marciem1966@gmail.com");
  const [password, setPassword] = useState("Marciem123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await API.post("/api/auth/login", { email, password });
      console.log(res.data); // 👀 Check what backend returns

      if (res.data.user) {
        localStorage.setItem("hk_token", res.data.token);
        localStorage.setItem("hk_user", JSON.stringify(res.data.user));
        navigate("/dashboard"); // ✅ Redirect here
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <img src="/highkey-logo.png" alt="logo" className="mx-auto w-28" />
          <h1 className="text-2xl font-bold text-hkgold mt-3">
            HIGHKEY GIVEAWAY
          </h1>
        </div>

        <form onSubmit={handle} className="bg-gray-50 p-6 rounded-2xl shadow">
          {error && <div className="mb-3 text-red-600 text-sm">{error}</div>}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mb-3"
            type="email"
            required
          />
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mb-4"
            type="password"
            required
          />
          <button
            type="submit"
            className="w-full bg-hkgold text-white py-2 rounded-lg font-semibold shadow"
            disabled={loading}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
