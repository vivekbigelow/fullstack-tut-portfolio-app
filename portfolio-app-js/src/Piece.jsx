export default function Piece({ title, year, medium, description }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{medium}</p>
      <p>{description}</p>
    </section>
  )
}