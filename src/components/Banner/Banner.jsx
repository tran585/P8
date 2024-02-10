
import './banner.scss' //to change


function Banner({picture, title}) { //alt
    return (
    <section className='section-banner'>
    <img className='test' src={picture} alt="test" />
    <div className='section-banner-title'>
        {title ? <h1>{title}</h1> : null}
    </div>
</section>)
}

export default Banner