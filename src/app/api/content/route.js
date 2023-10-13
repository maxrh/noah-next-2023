export async function GET(request) {
    const content = {
        news: [
            {
                id: '1',
                title: 'Cursus in hac habitasse platea dictumst quisque sagittis purus sit',
                subtitle: 'Hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-12-06T14:30:00.000Z',  // example date
                type: 'nyhed',
            },
            {
                id: '2',
                title: 'Eiusmod tempor incididunt ut labore ',
                subtitle: 'Hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.',
                imageUrl: '/images/OR0bavqjdEk-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-09-06T14:30:00.000Z',  // example date
                type: 'nyhed',
            },
            {
                id: '3',
                title: 'Consectetur adipiscing elit',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-07-06T14:30:00.000Z',  // example date
                type: 'nyhed',
            },
        ],

        events: [
            {
                id: '1',
                title: 'Vi skaber digitale oplevelser der virker',
                subtitle: 'Hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-10-06T14:30:00.000Z',  // example date
                type: 'event',
            },
            {
                id: '2',
                title: 'Eiusmod tempor incididunt ut labore ',
                subtitle: 'Hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.',
                imageUrl: '/images/OR0bavqjdEk-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-09-06T14:30:00.000Z',  // example date
                type: 'event',
            },
            {
                id: '3',
                title: 'Consectetur adipiscing elit',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. ',
                date: '2023-06-06T14:30:00.000Z',  // example date
                type: 'event',
            },
        ],

        presse: [
            {
                id: '1',
                title: 'Vi skaber digitale oplevelser der virker',
                subtitle: 'Hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-10-06T14:30:00.000Z',  // example date
                type: 'presse',
            },
            {
                id: '2',
                title: 'Eiusmod tempor incididunt ut labore ',
                subtitle: 'Hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.',
                imageUrl: '/images/OR0bavqjdEk-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
                date: '2023-09-06T14:30:00.000Z',  // example date
                type: 'presse',
            },
            {
                id: '3',
                title: 'Consectetur adipiscing elit',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin.',
                imageUrl: '/images/xnqdmKBJps-unsplash-min.jpg',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique. Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Nunc sed velit dignissim sodales ut eu sem. ',
                date: '2023-06-06T14:30:00.000Z',  // example date
                type: 'presse',
            },
        ],
    }

    const jsonData = JSON.stringify(content);

    return new Response(jsonData, {
        headers: { 'Content-Type': 'application/json' },
    });
}
  