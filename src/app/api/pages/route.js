export async function GET(request) {
    const pages = [
            {
                id: '1',
                title: 'Vores arbejde',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-12-06T14:30:00.000Z',  // example date
                color: 'bg-cyan-500',
            },
            {
                id: '2',
                title: 'Kampagner',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: '/images/OR0bavqjdEk-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-09-06T14:30:00.000Z',  // example date
                color: 'bg-amber-400',
            },
            {
                id: '3',
                title: 'Materialer',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-07-06T14:30:00.000Z',  // example date
                color: 'bg-blue-500',
            },
            {
                id: '4',
                title: 'Magasin',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-12-06T14:30:00.000Z',  // example date
                color: 'bg-emerald-500',
            },
            {
                id: '5',
                title: 'Podcast',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: '/images/OR0bavqjdEk-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-09-06T14:30:00.000Z',  // example date
                color: 'bg-red-500',
            },
            {
                id: '6',
                title: 'Presse',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-07-06T14:30:00.000Z',  // example date
                color: 'bg-violet-500',
            },
            {
                id: '7',
                title: 'Organisation',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-12-06T14:30:00.000Z',  // example date
                color: 'bg-emerald-500',
            },
            {
                id: '8',
                title: 'Kontakt',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: '/images/OR0bavqjdEk-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-09-06T14:30:00.000Z',  // example date
                color: 'bg-red-500',
            },
    ]

    const jsonData = JSON.stringify(pages);

    return new Response(jsonData, {
        headers: { 'Content-Type': 'application/json' },
    });
}
  