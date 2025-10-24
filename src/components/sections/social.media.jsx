import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = (props) => {
    const { instagram, tiktok, Github, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={instagram} target='_blank' className="highlight" title="Instagram Bảo Nguyễn">
                <FaInstagram size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Bảo Nguyễn">
                <FaTiktok size={30} />
            </a>
            <a href={Github} target='_blank' className="highlight" title="Gituhb Bảo Nguyễn">
                <FaGithub size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Bảo Nguyễn">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;