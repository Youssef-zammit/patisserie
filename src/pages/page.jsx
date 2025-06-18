import * as React from "react";
import SiteHeader from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Home from "../components/Home/Home";
function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <Home />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
export default Page;
