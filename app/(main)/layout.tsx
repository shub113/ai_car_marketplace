import React, { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
    return <div className="container mx-auto my-20">{children}</div>;
};

export default MainLayout;
