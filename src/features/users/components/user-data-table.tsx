"use client";

import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ScrollBar from "@/components/custom-ui/scrollbar";
import { useRouter } from "next/navigation";

type Status = "Active" | "Inactive" | "Pending" | "Suspended";

interface User {
  id: string;
  name: string;
  email: string;
  status: Status;
  subscriptions: number;
  joinedDate: string;
  lastActive: string;
  avatar: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Active",
    subscriptions: 3,
    joinedDate: "Mar. 12, 2023",
    lastActive: "1min ago",
    avatar: "👨",
  },
  {
    id: "2",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Inactive",
    subscriptions: 4,
    joinedDate: "Jun. 27, 2022",
    lastActive: "1mon ago",
    avatar: "👨",
  },
  {
    id: "3",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Jan. 8, 2024",
    lastActive: "4d ago",
    avatar: "👨",
  },
  {
    id: "4",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Pending",
    subscriptions: 4,
    joinedDate: "Oct. 5, 2021",
    lastActive: "10d ago",
    avatar: "👩",
  },
  {
    id: "5",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Suspended",
    subscriptions: 4,
    joinedDate: "Feb. 19, 2023",
    lastActive: "3mon ago",
    avatar: "👨",
  },
  {
    id: "6",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Aug. 30, 2022",
    lastActive: "1w ago",
    avatar: "👩",
  },
  {
    id: "7",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Apr. 23, 2024",
    lastActive: "4h ago",
    avatar: "👨",
  },
  {
    id: "8",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Pending",
    subscriptions: 4,
    joinedDate: "Nov. 14, 2020",
    lastActive: "2mon ago",
    avatar: "👨",
  },
  {
    id: "9",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Suspended",
    subscriptions: 4,
    joinedDate: "Jul. 6, 2023",
    lastActive: "3h ago",
    avatar: "👩",
  },
  {
    id: "10",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Inactive",
    subscriptions: 4,
    joinedDate: "Dec. 31, 2021",
    lastActive: "4mon ago",
    avatar: "👩",
  },
  {
    id: "11",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Aug. 10, 2024",
    lastActive: "15min ago",
    avatar: "👨",
  },
  {
    id: "12",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Aug. 10, 2024",
    lastActive: "15min ago",
    avatar: "👨",
  },
  {
    id: "13",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Pending",
    subscriptions: 4,
    joinedDate: "Aug. 10, 2024",
    lastActive: "15min ago",
    avatar: "👩",
  },
  {
    id: "14",
    name: "John Smith",
    email: "john.smith@gmail.com",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Aug. 10, 2024",
    lastActive: "15min ago",
    avatar: "👨",
  },
];

const statusStyles: Record<Status, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-gray-100 text-gray-700",
  Pending: "bg-blue-100 text-blue-700",
  Suspended: "bg-orange-100 text-orange-700",
};

