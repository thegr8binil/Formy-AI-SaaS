import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { LibraryBig, LineChart, MessageSquare, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/dashboard/responses",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
  ];

  const { user } = useUser();
  const path = usePathname();
  const [formList, setFormList] = useState();
  const [PercFileCreated, setPercFileCreated] = useState(0);

  useEffect(() => {
    user && GetFormList();
  }, [user]);

  const GetFormList = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(JsonForms.id));

    setFormList(result);

    const perc = (result.length / 3) * 100;
    setPercFileCreated(perc);
  };

  return (
    <div className="flex flex-col justify-between w-full h-screen border shadow-md">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={`flex items-center gap-3 p-4 mb-3 
                hover:bg-primary hover:text-white rounded-lg
                cursor-pointer text-gray-500
                ${path == menu.path && "bg-primary text-white"}
                `}
          >
            <menu.icon />
            {menu.name}
          </Link>
        ))}
      </div>
      <div className="px-6">
       <Link href="/dashboard/upgrade">
       <Button className="w-full">Upgrade Now</Button>
       </Link>
        <div className="mt-2">
          <Progress value={PercFileCreated} />
          <h2 className="mt-2 text-sm text-gray-600">
            <strong>{formList?.length} </strong>Out of <strong>3</strong> File
            Created
          </h2>
          <h2 className="mt-3 text-sm text-gray-600">
            Upgrade your plan for unlimted AI form build
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
