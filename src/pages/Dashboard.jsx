import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AlertModal from "../components/AlertModal";
import TransactionItem from "../components/TransactionItem";
import UserInfo from "../components/UserInfo";
import GiveawayInfo from "../components/GiveawayInfo";

export default function Dashboard() {
  const stored = JSON.parse(localStorage.getItem("hk_user") || "null");
  const [user, setUser] = useState(stored);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("hk_user") || "null");
    setUser(u);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("hk_token");
    localStorage.removeItem("hk_user");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src="/highkey-logo.png" className="w-10" alt="logo" />
          <h2 className="text-xl font-bold text-hkgold">HIGHKEY GIVEAWAY</h2>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-700 border px-3 py-1 rounded"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="space-y-4 max-w-xl mx-auto">
        <div className="bg-gray-50 p-5 rounded-2xl shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Available Balance</p>
              <p className="text-3xl font-bold text-green-600">
                ${user?.balance?.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-sm">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12h20" stroke="#4B5563" strokeWidth="1.5"></path>
                  <path d="M8 6v12" stroke="#4B5563" strokeWidth="1.5"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Recent Transactions</h3>
            <div className="divide-y">
              {user?.transactions?.map((t, i) => (
                <TransactionItem key={i} t={t} />
              ))}
            </div>
          </div>

          <button
            onClick={() => setAlertVisible(true)}
            className="mt-4 w-full bg-hkgold text-white py-3 rounded-lg font-semibold"
          >
            Withdraw
          </button>
        </div>

        <UserInfo user={user} />

        <GiveawayInfo />
      </main>

      {alertVisible && <AlertModal setAlertVisible={setAlertVisible} />}
    </div>
  );
}
