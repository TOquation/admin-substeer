import React, { useState } from "react";
import { Check, ChevronUp, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Permission {
  id: string;
  label: string;
  enabled: boolean;
}

interface PermissionGroup {
  id: string;
  title: string;
  role: string;
  permissions: Permission[];
}

export function PermissionList() {
  const [openSections, setOpenSections] = useState<string[]>([
    "access",
    "workspace",
  ]);

  const [permissionGroups, setPermissionGroups] = useState<PermissionGroup[]>([
    {
      id: "access",
      title: "Access",
      role: "OWNER",
      permissions: [
        { id: "overviews", label: "Overviews Access", enabled: true },
        { id: "workloads", label: "Workloads Accesshelp", enabled: true },
        { id: "email", label: "View Email Addresses", enabled: true },
      ],
    },
    {
      id: "workspace",
      title: "Workspace",
      role: "OWNER",
      permissions: [
        { id: "manage", label: "Manage Workspace Settings", enabled: true },
        { id: "invite", label: "Invite users to Workspace", enabled: true },
        { id: "remove", label: "Remove users from Workspace", enabled: true },
        { id: "guests", label: "View Workspace Guests", enabled: true },
        { id: "settings", label: "View Workspace Settings", enabled: true },
        { id: "leave", label: "Leave Workspace", enabled: false },
      ],
    },
  ]);

  const togglePermission = (groupId: string, permissionId: string) => {
    setPermissionGroups((prev) =>
      prev.map((group) =>
        group.id === groupId
          ? {
              ...group,
              permissions: group.permissions.map((perm) =>
                perm.id === permissionId
                  ? { ...perm, enabled: !perm.enabled }
                  : perm
              ),
            }
          : group
      )
    );
  };

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full py-6 px-4">
      {permissionGroups.map((group) => {
        const isOpen = openSections.includes(group.id);

        return (
          <div key={group.id} className="mb-4">
            {/* HEADER ROW (GRID-BASED) */}
            <div className="grid grid-cols-[2fr_1fr] items-center mb-3">
              <button
                onClick={() => toggleSection(group.id)}
                className="flex items-center cursor-pointer gap-2 text-neutral-500 font-medium text-sm"
              >
                {group.title}
                {isOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronUp className="w-4 h-4" />
                )}
              </button>

              <span className="text-center text-neutral-500 text-sm mr-8 font-normal">
                {group.role}
              </span>
            </div>

            {/* PERMISSION CONTAINER */}
            {/* PERMISSION CONTAINER */}
            {isOpen && (
              <div className="bg-white rounded-xl overflow-hidden">
                {group.permissions.map((perm, index) => (
                  <div
                    key={perm.id}
                    className={`
          grid grid-cols-[2fr_1fr] items-center px-6 py-4 text-sm relative
          ${index > 0 ? "border-t-[1.5px] border-neutral-300" : ""}
        `}
                  >
                    {/* LABEL */}
                    <span className="text-neutral-600">{perm.label}</span>

                    <Separator
                      orientation="vertical"
                      className="w-1 h-full bg-neutral-300 absolute right-56"
                    />

                    {/* TOGGLE (RIGHT SIDE) */}
                    <div className="flex justify-center">
                      <button
                        onClick={() =>
                          perm.id !== "leave" &&
                          togglePermission(group.id, perm.id)
                        }
                        className={`
              w-5 h-5 rounded flex items-center cursor-pointer justify-center
              ${
                perm.id === "leave"
                  ? "bg-gray-200 cursor-not-allowed"
                  : perm.enabled
                  ? "bg-neutral-800 "
                  : "bg-gray-300"
              }
            `}
                      >
                        {perm.enabled && perm.id !== "leave" && (
                          <Check
                            className="w-3 h-3 text-green-400"
                            strokeWidth={3}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
