import { TileData } from "../../types/interfaces";

import { FaGithub, FaFacebookSquare, FaInstagram, FaDiscord, FaTwitter, FaTiktok, FaSnapchat, FaBriefcase } from "react-icons/fa";

export const TilesData: TileData[] = [
    {
        name: "Github",
        url: "https://github.com/Yur3te",
        icon: <FaGithub />
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/maciej.honkisz.73",
        icon: <FaFacebookSquare />
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/yur3te/",
        icon: <FaInstagram />
    },
    {
        name: "Discord",
        url: "https://discord.com/users/290571203536486401",
        icon: <FaDiscord />
    },
    {
        name: "Snapchat",
        url: "https://www.snapchat.com/add/yur37e?share_id=5g_rwqVKOCw&locale=pl-PL",
        icon: <FaSnapchat />
    },
    {
        name: "Twitter",
        url: "https://twitter.com/Yur3te",
        icon: <FaTwitter />
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@yur3te",
        icon: <FaTiktok />,
    },
    {
        name: "Portfilio",
        url: "https://d2w9rnfcy7mm78.cloudfront.net/17734202/original_c3be6170eb6d2cc3cbd711b9661a6779.jpg?1661353714?bc=0",
        icon: <FaBriefcase  />
    }
]