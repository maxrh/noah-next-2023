export async function GET(request) {
    const slideshows = [
        {   
            id: 'frontpage',
            slides: [
                {
                    id: '1',
                    type: 'Kampagne',
                    title: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    image: 'coffee-farm-bro_comp.png',
                    date: '2023-12-06T14:30:00.000Z',  // example date
                    color: 'rgb(110, 231, 183)',
                },
                {
                    id: '2',
                    type: 'Event',
                    title: 'In hac habitasse platea dictumst vestibulum rhoncus',
                    image: '9534_191225_final_lemonde_m_metoo_nazario.png',
                    date: '2023-09-06T14:30:00.000Z',  // example date
                    color: 'rgb(196, 181, 253)',
                },
                {
                    id: '3',
                    type: 'Nyt website',
                    title: 'Quam viverra orci sagittis eu volutpat odio facilisis mauris sit',
                    image: 'desktop-computer-bro.png',
                    date: '2023-07-06T14:30:00.000Z',  // example date
                    color: 'rgb(252, 211, 77)',
                },
                {
                    id: '4',
                    type: 'Vores Arbejde',
                    title: 'Quam viverra orci sagittis eu volutpat odio facilisis mauris sit',
                    image: 'Ice melting-bro.png',
                    date: '2023-07-06T14:30:00.000Z',  // example date
                    color: 'rgb(94, 234, 212)',
                },
                {
                    id: '5',
                    type: 'Giv et Bidrag',
                    title: 'Quam viverra orci sagittis eu volutpat odio facilisis mauris sit',
                    image: 'money.png',
                    date: '2023-07-06T14:30:00.000Z',  // example date
                    color: 'rgb(253, 164, 175)',
                }
            ],
        },
        {
            id: 'about',
            slides: [
                {
                    id: '1',
                    type: 'Vores Arbejde',
                    title: 'Quam viverra orci sagittis eu volutpat.',
                    date: '2023-07-06T14:30:00.000Z',  // example date
                    color: 'rgb(94, 234, 212)',
                },
                {
                    id: '2',
                    type: 'Giv et Bidrag',
                    title: 'Imperdiet dui accumsan sit amet nulla facilisi morbi tempus.',
                    date: '2023-07-06T14:30:00.000Z',  // example date
                    color: 'rgb(253, 164, 175)',
                }
            ],
        },

    ]

    const jsonData = JSON.stringify(slideshows);

    return new Response(jsonData, {
        headers: { 'Content-Type': 'application/json' },
    });
}
  