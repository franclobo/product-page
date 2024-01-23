import MyGallery from "./Carousel.jsx";
import { Price } from "./Price.jsx";
import { Counter } from "./Counter.jsx";

export const Home = () => {
  return (
    <main className="home">
      <MyGallery />
      <section className="home__section">
        <h3>SNEAKER COMPANY</h3>
        <h1 className="home__section__title">Fall Limited Edition Sneakers</h1>
        <p className="home__section__description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <Price />
        <Counter />
      </section>
    </main>
  )
}
