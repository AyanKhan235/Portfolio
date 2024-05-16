import Img from "../../public/images/ayan.jpg";
import { GiClawSlashes, GiMailbox, GiPhone, GiCalendar } from "react-icons/gi";
function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Img} alt="" width="80" />
          {/* <img src="/images/ayan.jpg" alt="" width="250px" height="220px" /> */}
        </figure>
        <div className="info-content">
          <h1 className="name">Ayan Khan</h1>
          <p className="title"> Web Developer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>
      {/* contact info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contact-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:ayankhanp182@gmail.com" className="contact-link">
                ayankhanp182@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a href="tel:+917014055235" className="contact-link">
                +917014055235
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">BIRTHDAY</p>
              <time dateTime="2003-07-20" className="contact-link">
                July 20, 2003
              </time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">LOCATION</p>
              <address className="contact-link">UDAIPUR, RAJ ,INDIA</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
