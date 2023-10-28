export async function GET(request) {
    const pages = [
        {
            id: '1',
            label: 'Home',
            href: '/',
            theme: 'dark',
            customColors: { 
                menu: '#111827', 
                primary: '', 
                background: '', 
            },
            menu: false,
        },
        {
            id: '2',
            label: 'Vores arbejde',
            href: '/vores-arbejde',
            title: 'Dette er Vores arbejde siden',
            lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'xnqdmKBJps-unsplash-min.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            theme: 'light',
            customColors: { 
                menu: '#e5e7eb', 
                primary: '#f0abfc', 
                background: '#fbcfe8', 
            },
            menu: true,
        },
        {
            id: '3',
            label: 'Kampagner',
            href: '/kampagner',
            title: 'Kampagner',
            lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'OR0bavqjdEk-unsplash-min.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            theme: 'dark',
            customColors: { 
                menu: '#e5e7eb', 
                primary: '#f0abfc', 
                background: '#fbcfe8', 
            },
            menu: true,
        },
        {
            id: '4',
            label: 'Materialer',
            href: '/materialer',
            title: 'Materialer',
            lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'xnqdmKBJps-unsplash-min.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            theme: 'light',
            customColors: { 
                menu: '#e5e7eb', 
                primary: '#f0abfc', 
                background: '#fbcfe8', 
            },
            menu: true,
        },
      
        {
            id: '5',
            label: 'Om Noah',
            href: '/about',
            title: 'Om Noah',
            lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'photo-1569169092896-7bdc87667f02.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            theme: 'dark',
            customColors: { 
                menu: '', 
                primary: '', 
                background: '', 
            },
            menu: true,
            childPages: [
                {
                    id: '5.1',
                    label: 'Vision',
                    href: '/about/vision',
                    title: 'Vision',
                    lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'photo-1582699011340-21e302507754.jpg',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    theme: 'dark',
                    customColors: { 
                        menu: '#fb7185', 
                        primary: '', 
                        background: '', 
                    },
                    menu: false,
                },
                {
                    id: '5.2',
                    label: 'Organisation',
                    href: '/about/organisation',
                    title: 'Organisation',
                    lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'photo-1545303234-a34381f8b5cf.jpg',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    theme: 'dark',
                    customColors: { 
                        menu: '#fde68a', 
                        primary: '#fde68a', 
                        background: '#1e1b4b', 
                    },
                    menu: false,
                },
            ]
        },  
    ]

    const jsonData = JSON.stringify(pages);

    return new Response(jsonData, {
        headers: { 'Content-Type': 'application/json' },
    });
}
  