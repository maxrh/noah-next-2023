export async function GET(request) {
    const slides = [
            {
                id: '1',
                type: 'Kampagne',
                title: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua',
                image: 'Moed_fagraadsaktiv.png',
                date: '2023-12-06T14:30:00.000Z',  // example date
                color: 'rgb(110, 231, 183)',
            },
            {
                id: '2',
                type: 'Event',
                title: 'Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin',
                image: 'Visualdata-bro.png',
                date: '2023-09-06T14:30:00.000Z',  // example date
                color: 'rgb(248, 113, 113)',
            },
            {
                id: '3',
                type: 'Nyt website',
                title: 'Quam viverra orci sagittis eu volutpat odio facilisis mauris sit',
                image: 'happy.png',
                date: '2023-07-06T14:30:00.000Z',  // example date
                color: 'rgb(129, 140, 248)',
            }

    ]

    const jsonData = JSON.stringify(slides);

    return new Response(jsonData, {
        headers: { 'Content-Type': 'application/json' },
    });
}
  