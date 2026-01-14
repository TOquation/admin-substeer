"use client";
import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Plus, X } from "lucide-react";

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpload?: (files: File[]) => void;
  title?: string;
  acceptedFormats?: string;
  maxFiles?: number;
}

export function UploadDialog({
  open,
  onOpenChange,
  onUpload,
  title = "Upload member emails",
  acceptedFormats = ".csv, .xls, .xlsx",
  maxFiles = 10,
}: UploadDialogProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files);
    const validFiles = newFiles.filter((file) => {
      const extension = "." + file.name.split(".").pop()?.toLowerCase();
      return acceptedFormats.includes(extension);
    });

    const combinedFiles = [...selectedFiles, ...validFiles];
    const uniqueFiles = combinedFiles.filter(
      (file, index, self) =>
        index === self.findIndex((f) => f.name === file.name)
    );

    const limitedFiles = uniqueFiles.slice(0, maxFiles);
    setSelectedFiles(limitedFiles);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    setSelectedFiles(selectedFiles.filter((file) => file !== fileToRemove));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSendInvitation = () => {
    if (selectedFiles.length > 0 && onUpload) {
      onUpload(selectedFiles);
      setSelectedFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      onOpenChange(false);
    }
  };

  const handleClose = () => {
    setSelectedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onOpenChange(false);
  };

  const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[580px] md:max-w-[680px] xl:max-w-[780px] font-fredoka [&>button]:hidden">
        <div className="absolute right-4 top-4 z-50">
          <button
            onClick={handleClose}
            className="rounded-md border-2 border-neutral-300 p-1.5 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-4 h-4 text-neutral-700" />
          </button>
        </div>

        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div className="py-6">
          <div className="mx-20 xl:mx-24 mb-2">
            <h2 className="text-neutral-500 text-xl font-normal">{title}</h2>
          </div>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative bg-green-50 rounded-3xl py-8 flex flex-col items-center justify-center space-y-4 transition-colors mx-20 xl:mx-24 border-2 ${
              isDragging
                ? "bg-green-100 border-green-400"
                : "border-neutral-200"
            }`}
          >
            <div className="relative">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-neutral-900" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center border-4 border-green-50">
                <Plus className="w-4 h-4 text-white" />
              </div>
            </div>

            <p className="text-sm text-neutral-600 text-center italic">
              Drag and drop csv, xls, xlsx files here
            </p>

            <div className="flex items-center gap-4 w-full px-8">
              <div className="flex-1 h-px bg-neutral-300"></div>
              <span className="text-sm text-neutral-400">OR</span>
              <div className="flex-1 h-px bg-neutral-300"></div>
            </div>

            <Button
              onClick={handleBrowseClick}
              variant="outline"
              className="rounded-lg px-8 py-5 border-neutral-800 text-neutral-800 hover:bg-neutral-100 cursor-pointer shadow-none"
            >
              Browse files
            </Button>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept={acceptedFormats}
              onChange={handleFileInputChange}
              multiple
            />
          </div>

          {/* Selected Files Display */}
          {selectedFiles.length > 0 && (
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between px-2">
                <p className="text-sm font-medium text-neutral-700">
                  {selectedFiles.length} file
                  {selectedFiles.length > 1 ? "s" : ""} selected
                </p>
                <p className="text-xs text-neutral-500">
                  Total: {(totalSize / 1024).toFixed(2)} KB
                </p>
              </div>

              {/* Grid Layout - 1 column on mobile, 3 columns on md and up */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-20 overflow-y-auto">
                {selectedFiles.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="p-3 bg-green-50 rounded-lg flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <FileText className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-neutral-700 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFile(file)}
                      className="text-red-500 hover:text-red-700 flex-shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedFiles.length >= maxFiles && (
            <p className="mt-2 text-xs text-orange-500 text-center">
              Maximum {maxFiles} files allowed
            </p>
          )}
        </div>

        <div className="flex justify-center pb-4">
          <Button
            onClick={handleSendInvitation}
            disabled={selectedFiles.length === 0}
            className="rounded-lg px-12 py-6 bg-neutral-900 text-[#31FC65] hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Invitation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
