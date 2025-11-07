import { Input } from "@/components/ui/input";
import { Copy, Eye, EyeOff, Check } from "lucide-react";
import React, { useState } from "react";

const Credentials = () => {
  const [showKey, setShowKey] = useState(false);
  const [showUrl, setShowUrl] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (id: string) => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) {
      await navigator.clipboard.writeText(input.value);
      setCopied(id);
      setTimeout(() => setCopied(null), 1000);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">API Credentials</h3>
        <p className="text-gray-700 font-normal">
          Securely stored credentials for Stripe. Never share these with
          untrusted parties.
        </p>
      </div>

      {/* API Key */}
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="api-key">API Key</label>
        <div className="py-1 border-1 border-gray-700 rounded-full relative px-2">
          <Input
            type={showKey ? "text" : "password"}
            id="api-key"
            defaultValue="sk_test_123456789"
            className="focus:outline-0 focus:border-none focus:border-gray-600 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none shadow-none border-none border-gray-600"
          />
          <div className="flex gap-3 items-center absolute top-1/2 -translate-y-1/2 right-4">
            {showKey ? (
              <Eye
                onClick={() => setShowKey(false)}
                className="w-5 h-5 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setShowKey(true)}
                className="w-5 h-5 cursor-pointer"
              />
            )}
            {copied === "api-key" ? (
              <Check className="w-5 h-5 text-green-500 transition-all duration-300" />
            ) : (
              <Copy
                onClick={() => handleCopy("api-key")}
                className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-all duration-200"
              />
            )}
          </div>
        </div>
        <span
          className={`absolute right-0 -bottom-5 text-xs text-green-600 transition-opacity duration-500 ${
            copied === "api-key" ? "opacity-100" : "opacity-0"
          }`}
        >
          Copied!
        </span>
      </div>

      {/* Stripe URL */}
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="stripe-url">Stripe URL</label>
        <div className="py-1 border-1 border-gray-700 rounded-full relative px-2">
          <Input
            type={showUrl ? "text" : "password"}
            id="stripe-url"
            defaultValue="https://api.stripe.com"
            className="focus:outline-0 focus:border-none focus:border-gray-600 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none shadow-none border-none border-gray-600"
          />
          <div className="flex gap-3 items-center absolute top-1/2 -translate-y-1/2 right-4">
            {showUrl ? (
              <Eye
                onClick={() => setShowUrl(false)}
                className="w-5 h-5 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setShowUrl(true)}
                className="w-5 h-5 cursor-pointer"
              />
            )}
            {copied === "stripe-url" ? (
              <Check className="w-5 h-5 text-green-500 transition-all duration-300" />
            ) : (
              <Copy
                onClick={() => handleCopy("stripe-url")}
                className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-all duration-200"
              />
            )}
          </div>
        </div>
        <span
          className={`absolute right-0 -bottom-5 text-xs text-green-600 transition-opacity duration-500 ${
            copied === "stripe-url" ? "opacity-100" : "opacity-0"
          }`}
        >
          Copied!
        </span>
      </div>
    </div>
  );
};

export default Credentials;
