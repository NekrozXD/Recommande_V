import React, { useState } from 'react';
import '../../App.css';
import { FaHome, FaWarehouse, FaBuilding, FaUsers, FaUserCog, FaMoneyBillAlt } from 'react-icons/fa'; // Import specific icons

export const Navbar = ({ show }) => {
  const [activeItem, setActiveItem] = useState(''); // State for active item

  const handleClick = (item) => {
    setActiveItem(item); // Update active state on click
  };

  return (
    <div className={show ? 'sideNav active' : 'sideNav'}>
      <ul>
        <li
          className={activeItem === 'dashboard' ? 'active' : ''}
          onClick={() => handleClick('dashboard')}
        >
          <a href="#">
            <FaHome className="nav-icon" />
            <p>Dashboard</p>
          </a>
        </li>
        <li
          className={activeItem === 'depot' ? 'active' : ''}
          onClick={() => handleClick('depot')}
        >
          <a href="#">
            <FaMoneyBillAlt className="nav-icon" />
            <p>Dépôt</p>
          </a>
        </li>
        <li
          className={activeItem === 'agence' ? 'active' : ''}
          onClick={() => handleClick('agence')}
        >
          <a href="#">
            <FaBuilding className="nav-icon" />
            <p>Agence</p>
          </a>
        </li>
        <li
          className={activeItem === 'groupement' ? 'active' : ''}
          onClick={() => handleClick('groupement')}
        >
          <a href="#">
            <FaWarehouse className="nav-icon" />
            <p>Groupement</p>
          </a>
        </li>
        <li
          className={activeItem === 'utilisateur' ? 'active' : ''}
          onClick={() => handleClick('utilisateur')}
        >
          <a href="#">
            <FaUserCog className="nav-icon" />
            <p>Utilisateur</p>
          </a>
        </li>
        <li
          className={activeItem === 'beneficiaire' ? 'active' : ''}
          onClick={() => handleClick('beneficiaire')}
        >
          <a href="#">
            <FaUsers className="nav-icon" />
            <p>Bénéficiaire</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
