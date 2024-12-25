"use client";
import React from "react";

const DeleteAccount = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold text-gray-800">Delete Account</h1>
      </div>
      <div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete your account? This action is
          irreversible and all your data will be permanently removed.
        </p>
        <ul className="space-y-3 list-disc list-inside text-gray-900 font-semibold">
          <li>
            You&apos;ll lose your order history, saved details, Myntra Credit,
            MynCash, SuperCoins and all other coupons and benefits.
          </li>
          <p className="font-normal pl-5">
            Any account related benefits will be forfeited once the account is
            deleted and will no longer be available to you. You cannot recover
            the same. However, you can always create a new account. By deleting
            your account, you acknowledge you have read our Privacy Policy.
          </p>
          <li>
            Any pending orders, exchanges, returns or refunds will no longer be
            accessible via your account.
          </li>
          <li>
            Myntra may not extend New User coupon if an account is created with
            the same mobile number or email id.
          </li>
          <li>
            Myntra may refuse or delay deletion in case there are any pending
            grievances related to orders, shipments, cancellations or any other
            services offered by Myntra.
          </li>
          <li>
            Myntra may retain certain data for legitimate reasons such as
            security, fraud prevention, future abuse, regulatory compliance
            including exercise of legal rights or comply with legal orders under
            applicable laws.
          </li>
        </ul>
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600 rounded border-gray-300 focus:ring-red-500"
            />
            <span className="text-gray-600">
              I understand the consequences of deleting my account.
            </span>
          </label>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <button
            disabled
            className="w-1/2 opacity-20 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition cursor-not-allowed"
          >
            Delete Account anyway
          </button>
          <button className="w-1/2 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition">
            Keep Account
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
