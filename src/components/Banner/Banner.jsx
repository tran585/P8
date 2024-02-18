import './banner.scss'

function Banner({ picture, title }) {
  return (
    <section className="section-banner">
      <img className="img-banner" src={picture} alt={title ? 'falaises surplombant la mer': 'paysage, avec des arbres en premier plan, et au fond vue sur des montages'} />
      <div className="section-banner-title">
        {title ? <h1>{title}</h1> : null}
      </div>
    </section>
  )
}

export default Banner
