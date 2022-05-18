import React from 'react';
import Container from '../../container/Container';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <Container>
        <div className="navigation">
          <ul>
            <li>
              about
              <ul>
                <li>
                  <a href="#">
                    Item1
                  </a>
                </li>
                <li>
                  <a href="#">
                    Item2It
                  </a>
                </li>
              </ul>
            </li>
            <li>
              what we do
              <ul>
                <li>
                  <a href="#">
                    Item3
                  </a>
                </li>
                <li>
                  <a href="#">
                    Item4
                  </a>
                </li>
              </ul>
            </li>
            <li>
              projects
              <ul>
                <li>
                  <a href="#">
                    Item5
                  </a>
                </li>
                <li>
                  <a href="#">
                    Item6
                  </a>
                </li>
              </ul>
            </li>
            <li>
              contact
              <ul>
                <li>
                  <a href="#">
                    Item7
                  </a>
                </li>
                <li>
                  <a href="#">
                    Item8
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Nav