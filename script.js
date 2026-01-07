// data.js - Database of Moroccan Food

const products = [
    // --- MALEH (SAVORY) ---
    {
        id: 1,
        name: "Royal Tagine",
        price: 180,
        category: "maleh",
        img: "https://media.gettyimages.com/id/150031040/photo/dish-of-tajine.jpg?s=612x612&w=0&k=20&c=0sRfVWaVBLrizqhAQyNIu-R5RKn_gmI9Qr4ttQPni7E=",
        desc: "Slow-cooked lamb with caramelized prunes and toasted almonds. A classic dish from the imperial cities.",
        ingredients: "Lamb, Prunes, Almonds, Cinnamon, Saffron, Honey."
    },
    {
        id: 2,
        name: "Seven Veg Couscous",
        price: 90,
        category: "maleh",
        img: "https://www.aliyasvibrantlife.com/wp-content/uploads/2020/07/Seven-Vegetable-Couscous-9-1-1024x690.jpg",
        desc: "Traditional Friday dish. Fluffy semolina steamed over a rich broth of seven vegetables and beef.",
        ingredients: "Semolina, Beef, Carrots, Turnips, Pumpkin, Zucchini, Chickpeas."
    },
    {
        id: 3,
        name: "Chicken Pastilla",
        price: 160,
        category: "maleh",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spiced-apricot-pastilla-8165870.jpg?quality=90&resize=440,400", // Placeholder
        desc: "The perfect marriage of sweet and savory. Crispy Warqa dough filled with spiced chicken and almonds.",
        ingredients: "Warqa Dough, Chicken, Almonds, Eggs, Cinnamon, Powdered Sugar."
    },
    {
        id: 4,
        name: "Tanjia Marrakchia",
        price: 60,
        category: "maleh",
        img: "https://api2.arabesquekitchen.com/images/recipe-tanjia-marrakchia-image-fja87/recipe-tanjia-marrakchia-image-fja87-medium.webp?version=1683101096669", // Placeholder
        desc: "The bachelor's dish. Beef shank slow-cooked in a clay urn in the Hammam ashes for 6 hours.",
        ingredients: "Beef Shank, Preserved Lemon, Smen, Garlic, Cumin."
    },
    {
        id: 5,
        name: "Rfissa",
        price: 190,
        category: "maleh",
        img: "https://thumbs.dreamstime.com/b/festive-traditional-moroccan-rfissa-served-sauce-decorared-quail-eggs-seeds-fruit-nuts-traditional-moroccan-115518398.jpg", // Placeholder
        desc: "A dish of celebration. Shredded Trid pastry soaked in a lentil and fenugreek chicken broth.",
        ingredients: "Beldi Chicken, Trid Pastry, Lentils, Fenugreek (Halba), Ras El Hanout."
    },

    // --- HLOU (SWEET) ---
    {
        id: 6,
        name: "Moroccan Tea Set",
        price: 50,
        category: "hlou",
        img: "https://t3.ftcdn.net/jpg/13/00/48/20/360_F_1300482054_HJCnybCQGJtWuBEXqpyHPhSVC1ke6VmE.jpg",
        desc: "Fresh mint tea served in traditional glasses. The symbol of Moroccan hospitality.",
        ingredients: "Gunpowder Green Tea, Fresh Mint, Sugar."
    },
    {
        id: 7,
        name: "Chebakia Box",
        price: 120,
        category: "hlou",
        img: "https://i.etsystatic.com/11595695/r/il/164901/4775239413/il_600x600.4775239413_k8f9.jpg", // Placeholder
        desc: "Sesame cookies fried and coated in honey. Essential for Ramadan and celebrations.",
        ingredients: "Sesame Seeds, Honey, Flour, Anise, Cinnamon, Orange Blossom Water."
    },
    {
        id: 8,
        name: "Kaab Ghazal",
        price: 140,
        category: "hlou",
        img: "https://t4.ftcdn.net/jpg/03/24/84/19/360_F_324841928_1H9eXap1AoO8NGH3mkIvoqv7BTJVtXBl.jpg", // Placeholder
        desc: "Gazelle Horns. Delicate pastry filled with almond paste and scented with orange blossom.",
        ingredients: "Almond Paste, Flour, Butter, Orange Blossom Water, Gum Arabic."
    },
    {
        id: 9,
        name: "Saffa & Cinnamon",
        price: 90,
        category: "hlou",
        img: "https://media.gettyimages.com/id/157613456/photo/cinnamon-and-sugar-mini-donuts.jpg?s=612x612&w=0&k=20&c=Rl9fRYL76Qcv2ieUVw6d7VSJgGCAorXgD5AUwYYubkY=", // Placeholder
        desc: "Steamed vermicelli decorated with cinnamon and fried almonds.",
        ingredients: "Vermicelli, Cinnamon, Powdered Sugar, Fried Almonds, Butter."
    }
];