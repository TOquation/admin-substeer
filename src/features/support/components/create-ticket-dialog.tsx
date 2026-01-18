"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

interface CreateTicketDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateTicket: (ticket: {
    name: string;
    assignTo: string;
    priority: string;
  }) => void;
}

const teamMembers = [
  { id: "1", name: "Ms. Chris Jakubowski", avatar: "/avatars/chris.jpg" },
  { id: "2", name: "Francisco Lang", avatar: "/avatars/francisco.jpg" },
  { id: "3", name: "Monica Hauck", avatar: "/avatars/monica.jpg" },
];

const priorities = [
  { value: "low", label: "Low", color: "text-green-600" },
  { value: "medium", label: "Medium", color: "text-yellow-600" },
  { value: "high", label: "High", color: "text-red-600" },
];

export function CreateTicketDialog({
  open,
  onOpenChange,
  onCreateTicket,
}: CreateTicketDialogProps) {
  const [ticketName, setTicketName] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [priority, setPriority] = useState("");
  const [memberSearch, setMemberSearch] = useState("");

  const filteredMembers = teamMembers.filter((member) =>
    member.name.toLowerCase().includes(memberSearch.toLowerCase())
  );

  const handleSubmit = () => {
    if (ticketName.trim() && assignTo && priority) {
      onCreateTicket({
        name: ticketName.trim(),
        assignTo,
        priority,
      });
      setTicketName("");
      setAssignTo("");
      setPriority("");
      setMemberSearch("");
      onOpenChange(false);
    }
  };

  const handleAssignToChange = (memberId: string) => {
    setAssignTo(memberId);
    setMemberSearch("");
  };

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    return parts
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[680px] font-fredoka [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-neutral-700 text-lg font-medium">
            Create Ticket
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-6">
          <Input
            id="ticket-name"
            name="ticketName"
            value={ticketName}
            onChange={(e) => setTicketName(e.target.value)}
            placeholder="Ticket Name"
            className="rounded-full h-[3.5rem] border-gray-400 border-[1.5px] px-6 text-base text-gray-700 placeholder:text-gray-400 focus-visible:ring-0 shadow-none"
          />

          <div className="flex gap-3">
            <Select value={assignTo} onValueChange={handleAssignToChange}>
              <SelectTrigger className="shadow-none cursor-pointer py-[1.60rem] border-[1.5px] border-gray-400 flex-1 text-gray-500 font-fredoka text-base rounded-full px-6 flex items-center justify-between focus-visible:ring-0">
                <SelectValue placeholder="Assign to" />
              </SelectTrigger>

              <SelectContent className="p-0 bg-white rounded-3xl">
                <div className="sticky top-0 z-10 px-2 pb-2 pt-2 bg-white">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search"
                      value={memberSearch}
                      onChange={(e) => setMemberSearch(e.target.value)}
                      className="pl-9 h-9 text-sm rounded-full bg-neutral-100 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>

                <div className="max-h-40 overflow-y-auto">
                  {filteredMembers.length > 0 ? (
                    filteredMembers.map((member) => (
                      <SelectItem
                        key={member.id}
                        value={member.id}
                        className="cursor-pointer px-3 py-2"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                            {getInitials(member.name)}
                          </div>
                          <span className="text-sm font-fredoka text-gray-700">
                            {member.name}
                          </span>
                        </div>
                      </SelectItem>
                    ))
                  ) : (
                    <div className="px-3 py-4 text-sm text-gray-500 text-center">
                      No members found
                    </div>
                  )}
                </div>
              </SelectContent>
            </Select>

            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger className="shadow-none cursor-pointer py-[1.60rem] border-gray-400 border-[1.5px] flex-1 text-gray-500 font-fredoka text-base rounded-full px-6 flex items-center justify-between focus-visible:ring-0">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>

              <SelectContent className="font-fredoka rounded-2xl">
                {priorities.map((p) => (
                  <SelectItem
                    key={p.value}
                    value={p.value}
                    className="cursor-pointer"
                  >
                    <span className={`${p.color} font-medium`}>{p.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="gap-3 justify-center sm:justify-center">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="rounded-full px-8 h-11 text-neutral-700 border-neutral-900 border-[1.5px] hover:bg-gray-50 shadow-none font-fredoka"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!ticketName.trim() || !assignTo || !priority}
            className="rounded-full px-8 h-11 bg-neutral-900 text-[#04FB43] hover:bg-[#04FB43] hover:text-black shadow-none font-fredoka disabled:opacity-50"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
