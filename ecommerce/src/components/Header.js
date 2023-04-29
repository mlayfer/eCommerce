import React, { useState } from "react";
import styled from "styled-components";
import logo from '../assets/e-comerce.png';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { enums, menuItems } from "../Constants";

const { Item } = Menu;

const Header = () => {

    return (
        <HeaderWrapper>
            <Logo>
                <LogoIcon src={logo} alt="Logo" />
                <Title>{enums.APP_NAME}</Title>
            </Logo>
            {/* hamburger menu for small screens */}
            <HamburgerMenu menuItems={menuItems} />
            {/* horizontal menu for larger screens */}
            <Menu mode="horizontal" theme="light">
                {menuItems.map((item) => (
                    <MenuItem key={item.key}>{item.title}</MenuItem>
                ))}
            </Menu>
        </HeaderWrapper>
    );
};

const HamburgerMenu = ({ menuItems }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <HamburgerMenuWrapper onClick={handleMenuClick}>
            <StyledMenuOutlined />
            <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={!menuOpen}
                style={{ display: menuOpen ? "block" : "none" }}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.key}>{item.title}</MenuItem>
                ))}
            </Menu>
        </HamburgerMenuWrapper>
    );
};

const StyledMenuOutlined = styled(MenuOutlined)`
  color: white;
  padding: 0 20px;

  @media (min-width: 767px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #0f229a;
  width: 100%;
  
  .ant-menu-light {
    background-color: transparent;
  }
  
  .ant-menu-item {
    margin-right: 10px;
  }

  @media (max-width: 767px) {
    .ant-menu-horizontal {
      display: none;
    }

    .ant-menu-inline {
      display: inline-block;
    }

    .ant-menu-item {
      margin: 0;
    }
  }
  
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  margin-left: 10px;
`;

const LogoIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
  
`;

const MenuItem = styled(Item)`
  font-size: 1.2rem;
  color: white;
  &:hover {
    color: #FFD700;
  }
`;

const HamburgerMenuWrapper = styled.div`
display: flex;
align-items: center;
margin-left: 10px;
`;

export default Header;
