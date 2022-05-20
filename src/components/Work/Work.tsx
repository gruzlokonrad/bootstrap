import Container from '../../container/Container';
import Button from '../Button/Button';
import './Work.scss';

const Work = () => {
  return (
    <section className="work">
      <Container>
        <div className="page-title">
          our work
        </div>
        <article>
          <section className="category">
            <div className="image">
              <img src="/1.jpeg" alt="paper cup" />
            </div>
            <div className="category-description">
              <p className="category-title">vertigo</p>
              <p>
                lorem ipsum dolor sit amet, consectetur adipis
                <span>
                  lorem ipsum dolor sit
                </span>
              </p>
            <Button color={"blue no-frame"}>read me</Button>
            </div>
          </section>
          <section className="category">
            <div className="image">
              <img src="/2.jpeg" alt="rose" />
            </div>
            <div className="category-description">
              <p className="category-title">vertigo</p>
              <p>
                lorem ipsum dolor sit amet, consectetur adipis
                <span>
                  lorem ipsum dolor sit
                </span>
              </p>
            <Button color={"blue no-frame"}>read me</Button>
            </div>
          </section>
          <section className="category">
            <div className="image">
              <img src="/3.jpeg" alt="poster" />
            </div>
            <div className="category-description">
              <p className="category-title">vertigo</p>
              <p>
                lorem ipsum dolor sit amet, consectetur adipis
                <span>
                  lorem ipsum dolor sit
                </span>
              </p>
            <Button color={"blue no-frame"}>read me</Button>
            </div>
          </section>
          <section className="category">
            <div className="image">
              <img src="/4.jpeg" alt="twig" />
            </div>
            <div className="category-description">
              <p className="category-title">vertigo</p>
              <p>
                lorem ipsum dolor sit amet, consectetur adipis
                <span>
                  lorem ipsum dolor sit
                </span>
              </p>
            <Button color={"blue no-frame"}>read me</Button>
            </div>
          </section>
        </article>
      </Container>
    </section>
  )
}

export default Work