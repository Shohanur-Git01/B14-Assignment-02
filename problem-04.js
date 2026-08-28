// Problem 04

function topRatedRestaurant(restaurants) {

    let topRestaurant = restaurants[0];

    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }
    else {
        for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].rating > topRestaurant.rating) {
                topRestaurant = restaurants[i];
            }
        }
    }
    return topRestaurant.name.toUpperCase();
}
