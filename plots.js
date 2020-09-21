const x = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

const paperDishesProduction = {
    x,
    y: [1749, 1073, 5072, 8712, 4259, 3100, 4760, 797, 619, 1038],
    mode: 'lines'
};

const paperDishesSales = {
    x,
    y: [1232, 1680, 4715, 7595, 3840, 3100, 4440, 634, 893, 1022]
};

// const paperDishesSalesValue = {
//     x,
//     y: [168004, 168044, 307528, 114441, 60192, 38940, 54218, 78937, 116319, 147354]
// }; 

const paperDishesData = [paperDishesProduction, paperDishesSales];

const paperDishesLayout = {
    title: 'Venta de platos de papel'
};

////////////////////////////////
// Plastic dishes
////////////////////////////////

const plasticDishesProduction = {
    x,
    y: [658376,450167,686886,516482,599824,758125,1292173,739258,858521,848508,788800]
}

const plasticDishesSales = {
    x,
    y: [660986,453920,388110,542294,841030,755498,1272974,699217,682065,719746,683344]
}

// const plasticDishesSalesValue = {
//     y: [660986,453920,388110,542294,841030,755498,1272974,699217,682065,719746,683344]    
// }

const plasticDishesData = [plasticDishesProduction, plasticDishesSales];

const plasticDishesLayout = {
    title: 'Venta de platos de plástico'
};

////////////////////////////////
// Paper glasses
////////////////////////////////

const paperGlassesProduction = {
    x,
    y: [458158, 370165, 379747, 406815, 452615, 465755, 438406, 398412, 565554, 650941, 666281] 
}

const paperGlassesSales = {
    x,
    y: [445298, 372430, 386902, 400492, 442627, 468707, 426523, 393133, 577612, 677312, 675619]
}

const paperGlassesData = [paperGlassesProduction, paperGlassesSales];

const paperGlassesLayout = {
    title: 'Venta de platos de papel'
};

////////////////////////////////
// Plastic glasses
////////////////////////////////

const plasticGlassesProduction = {
    x,
    y: [4866706,5270911,4775220,5128827,5476933,5794193,6931260,6564281,6924850,7431594,6730375]
}

const plasticGlassesSales = {
    x,
    y: [4630837,5246670,4740165,5114575,5752354,5910617,6812706,6749843,6940486,7419130,6601251]
}

const plasticGlassesData = [plasticGlassesProduction, plasticGlassesSales];

const plasticGlassesLayout = {
    title: 'Venta de platos de plástico'
};


Plotly.newPlot('plot-paper-dishes', paperDishesData, paperDishesLayout);
Plotly.newPlot('plot-plastic-dishes', plasticDishesData, plasticDishesLayout);
Plotly.newPlot('plot-paper-glasses', paperGlassesData, paperGlassesLayout);
Plotly.newPlot('plot-plastic-glasses', plasticGlassesData, plasticGlassesLayout);