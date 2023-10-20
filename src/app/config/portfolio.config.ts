const portfolio: Portfolio = {
    'about': {
        'name': 'Mislav Stanić',
        'photo': 'data:image/jpeg;base64,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',
        'title': 'Senior Software Engineer',
        'about': 'I enjoy building software products and learning new technologies. 7+ years',
        'skills': 'Android,React Native,Flutter,React.js,Next.js',
    },
    'experience': [
        {
            'startDate': '2020',
            'endDate': '2023',
            'name': 'Shake',
            'desc': 'Working as a mobile developer in multiple technologies like Android, React Native and Flutter. ' +
                'Building a mobile SDK, setting up pipelines and deploying artifacts to the repositories like Maven Central, npm and Pub. ' +
                'Maintaining and building features for React dashboard and Python backend. ' +
                'Setting up Docusaurus documentation. Leading the team.',
            'link': 'https://www.shakebugs.com'
        },
        {
            'startDate': '2018',
            'endDate': '2020',
            'name': 'DECODE',
            'desc': 'Working as an mobile developer for various clients in multiple technologies like Android, React Native and Flutter. ' +
                'Maintaining and developing new features for both complex legacy projects in Java and modern projects in Kotlin. ' +
                'Using stadard tools for collaboration with clients like Slack and attending regular Scrum meetings.',
            'link': 'https://www.decode.agency'
        },
    ],
    'projects': [
        {
            'name': 'Portfolioo',
            'desc': 'User-friendly web application tool designed to help individuals create stunning personal portfolio websites with ease. Build with Next.js, Tailwind and Firebase.',
            'link': 'https://portfolioo.page'
        },
        {
            'name': 'Blogspace',
            'desc': 'Minimalistic blogging app for writers which enables creating and sharing thoughts effortlessly from mobile device. Built with Flutter and Firebase.',
            'link': 'https://play.google.com/store/apps/details?id=com.blogspace&hl=en_US'
        },
        {
            'name': 'Quiz game',
            'desc': 'Quiz game for improving knowledge with questions, answers and answer explanations generated by AI. Build with Flutter and OpenAI.',
            'link': 'https://play.google.com/store/apps/details?id=ai.quiz&hl=en_US'
        },
        {
            'name': 'IOTA Poker',
            'desc': 'Fun and engaging poker which is utilizing IOTA cryptocurrency for real time value exchange. Built with React, Firebase, Node and IOTA Wallet library. ',
            'link': '#'
        },
        {
            'name': 'Foodin',
            'desc': 'Foodin is a grocery delivery app that takes planning out of the equation, so people can cook a lot of food without spending a lot of money. Build with Android and Node.',
            'link': '#'
        },
    ],
    'education': [
        {
            'startDate': '2015',
            'endDate': '2017',
            'name': 'Polytechnic of Zagreb',
            'desc': 'Computer Science, Masters degree',
            'link': ''
        },
        {
            'startDate': '2012',
            'endDate': '2015',
            'name': 'Polytechnic of Zagreb',
            'desc': 'Computer Science, Bachelors degree',
            'link': ''
        }
    ],
    'certificates': [
        {
            'date': '2022',
            'name': "Ethereum and Solidity: The Complete Developer's Guide",
            'desc': 'Introduction into the Web3 development with Solidity smart contracts and Next.js',
            'link': 'https://www.udemy.com/certificate/UC-29a557b3-14c2-4536-82cb-7284e2ecc3e6/'
        },
        {
            'date': '2023',
            'name': "Elements Of AI",
            'desc': 'Online course that provides a comprehensive introduction to the field of artificial intelligence',
            'link': 'https://certificates.mooc.fi/validate/e3dkxokn6xl'
        }
    ],
    'contact': {
        'contact': 'mislav.stanic@hotmail.com'
    }
}

export default portfolio;









