const x = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

const paperDishesProduction = {
    x,
    y: [1749, 1073, 5072, 8712, 4259, 3100, 4760, 797, 619, 1038],
    name: 'Producción de platos de papel'
};

const paperDishesSales = {
    x,
    y: [1232, 1680, 4715, 7595, 3840, 3100, 4440, 634, 893, 1022],
    name: 'Venta de platos de papel'
};

// const paperDishesSalesValue = {
//     x,
//     y: [168004, 168044, 307528, 114441, 60192, 38940, 54218, 78937, 116319, 147354]
// }; 

const paperDishesData = [paperDishesProduction, paperDishesSales];

const paperDishesLayout = {
    title: 'Platos de papel'
};

////////////////////////////////
// Plastic dishes
////////////////////////////////

const plasticDishesProduction = {
    x,
    y: [658376,450167,686886,516482,599824,758125,1292173,739258,858521,848508,788800],
    name: 'Producción de platos de plástico'
}

const plasticDishesSales = {
    x,
    y: [660986,453920,388110,542294,841030,755498,1272974,699217,682065,719746,683344],
    name: 'Venta de platos de plástico'
}

// const plasticDishesSalesValue = {
//     y: [660986,453920,388110,542294,841030,755498,1272974,699217,682065,719746,683344]    
// }

const plasticDishesData = [plasticDishesProduction, plasticDishesSales];

const plasticDishesLayout = {
    title: 'Platos de plástico'
};

////////////////////////////////
// Paper glasses
////////////////////////////////

const paperGlassesProduction = {
    x,
    y: [458158, 370165, 379747, 406815, 452615, 465755, 438406, 398412, 565554, 650941, 666281],
    name: 'Producción de vasos de papel' 
}

const paperGlassesSales = {
    x,
    y: [445298, 372430, 386902, 400492, 442627, 468707, 426523, 393133, 577612, 677312, 675619],
    name: 'Venta de vasos de papel'
}

const paperGlassesData = [paperGlassesProduction, paperGlassesSales];

const paperGlassesLayout = {
    title: 'Vasos de papel'
};

////////////////////////////////
// Plastic glasses
////////////////////////////////

const plasticGlassesProduction = {
    x,
    y: [4866706,5270911,4775220,5128827,5476933,5794193,6931260,6564281,6924850,7431594,6730375],
    name: 'Producción de vasos de plástico'
}

const plasticGlassesSales = {
    x,
    y: [4630837,5246670,4740165,5114575,5752354,5910617,6812706,6749843,6940486,7419130,6601251],
    name: 'Venta de vasos de plástico'
}

const plasticGlassesData = [plasticGlassesProduction, plasticGlassesSales];

const plasticGlassesLayout = {
    title: 'Vasos de plástico'
};


Plotly.newPlot('plot-paper-dishes', paperDishesData, paperDishesLayout);
Plotly.newPlot('plot-plastic-dishes', plasticDishesData, plasticDishesLayout);
Plotly.newPlot('plot-paper-glasses', paperGlassesData, paperGlassesLayout);
Plotly.newPlot('plot-plastic-glasses', plasticGlassesData, plasticGlassesLayout);

/*
 *
 * Proyections
 * Plots
 * Logic
 * Below
 * This
 * Unnecesary
 * Comment
 * 
 */ 

////////////////////////////////
// Dishes sales Col
////////////////////////////////

const proyectionsYears = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

const dishesSalesCol = {
    x: proyectionsYears,
    y: [660986, 455152, 389790, 547009, 848625, 759338, 1276074, 703657, 682699, 720639, 684366]
};

////////////////////////////////
// Dishes sales Med
////////////////////////////////

const dishesSalesMed = {
    x: proyectionsYears,
    y: [85928.18, 59169.76, 50672.70, 71111.17, 110321.25, 98713.94, 165889.62, 91475.41, 88750.87, 93683.07, 88967.58]
}

////////////////////////////////
// Dishes fast food
////////////////////////////////

const dishesFastFood = {
    x: proyectionsYears,
    y: [12889.23, 8875.46, 7600.91, 10666.68, 16548.19, 14807.09, 24883.44, 13721.31, 13312.63, 14052.46, 13345.14, 13474.94, 17558.14, 18309.46, 19092.93, 19909.92, 20761.86, 21650.27, 22576.69]
};

////////////////////////////////
// Dishes restaurants
////////////////////////////////

const dishesRestaurants = {
    x: proyectionsYears,
    y: [12244.77, 8431.69, 7220.86, 10133.34, 15720.78, 14066.74, 23639.27, 13035.25, 12647.00, 13349.84, 12677.88, 12801.20, 16680.24, 17393.99, 18138.28, 18914.42, 19723.77, 20567.76, 21447.85]
};

Plotly.newPlot('dishes-total-col', [dishesSalesCol], { title: 'Venta total de platos Colombia' });
Plotly.newPlot('dishes-total-med', [dishesSalesMed], { title: 'Medellín' });
Plotly.newPlot('dishes-fast-food', [dishesFastFood], { title: 'Comidas rápidas' });
Plotly.newPlot('dishes-restaurants', [dishesRestaurants], { title: 'Restaurantes interesados en productos ecológicos' });

////////////////////////////////
// Glasses sales Col
////////////////////////////////
const glassesSalesCol = {
    x: proyectionsYears,
    y: [5076135, 5619100, 5127067, 5515067, 6194981, 6379324, 7239229, 7142976, 7518098, 8096442, 7276870]
};


////////////////////////////////
// Glasses sales Medellín
////////////////////////////////

const glassesSalesMed = {
    x: proyectionsYears,
    y: [659897.55, 730483.00, 666518.71, 716958.71, 805347.53, 829312.12, 941099.77, 928586.88, 977352.74, 1052537.46, 945993.10]
}

////////////////////////////////
// Glasses fast food
////////////////////////////////

const glassesFastFood = {
    x: proyectionsYears,
    y: [98984.63, 109572.45, 99977.81, 107543.81, 120802.13, 124396.82, 141164.97, 139288.03, 146602.91, 157880.62, 141898.97, 144582.90, 172273.52, 180419.27, 188950.19, 197884.48, 207241.22, 217040.38, 227302.89]
}

////////////////////////////////
// Glasses restaurants
////////////////////////////////

const glassesRestaurants = {
    x: proyectionsYears,
    y: [94035.40, 104093.83, 94978.92, 102166.62, 114762.02, 118176.98, 134106.72, 132323.63, 139272.77, 149986.59, 134804.02, 137353.75, 163659.84, 171398.31, 179502.68, 187990.26, 196879.16, 206188.36, 215937.74]
}

Plotly.newPlot('glasses-total-col', [glassesSalesCol], { title: 'Venta total de vasos Colombia' });
Plotly.newPlot('glasses-total-med', [glassesSalesMed], { title: 'Medellín' });
Plotly.newPlot('glasses-fast-food', [glassesFastFood], { title: 'Comida rápida' });
Plotly.newPlot('glasses-restaurants', [glassesRestaurants], { title: 'Restaurantes interesados en productos ecológicos' });

// const dishesSalesMed = [85928.18, 59169.76, 50672.70, 71111.17, 110321.25, 98713.94, 165889.62, 91475.41, 88750.87, 93683.07, 88967.58];
// const dishesSalesFastFood = [12889.23, 8875.46, 7600.91, 10666.68, 16548.19, 14807.09, 24883.44, 13721.31, 13312.63, 14052.46, 13345.14, 13474.94, 17558.14, 18309.46, 19092.93, 19909.92, 20761.86, 21650.27, 22576.69];
