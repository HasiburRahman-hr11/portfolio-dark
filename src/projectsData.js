
// Thumbnails
import nextLPThumbnail from './assets/images/projects/thumbnail/nextLPThumb.webp';
import redOnionThumbnail from './assets/images/projects/thumbnail/redOnionThumbnail.webp';
import agencyThumbnail from './assets/images/projects/thumbnail/agencyThumbnail.webp';
import qdcThumbnail from './assets/images/projects/thumbnail/qdcThumbnail.webp';
import torqThumbnail from './assets/images/projects/thumbnail/torqThumbnail.webp';

// Gallery Images

import qdcGallery1 from './assets/images/projects/gallery/qdc-home.webp';
import qdcGallery2 from './assets/images/projects/gallery/qdc-about.webp';
import qdcGallery3 from './assets/images/projects/gallery/qdc-founder.webp';

import torqGallery1 from './assets/images/projects/gallery/torqHome.webp';
import torqGallery2 from './assets/images/projects/gallery/torqAbout.webp';

import onionGallery1 from './assets/images/projects/gallery/onionGallery-1.webp';
import onionGallery2 from './assets/images/projects/gallery/onionGallery-2.webp';
import onionGallery3 from './assets/images/projects/gallery/onionGallery-3.webp';


import agencyGallery1 from './assets/images/projects/gallery/agencyGallery-1.webp';
import nextLPGallery1 from './assets/images/projects/gallery/nextLPGallery-1.webp';

export const projects = [

    {
        _id: 'queens-drive-club',
        title: 'Queens Drive Club',
        image: qdcThumbnail,
        link: 'https://queensdriveclub.com/',
        gallery: [
            {
                img: qdcGallery1,
                title: 'Homepage'
            },
            {
                img: qdcGallery2,
                title: 'About QDC'
            },
            {
                img: qdcGallery3,
                title: 'Founder Page'
            }
        ],
        points: [
            'QDC is India\'s first all-women supercar club',
            'It was a Team Project in Addictive Media',
            'It was my first Shopify project'
        ],
        techs: ['Shopify'],

    },
    {
        _id: 'we-are-torq',
        title: 'TORQ',
        image: torqThumbnail,
        link: 'https://wearetorq.com/',
        gallery: [
            {
                img: torqGallery2,
                title: 'Homepage'
            },
            {
                img: torqGallery1,
                title: 'About Page'
            }
        ],
        points: [
            'TORQ provides agricultural products and natural resources from Asia and Africa to consumers around the world',
            'This is a fully responsive and dynamic website',
            'WordPress CMS used to make this website dynamic'
        ],
        techs: ['WordPress'],

    },
    {
        _id: 'next-js-landing-page',
        title: 'Next JS Landing Page',
        image: nextLPThumbnail,
        link: 'https://next-js-landing-page-1.netlify.app',
        gallery: [
            {
                img: nextLPGallery1,
                title: 'Homepage'
            }
        ],
        points: [
            'Fully Responsive Next Js Landing Page',
            'Suitable for Digital agencies'
        ],
        techs: ['React Js', 'Next Js', 'React Scroll', 'Theme-UI' , 'RC Drawer' , 'React Icons'],

    },
    {
        _id: 'red-onion-react-app',
        title: 'Red Onion | Food Selling Website',
        image: redOnionThumbnail,
        link: 'https://red-onion-react-app.netlify.app',
        gallery: [
            {
                img: onionGallery1,
                title: 'Homepage'
            },
            {
                img: onionGallery2,
                title: 'Single Food Item Page'
            },
            {
                img: onionGallery3,
                title: 'Checkout Page'
            }
        ],
        points: [
            'Fully functional food selling website',
            'User can login by using Google account or Email password',
            'Logged in user can order foods'
        ],
        techs: ['React Js', 'React Router', 'Context-API', 'Material-UI' , 'Firebase']
    },

    {
        _id: 'steller-landing-page',
        title: 'Steller Landing Page',
        image: agencyThumbnail,
        link: 'https://responsive-agency-web.netlify.app',
        gallery: [
            {
                img: agencyGallery1,
                title: 'Homepage'
            }
        ],
        points: [
            'HTML Landing page',
            'Suitable for any kind of digital agency'
        ],
        techs: ['HTML', 'CSS', 'Bootstrap', 'JQuery']
    }
]