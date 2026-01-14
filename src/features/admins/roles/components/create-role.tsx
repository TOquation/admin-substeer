"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface CreateRoleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateRole: (roleName: string) => void;
}

export function CreateRoleDialog({
  open,
  onOpenChange,
  onCreateRole,
}: CreateRoleDialogProps) {
  const [roleName, setRoleName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roleName.trim()) {
      onCreateRole(roleName.trim());
      setRoleName("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] font-fredoka [&>button]:hidden">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-neutral-700 text-lg font-medium">
              Add Custom Role
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor="role-name" className="text-neutral-700 text-sm">
                Name
              </Label>
              <Input
                id="role-name"
                name="roleName"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                placeholder="Add a role name"
                className="rounded-full border-neutral-300 px-6 py-6 text-neutral-500 placeholder:text-neutral-400 focus-visible:ring-0 shadow-none"
              />
            </div>
          </div>
          <DialogFooter className="gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="rounded-lg px-8 py-5 text-neutral-700 border-neutral-300 shadow-none"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={!roleName.trim()}
              className="rounded-lg px-8 py-5 bg-neutral-900 text-[#04FB43] hover:bg-neutral-800 shadow-none"
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
