import React from 'react';
import Container from '../../container/Container';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArchway, faStar } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer>
      <Container>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCoffee} fontSize="60" />
              Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faArchway} fontSize="60" />
              Instagram
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faStar} fontSize="60" />
              LinkedIn
            </a>
          </li>
        </ul>

      </Container>
    </footer>
  )
}

export default Footer