export default function UsersDataTable() {
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const totalRows = 140;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedUsers = mockUsers.slice(startIndex, endIndex);

  // Dynamic spacing based on rows per page
  const getRowSpacing = () => {
    if (rowsPerPage === 5) return "py-4";
    if (rowsPerPage === 8) return "py-4";
    return "py-3"; // for 10
  };

  const getHeaderSpacing = () => {
    if (rowsPerPage === 5) return "py-3";
    if (rowsPerPage === 8) return "py-3";
    return "py-2.5";
  };

  const toggleSelectAll = () => {
    if (selectedUsers.size === paginatedUsers.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(paginatedUsers.map((u) => u.id)));
    }
  };

  const toggleSelectUser = (id: string) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedUsers(newSelected);
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const SortIcon = ({ column }: { column: string }) => {
    if (sortColumn !== column)
      return <ChevronUp className="w-3.5 h-3.5 text-gray-400" />;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-3.5 h-3.5 text-gray-700" />
    ) : (
      <ChevronDown className="w-3.5 h-3.5 text-gray-700" />
    );
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };
  const router = useRouter();

  const handleUserProfile = () => {
    router.push("/user/free/profile");
  };

  return (
    <div className="w-full  flex flex-col overflow-hidden">
      <div className="overflow-x-auto  flex-1">
        <div className="inline-block min-w-full align-middle">
          {/* Fixed Header */}
          <div className="overflow-hidden border-t border-b border-gray-200">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className={`w-10 px-4 ${getHeaderSpacing()} text-left`}>
                    <Checkbox
                      checked={
                        selectedUsers.size === paginatedUsers.length &&
                        paginatedUsers.length > 0
                      }
                      onCheckedChange={toggleSelectAll}
                    />
                  </th>
                  <th
                    className={`px-5 ${getHeaderSpacing()} text-left min-w-[240px]`}
                  >
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700 uppercase tracking-wide hover:text-gray-900 whitespace-nowrap"
                    >
                      Full Name
                      <SortIcon column="name" />
                    </button>
                  </th>
                  <th
                    className={`px-5 ${getHeaderSpacing()} text-left min-w-[110px]`}
                  >
                    <button
                      onClick={() => handleSort("status")}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700 uppercase tracking-wide hover:text-gray-900 whitespace-nowrap"
                    >
                      Status
                      <SortIcon column="status" />
                    </button>
                  </th>
                  <th
                    className={`px-5 ${getHeaderSpacing()} text-left text-[11px] font-semibold text-gray-700 uppercase tracking-wide min-w-[120px] whitespace-nowrap`}
                  >
                    Subscriptions
                  </th>
                  <th
                    className={`px-5 ${getHeaderSpacing()} text-left min-w-[130px]`}
                  >
                    <button
                      onClick={() => handleSort("joined")}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700 uppercase tracking-wide hover:text-gray-900 whitespace-nowrap"
                    >
                      Joined Date
                      <SortIcon column="joined" />
                    </button>
                  </th>
                  <th
                    className={`px-5 ${getHeaderSpacing()} text-left text-[11px] font-semibold text-gray-700 uppercase tracking-wide min-w-[110px] whitespace-nowrap`}
                  >
                    Last Active
                  </th>
                  <th
                    className={`px-5 ${getHeaderSpacing()} text-left text-[11px] font-semibold text-gray-700 uppercase tracking-wide min-w-[70px] whitespace-nowrap`}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Scrollable Body */}
          <ScrollBar className="" thumbShortness={0.3}>
            <div
              className="overflow-y-auto custom-scroll"
              style={{ maxHeight: "calc(90vh - 220px)" }}
            >
              <table className="min-w-full">
                <tbody className="bg-white">
                  {paginatedUsers.map((user, index) => (
                    <tr
                      onClick={handleUserProfile}
                      key={user.id}
                      className={`hover:bg-gray-50 transition-colors cursor-pointer ${
                        index !== paginatedUsers.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <td className={`w-10 px-4 ${getRowSpacing()}`}>
                        <Checkbox
                          checked={selectedUsers.has(user.id)}
                          onCheckedChange={() => toggleSelectUser(user.id)}
                        />
                      </td>
                      <td
                        className={`px-5 ${getRowSpacing()} whitespace-nowrap min-w-[240px]`}
                      >
                        <div className="flex items-center gap-3 ">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-lg flex-shrink-0">
                            {user.avatar}
                          </div>
                          <div>
                            <div className="text-[13px] font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-[12px] text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        className={`px-5 ${getRowSpacing()} whitespace-nowrap min-w-[110px]`}
                      >
                        <span
                          className={`inline-flex px-2.5 py-0.5 text-[11px] font-medium rounded-full ${
                            statusStyles[user.status]
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td
                        className={`px-5 ${getRowSpacing()} whitespace-nowrap text-[13px] text-gray-900s min-w-[120px]`}
                      >
                        {user.subscriptions}
                      </td>
                      <td
                        className={`px-5 ${getRowSpacing()} whitespace-nowrap text-[13px] text-gray-900 min-w-[130px]`}
                      >
                        {user.joinedDate}
                      </td>
                      <td
                        className={`px-5 ${getRowSpacing()} whitespace-nowrap text-[13px] text-gray-500 min-w-[110px]`}
                      >
                        {user.lastActive}
                      </td>
                      <td
                        className={`px-5 ${getRowSpacing()} whitespace-nowrap text-[13px] text-gray-500 min-w-[70px]`}
                      >
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                            >
                              <MoreVertical className="h-3.5 w-3.5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              Delete user
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollBar>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-5 py-3 border-t border-gray-200">
        <div className="flex items-center gap-2 text-[13px]">
          <span className="text-gray-700 whitespace-nowrap">Rows per page</span>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={(value) => setRowsPerPage(Number(value))}
          >
            <SelectTrigger className="w-[65px] h-8 text-[13px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-gray-700 whitespace-nowrap hidden sm:inline">
            of {totalRows} rows
          </span>
        </div>

        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="hidden sm:flex h-7 w-7"
          >
            <ChevronsLeft className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-7 w-7"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>

          <div className="flex items-center">
            {getPageNumbers().map((page, idx) =>
              page === "..." ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-1 text-gray-500 text-[13px]"
                >
                  ...
                </span>
              ) : (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setCurrentPage(page as number)}
                  className={`h-7 w-7 text-[13px] ${
                    currentPage === page
                      ? "bg-green-500 hover:bg-green-600"
                      : ""
                  }`}
                >
                  {page}
                </Button>
              )
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="h-7 w-7"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="hidden sm:flex h-7 w-7"
          >
            <ChevronsRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
