import { PropsWithChildren } from "react";
import Header from "@/components/header";
import Underlay from "./underlay";


export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Underlay />
      <Header />
      {children}
    </>
  )
}