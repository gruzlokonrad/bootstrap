import React from 'react';
import Container from '../../container/Container';
import Button from '../Button/Button';
import './Services.scss';

const Services = () => {
  return (
    <section className="services">
      <Container>
        <div className="page-title">
          our services
        </div>
        <div className="category">
          <article>
            <div className="category-title">design</div>
            <div className="background-number">1</div>
            <span>
              Curabitur ornare.
            </span>
            <p className="category-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vitae, quo explicabo dolorem rem maxime voluptates repellendus necessitatibus corrupti eius quis exercitationem dolorum facere repudiandae dolor numquam iusto consectetur ab.</p>
            <Button color="green">read more</Button>
          </article>
          <article>
            <div className="category-title">code</div>
            <div className="background-number">2</div>
            <span>
              Cras vel comodo.
            </span>
            <p className="category-description">
              Neque voluptatem, voluptatum incidunt atque nisi error autem provident, totam minima distinctio ab quam quia. Delectus harum quos, accusamus veniam rem voluptates maiores suscipit ut minus ducimus in doloribus enim? facere repudiandae dolor.</p>
            <Button color="red">read more</Button>
          </article>
          <article>
            <div className="category-title">marketing</div>
            <div className="background-number">3</div>
            <span>
              Donec fringilla.
            </span>
            <p className="category-description">
              Molestiae amet atque numquam perspiciatis adipisci? Provident dicta dolorem sint veritatis distinctio sapiente earum nulla illo autem rem placeat corporis eos, accusamus sed expedita iusto corrupti reprehenderit non? Consectetur, corrupti. veritatis distinctio sapiente earum.</p>
            <Button color="blue">read more</Button>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default Services