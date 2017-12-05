const menu_items = [ // Only two levels is allowed for now
    {
        name: 'Dashboard',
        link: '/',
        icon: 'home'
    }, {
        name: 'Users',
        icon: 'people',
        child: [
            {
                name: 'List',
                link: 'users',
                icon: 'keyboard_arrow_right'
            }, {
                name: 'Create',
                link: 'users/create',
                icon: 'keyboard_arrow_right'
            },
        ]
    }
];
export default menu_items;
