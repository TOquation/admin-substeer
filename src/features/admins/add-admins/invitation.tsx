"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Copy, Check, LucideFilePlus2 } from "lucide-react";
import { UploadDialog } from "@/components/custom-ui/upload-dialog";
import { SuccessDialog } from "@/components/custom-ui/success-dialog";

const AdminInvite = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [copied, setCopied] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const inviteLink = "invite.Organization.dept/oqjueLskduecvsAuweV...";

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = (files: File[]) => {
    console.log("Files uploaded:", files);
    files.forEach((file) => {
      console.log(`- ${file.name} (${(file.size / 1024).toFixed(2)} KB)`);
    });
    // Handle file upload logic here

    // Show success dialog after upload
    setIsSuccessDialogOpen(true);
  };

  const handleSendInvitation = () => {
    console.log("Sending invitation to:", emailAddress);
    // Handle send invitation logic here

    // Show success dialog after sending
    setIsSuccessDialogOpen(true);
  };

  const handleSuccessContinue = () => {
    // Handle continue action
    console.log("Continue clicked");
    // Reset form or navigate somewhere
    setEmailAddress("");
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email-address" className="text-sm text-neutral-700">
            Email Address
          </Label>
          <Input
            id="email-address"
            type="text"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="E.g name@example.com, name@example.com"
            className="rounded-full border-2 border-neutral-300 px-6 py-6 text-neutral-500 placeholder:text-neutral-400 focus-visible:ring-0 shadow-none"
          />
          <p className="text-xs text-neutral-500 ml-4">
            separate each email address by a comma ","
          </p>
        </div>

        <div className="flex items-center justify-center">
          <span className="text-sm text-neutral-400">Or</span>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setIsUploadDialogOpen(true)}
            className="flex items-center gap-2 px-8 py-3 bg-green-50 text-gray-800 rounded-lg cursor-pointer hover:bg-green-100 transition-colors border-[#B4FEC7] border"
          >
            <LucideFilePlus2 className="w-4 h-4" />
            <span className="text-sm font-medium">Upload file</span>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <span className="text-sm text-neutral-400">Or</span>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-neutral-700">
            Copy Invite Link
          </h3>
          <div className="relative overflow-hidden">
            <Input
              type="text"
              value={inviteLink}
              readOnly
              className="rounded-full border-2 border-neutral-300 px-6 py-6 pr-24 text-neutral-500 bg-neutral-50 focus-visible:ring-0 focus-visible:border-ring-0 shadow-none"
            />
            <Button
              onClick={handleCopy}
              variant="ghost"
              className="absolute p-6 right-0 top-1/2 -translate-y-1/2 text-neutral-700 rounded-full hover:opacity-85 hover:bg-[#E0E0E0] hover:cursor-pointer bg-[#E0E0E0]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Copied
                </>
              ) : (
                "Copy"
              )}
            </Button>
          </div>
        </div>

        <div className="pt-4">
          <Button
            onClick={handleSendInvitation}
            disabled={!emailAddress.trim()}
            className="w-full rounded-lg py-6 bg-neutral-900 text-green-400 hover:bg-neutral-800 font-medium"
          >
            Send Invitation
          </Button>
        </div>
      </div>

      <UploadDialog
        open={isUploadDialogOpen}
        onOpenChange={setIsUploadDialogOpen}
        onUpload={handleFileUpload}
        maxFiles={10}
      />

      <SuccessDialog
        open={isSuccessDialogOpen}
        onOpenChange={setIsSuccessDialogOpen}
        onContinue={handleSuccessContinue}
        title="Invitation Sent"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim placerat nunc laoreet sit. Tempus"
        buttonText="Continue"
      />
    </>
  );
};

export default AdminInvite;
