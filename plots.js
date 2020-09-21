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

const dishesSalesCol = [660986, 455152, 389790, 547009, 848625, 759338, 1276074, 703657, 682699, 720639, 684366];
const dishesSalesMed = [85928.18, 59169.76, 50672.70, 71111.17, 110321.25, 98713.94, 165889.62, 91475.41, 88750.87, 93683.07, 88967.58];
const dishesSalesFastFood = [12889.23, 8875.46, 7600.91, 10666.68, 16548.19, 14807.09, 24883.44, 13721.31, 13312.63, 14052.46, 13345.14, 13474.94, 17558.14, 18309.46, 19092.93, 19909.92, 20761.86, 21650.27, 22576.69];
