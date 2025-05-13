// ParentComponent.jsx
"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ParentLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </>
    );
};

export default ParentLayout;
