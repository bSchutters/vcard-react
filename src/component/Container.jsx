import portraitB from '../assets/img/portraitB.jpg'

export default function Container(){
    return(
        <section className="container">
        <img className="portrait" src={portraitB} alt="" />
        <div className="content">
          <h1>Schutters Bryan</h1>
          <h2>
            Front-end developper Junior <br className="br" />
            Student @BeCode
          </h2>
          <br />
          <p>
            Im a Schutters Bryan, a Front-end lover. A 23 years old living in a
            small city called Brussels.
          </p>
          <div className="content-button">
            <button className="enabled" href="#">Portfolio</button>
            <button className="disabled" href="#">Resume</button>
          </div>
        </div>
        </section>
    )
}