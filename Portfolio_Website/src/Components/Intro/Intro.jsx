import './Intro.css';
import introImg from '../../Asserts/intro-img.png'

const Intro = () => {
  return (
    <section id="id" className='container introcontainer'>
        <div className="introContent">
            <p className='hello'>Hello, I'm</p>
            <h2 className='introName'>Shafali Sonker</h2>
            <h3 className="introJob">I build a Resposive & User friendly websites.</h3>
            <p className="introPara">Innovative and detail-oriented Fresher Front End Developer with a passion for creating responsive and user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control systems, and staying up-to-date on <span>emerging technologies.</span></p>
            <button className="btn hireMeBtn btnHighlight">Hire Me...</button>
        </div>
        
    </section>
  )
}

export default Intro
