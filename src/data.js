export const foods = {
    nyamushka: [
        {
            id: 1,
            disabled: false,
            foodName: 'Нямушка',
            ingredient: {
                name: 'фуа-гра',
                description: 'Печень утки разварная с артишоками.',
                notFound: 'Печалька, с фуа-гра закончился.'
            },
            servingsCount: 10,
            giftCount: null,
            weight: '0,5'
        },
        {
            id: 2,
            disabled: false,
            foodName: 'Нямушка',
            ingredient: {
                name: 'рыбой',
                description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                notFound: 'Печалька, с рыбой закончился.'
            },
            servingsCount: 40,
            giftCount: 2,
            weight: 2
        },
        {
            id: 3,
            disabled: true,
            foodName: 'Нямушка',
            ingredient: {
                name: 'курой',
                description: 'Филе из цыплят с трюфелями в бульоне.',
                notFound: 'Печалька, с курой закончился.'
            },
            servingsCount: 100,
            giftCount: 5,
            weight: 5
        }
    ]
}
