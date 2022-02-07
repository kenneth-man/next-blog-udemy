import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>

        {/* 'styled-jsx' npm package usage; styling here only applies to this component */}
        <style jsx>
          {`
            nav {
              display: flex;
              justify-content: space-between;
            }

            ul {
              list-style: none;
              padding: 0px;
            }

            li {
              display: inline;
            }
            
            li:not(:first-child){
              margin-left: 0.75rem;
            }
          `}
        </style>
      </nav>
    )
}

export default Navbar;