import React from "react";
import {Link} from "react-router-dom";
import {Menu} from "antd";
import type {MenuProps} from "antd";

export enum Pages {
  home = "/",
  userPage = "/userPage",
  getDataPage = '/getData',
  about = "/about",
}

const items: MenuProps["items"] = [
    {
        key: Pages.home,
        label: <Link to={Pages.home}>Home Page</Link>,
    },
    {
        key: Pages.userPage,
        label: <Link to={Pages.userPage}>User Page</Link>
    },
    {
        key: Pages.getDataPage,
        label: <Link to={Pages.getDataPage}>Data Page</Link>
    },
    {
        key: Pages.about,
        label: <Link to={Pages.about}>About</Link>,
    },
   
];

const Navigation: React.FC = () => (
    <Menu mode="horizontal" className="navigation" items={items} />
);

export default Navigation;