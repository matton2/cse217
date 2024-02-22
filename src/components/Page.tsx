import React from "react";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode
}

const Page: React.FC<Props> = ({children}) => (
    <div>
            <Navigation />
        <div>{children}</div>
    </div>
);

export default Page;