import React from "react";
import Header from "./Header";

interface LayoutProps  {
    children: React.ReactNode
}

const DefaultLayout = (props: LayoutProps) => {
    return (
        <>
            <Header/>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default DefaultLayout;