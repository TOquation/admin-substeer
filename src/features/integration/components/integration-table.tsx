import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Search, MoreVertical } from "lucide-react";
import { IntegrationProps } from "../types";
import { getStatusStyles, integrations } from "../data";
import Image from "next/image";

const IntegrationsTable = ({
  setOpen,
  setSelectedIntegration,
}: IntegrationProps) => {
  interface ModalProps {
    id: number;
    link: string;
  }

  const modalData: ModalProps[] = [
    {
      id: 1,
      link: "Test Connection",
    },
    {
      id: 2,
      link: "View Logs",
    },
    {
      id: 3,
      link: "Edit Settings",
    },
    {
      id: 4,
      link: "Disconnect",
    },
  ];

  return (
    <div className="w-full px-4">
      <div className="flex flex-col space-y-12">
        <div className="rounded-2xl overflow-hidden bg-gray-50 px-4 pb-4">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                className="w-full pl-10 pr-4 py-2.5 text-sm sm:text-base text-gray-900 bg-white border-0 rounded-lg focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-1rem)]">
            <div className="overflow-x-auto">
              <table className="w-full  min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                      Service
                    </th>
                    <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                      Type
                    </th>
                    <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                      Status
                    </th>
                    <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                      Latency
                    </th>
                    <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                      Error (24h)
                    </th>
                    <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                      Last Updated
                    </th>
                    <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {integrations.map((integration, index) => (
                    <tr
                      key={integration.id}
                      className={`border-b border-gray-300 hover:bg-gray-50 transition-colors ${
                        index === integrations.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="py-3 px-3 sm:py-4 sm:px-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
                            {integration.icon.startsWith("http") ? (
                              <Image
                                height={28}
                                width={28}
                                src={integration.icon}
                                alt={integration.service}
                                className="h-6 w-6 sm:h-7 sm:w-7"
                              />
                            ) : (
                              <div
                                className={`w-8 h-8 sm:w-9 sm:h-9 ${integration.iconBg} rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg`}
                              >
                                {integration.icon}
                              </div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium text-gray-900 text-sm sm:text-base whitespace-nowrap">
                              {integration.service}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4">
                        <div className="text-sm sm:text-base text-gray-700 whitespace-nowrap text-center">
                          {integration.type}
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4">
                        <div className="flex justify-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap ${getStatusStyles(
                              integration.status
                            )}`}
                          >
                            {integration.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4">
                        <div className="text-sm sm:text-base text-gray-700 whitespace-nowrap text-center">
                          {integration.latency}
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4">
                        <div
                          className={`text-sm sm:text-base font-medium whitespace-nowrap text-center ${
                            integration.errors === 0
                              ? "text-gray-700"
                              : "text-red-600"
                          }`}
                        >
                          {integration.errors}
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4">
                        <div className="text-sm sm:text-base text-gray-700 whitespace-nowrap text-center">
                          {integration.uptime}
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4">
                        <div className="flex justify-center">
                          <button className="p-1 cursor-pointer rounded transition-colors">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <MoreVertical className="h-5 w-5 text-gray-600" />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-48" align="end">
                                {modalData.map((modal, mIndex) => {
                                  return (
                                    <DropdownMenuItem
                                      onClick={() => {
                                        setOpen(true);
                                        setSelectedIntegration(integration);
                                      }}
                                      className={`${
                                        mIndex === modalData.length - 1
                                          ? "text-red-800"
                                          : ""
                                      }`}
                                      key={modal.id}
                                    >
                                      {modal.link}
                                    </DropdownMenuItem>
                                  );
                                })}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsTable;
