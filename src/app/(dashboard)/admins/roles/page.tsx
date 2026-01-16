"use client";
import DynamicHeader from "@/features/admins/shared/dynamic-header";
import RolesFilter from "@/features/admins/roles/components/roles-filter";
import React, { useMemo, useState } from "react";
import { ChevronRight, Users, UserCog } from "lucide-react";
import { useRouter } from "next/navigation";
import { CreateRoleDialog } from "@/features/admins/roles/components/create-role";
import { adminDataTable } from "@/features/admins/data";

interface RoleData {
  id: number;
  name: string;
  createdDate: string;
  rolesCount: number;
  adminsCount: number;
}

const Page = () => {
  const router = useRouter();
  const [customRoles, setCustomRoles] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filters, setFilters] = useState<{
    sortBy: "name" | "date" | "rolesCount" | "adminsCount";
  }>({ sortBy: "name" });

  const roles: RoleData[] = useMemo(() => {
    const roleCounts = adminDataTable.reduce((acc, admin) => {
      const roleName = admin.role;
      acc[roleName] = (acc[roleName] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const totalAdmins = adminDataTable.length;

    const uniqueRoles = Object.keys(roleCounts);

    // Create role objects from admin table
    const adminRoles = uniqueRoles.map((roleName, index) => ({
      id: index + 1,
      name: roleName,
      createdDate: "Jan. 5th 2021",
      rolesCount: roleCounts[roleName],
      adminsCount: totalAdmins,
    }));

    // Add custom roles with 0 count
    const customRoleObjects = customRoles.map((roleName, index) => ({
      id: adminRoles.length + index + 1,
      name: roleName,
      createdDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      rolesCount: 0,
      adminsCount: totalAdmins,
    }));

    return [...adminRoles, ...customRoleObjects];
  }, [customRoles]);

  const sortedRoles = useMemo(() => {
    const rolesCopy = [...roles];

    switch (filters.sortBy) {
      case "name":
        return rolesCopy.sort((a, b) => a.name.localeCompare(b.name));
      case "date":
        return rolesCopy.sort((a, b) => {
          const dateA = new Date(a.createdDate);
          const dateB = new Date(b.createdDate);
          return dateB.getTime() - dateA.getTime();
        });
      case "rolesCount":
        return rolesCopy.sort((a, b) => b.rolesCount - a.rolesCount);
      case "adminsCount":
        return rolesCopy.sort((a, b) => b.adminsCount - a.adminsCount);
      default:
        return rolesCopy;
    }
  }, [roles, filters.sortBy]);

  const handleCreateRole = (roleName: string) => {
    const roleExists = roles.some(
      (role) => role.name.toLowerCase() === roleName.toLowerCase()
    );

    if (!roleExists) {
      setCustomRoles([...customRoles, roleName]);
    }
  };

  const handleRoleClick = (roleId: number) => {
    router.push(`/admins/roles/${roleId}`);
  };

  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <DynamicHeader
        title="Roles"
        subtitle="Manage roles or create roles"
        showExport
        actionLabel="Create Roles"
        onAction={() => setIsDialogOpen(true)}
      >
        <RolesFilter onFilterChange={setFilters} />
      </DynamicHeader>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2 mt-4">
          {sortedRoles.map((role) => (
            <div
              key={role.id}
              onClick={() => handleRoleClick(role.id)}
              className="bg-gray-50 rounded-2xl border border-gray-200 px-4 py-2.5 flex items-center justify-between hover:opacity-85 cursor-pointer"
            >
              <div className="flex items-center gap-14">
                <div>
                  <h3 className="font-semibold text-gray-900">{role.name}</h3>
                  <p className="text-sm text-gray-500">
                    Created {role.createdDate}
                  </p>
                </div>

                <div className="h-12 w-1 bg-gray-300 rounded-lg" />

                <div className="flex flex-col items-center gap-2">
                  <UserCog className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Roles: {role.rolesCount}
                  </span>
                </div>

                <div className="h-12 w-1 bg-gray-300 rounded-lg" />

                <div className="flex flex-col items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Admins: {role.adminsCount}
                  </span>
                </div>

                <div className="h-12 w-1 bg-gray-300 rounded-lg" />
              </div>

              <ChevronRight className="w-6 h-6 text-gray-900" />
            </div>
          ))}
        </div>
      </div>

      <CreateRoleDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onCreateRole={handleCreateRole}
      />
    </div>
  );
};

export default Page;
