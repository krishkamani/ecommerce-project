const INTIAL_STATE = {
    sections:[{
        id: 1,
        title: 'HATS',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',    
    },
    {
        id: 2,
        title: 'JACKETS',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',    
    },
    {
        id: 3,
        title: 'SNEAKERS',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',    
    },
    {
        id: 4,
        title: 'WOMENS',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',    
    },
    {
        id: 5,
        title: 'MENS',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',    
    }]
};


const directoryReducer = (state=INTIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;