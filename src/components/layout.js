import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({children}) {
  return (
    <div >
        <Header />
            <main style={{margin:'1rem'}}>
                {children}
            </main>
        <Footer/>
    </div>
  )
}