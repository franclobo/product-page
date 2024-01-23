
export const Counter = () => {
  return (
    <section className="count">
      <div className="count__container">
        <button className="count__container__button">-</button>
        <p className="count__container__number">1</p>
        <button className="count__container__button">+</button>
      </div>
      <button className="count__add">Add to cart</button>
    </section>
  )
}