//
// const portfolio: Portfolio = {
//     'sections': [
//         {
//             'type': 'about',
//             'data': {
//                 'name': 'Mislav Stanić',
//                 'title': 'Senior Software Engineer',
//                 'about': 'I enjoy building software products and learning new technologies.',
//                 'skills': 'Android,React Native,Flutter,React.js,Next.js',
//             }
//         },
//         {
//             'type': 'info',
//             'title': '',
//             'data': [
//                 {
//                     'title': 'Shake',
//                     'subtitle': '2020-2023',
//                     'desc': 'Working as an mobile developer in multiple technologies like Android, React Native and Flutter. ' +
//                         'Experience with Android SDK development and native SDK wrapper in React Native and Flutter.' +
//                         'Setting up pipelines and publishing to Maven Central, Pub and npm.' +
//                         'Maintaining and building features for React dashboard and Python backend. Leading the team.',
//                     'link': 'https://www.shakebugs.com'
//                 },
//                 {
//                     'title': 'DECODE',
//                     'subtitle': '2018-2020',
//                     'desc': 'Working as an mobile developer in multiple technologies like Android, React Native and Flutter.',
//                     'link': 'https://www.decode.agency'
//                 },
//             ]
//         },
//         {
//             'type': 'info',
//             'title': 'Personal projects',
//             'data': [
//                 {
//                     'title': 'Portfolioo',
//                     'subtitle': '2018-2020',
//                     'desc': 'User-friendly web application tool designed to help individuals create stunning personal portfolio websites with ease. Build with Next.js, Tailwind and Firebase.',
//                     'link': 'https://portfolioo.page'
//                 },
//                 {
//                     'title': 'Blogspace',
//                     'subtitle': '2018-2020',
//                     'desc': 'Minimalistic blogging app for writers which enables creating and sharing thoughts effortlessly from mobile device. Built with Flutter and Firebase.',
//                     'link': 'https://play.google.com/store/apps/details?id=com.blogspace&hl=en_US'
//                 },
//                 {
//                     'title': 'Quiz game',
//                     'subtitle': '2018-2020',
//                     'desc': 'Quiz game for improving knowledge with questions, answers and answer explanations generated by AI. Build with Flutter and OpenAI.',
//                     'link': 'https://play.google.com/store/apps/details?id=ai.quiz&hl=en_US'
//                 },
//                 {
//                     'title': 'IOTA Poker',
//                     'subtitle': '2018-2020',
//                     'desc': 'Poker game based on IOTA cryptocurrency for ',
//                     'link': ''
//                 },
//                 {
//                     'title': 'Foodin',
//                     'subtitle': '2018-2020',
//                     'desc': 'Foodin is a grocery delivery company that takes planning out of the equation, so people can cook a lot of food without spending a lot of money',
//                     'link': ''
//                 },
//             ]
//         },
//         {
//             'type': 'info',
//             'title': 'Personal projects',
//             'data': [
//                 {
//                     'title': 'Polytechnic of Zagreb',
//                     'subtitle': '2015-2017',
//                     'desc': 'Computer Science, Masters degree',
//                     'link': ''
//                 },
//                 {
//                     'title': 'Polytechnic of Zagreb',
//                     'subtitle': '2015',
//                     'desc': 'Computer Science, Bachelors degree',
//                     'link': ''
//                 }
//             ]
//         },
//         {
//             'type': 'info',
//             'title': 'Personal projects',
//             'data': [
//                 {
//                     'title': "Ethereum and Solidity: The Complete Developer's Guide",
//                     'subtitle': '2022',
//                     'desc': 'Introduction into the Web3 development with Solidity smart contracts and Next.js',
//                     'link': 'https://www.udemy.com/certificate/UC-29a557b3-14c2-4536-82cb-7284e2ecc3e6/'
//                 },
//                 {
//                     'title': "Elements Of AI",
//                     'subtitle': '2023',
//                     'desc': 'Online course that provides a comprehensive introduction to the field of artificial intelligence',
//                     'link': 'https://certificates.mooc.fi/validate/e3dkxokn6xl'
//                 }
//             ]
//         },
//         {
//             'type': 'contact',
//             'data': {
//                 'contact': 'mislav.stanic@hotmail.com'
//             }
//         }
//     ],
// }
//
// export default portfolio;
