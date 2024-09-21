import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";

export default function SocialMediaIcons(){
    const mailToLink = `mailto:htunnayaung113@gmail.com`;
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/htun-nay-aung-9b5aa91b3/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin-link" />
            </a>

            <a className="hover:opacity-50 transition duration-500" href="https://www.facebook.com/htunnayaung.113/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook-link" />
            </a>

            <a className="hover:opacity-50 transition duration-500" href="https://www.instagram.com/tommy.htun/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram-link" />
            </a>

            <a className="hover:opacity-50 transition duration-500" href={mailToLink}>
                <img src={mail} alt="mail-link" />
            </a>
        </div>
    )
}