import SocialIcon from "./SocialIcon";

export default function Contact(){
    return(
        <>
              <section className="contact">
        <div className="mail">
          <h2>Email</h2>
          <p>bryan021@hotmail.be</p>
        </div>
        <div className="phone">
          <h2>Phone</h2>
          <p>+32 488 95 24 XX</p>
        </div>
        <div className="findme">
          <h2>Find me on</h2>
          <div className="social">
            <SocialIcon />
          </div>
        </div>
      </section>
        </>
    )
}