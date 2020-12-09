import React from "react";

// Props Type
type HeaderProps = {
    title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return <h2>{title}</h2>;
};

export default Header;
