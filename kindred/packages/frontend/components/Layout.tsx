import SideMenu from "@/pages/SideMenu/SideMenu";
import Head from "next/head";
// @ts-ignore
import Landing from "./landing/landing";

export default function Layout({ children }: any) {
  return (
    <div className={"dappMainDiv"}>
      <header style={{ padding: "" }}>
        <SideMenu />
      </header>

      <main
        style={{
          minHeight: "60vh",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ECEEFF",
        }}
      >
        {children}
        <footer />
      </main>
    </div>
  );
}
