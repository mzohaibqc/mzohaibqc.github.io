import PropTypes from "prop-types";
import React, { useState, useCallback } from 'react';
import classNames from 'classnames';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const onClick = useCallback((id) => {
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const items = [
    {
      name: 'About',
      id: 'about'
    },
    {
      name: 'Experience',
      id: 'experience-testimonials'
    },
    {
      name: 'Education',
      id: 'skill-education'
    },
    {
      name: 'Open Source',
      id: 'open-source'
    },
    {
      name: 'NPM Stats',
      id: 'npm-stats'
    },
    {
      name: 'Stackoverflow',
      id: 'stackoverflow'
    },
    {
      name: 'My Writings',
      id: 'blog'
    },
    {
      name: 'Contact',
      id: 'contact-us'
    },
  ];

  return (
    <nav
      className={classNames("menu", {'menu-active': open })}
      role="navigation">
      <ul className="menu-ul" >
        {items.map(item => <NavLink {...item} onClick={onClick} key={item.id} />)}
      </ul>
      <div className="menu-holder" onClick={() => setOpen((v) => !v)}>
        <div className="menu-bar"></div>
      </div>
    </nav>
  );
}



const NavLink = ({ id, name, onClick }) => (
  <li
    className="menu-item"
    onClick={() => onClick(id)}
  >
    {name}
  </li>
);

NavLink.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
