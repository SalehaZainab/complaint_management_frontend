import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, isSidebarOpen, hideMenu = false }) => {
    const navigate = useNavigate();
    const isAuth = false; // Replace with actual authentication check later

    const handleAccountClick = () => {
        if (isAuth) {
            navigate("/dashboard");
        } else {
            navigate("/signin");
        }
    };

    return (
        <header className="global-header">
            {!hideMenu && (
                <button className="global-header__menu" onClick={toggleSidebar}>
                    {isSidebarOpen ? '☰ Back' : '☰ Menu'}
                </button>
            )}
            <h1 className="global-header__logo">K-Link</h1>
            <div className="global-header__account" onClick={handleAccountClick}>
                <svg
                    className="global-header__account-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 29 29"
                    width="24"
                    
                >
                    <path
                        d="M29,14.5A14.5,14.5,0,1,1,14.5,0,14.5,14.5,0,0,1,29,14.5Zm-9.227-3.954A5.273,5.273,0,1,1,14.5,5.273,5.273,5.273,0,0,1,19.773,10.546ZM14.5,26.669a11.663,11.663,0,0,0,9.46-4.829,11.865,11.865,0,0,0-18.921,0A11.663,11.663,0,0,0,14.5,26.669Z"
                        fill="azure"
                        fillRule="evenodd"
                    ></path>
                </svg>
                Account
            </div>
        </header>
    );
};

export default Header;
