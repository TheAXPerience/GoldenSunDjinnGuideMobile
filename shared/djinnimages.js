const DJINN_SPRITES = {
    goldensun: {
        venus: require('../assets/images/goldensun/venus_djinni.png'),
        mars: require('../assets/images/goldensun/mars_djinni.png'),
        jupiter: require('../assets/images/goldensun/jupiter_djinni.png'),
        mercury: require('../assets/images/goldensun/mercury_djinni.png'),
    },
    lostage: {
        venus: require('../assets/images/goldensun/venus_djinni.png'),
        mars: require('../assets/images/goldensun/mars_djinni.png'),
        jupiter: require('../assets/images/goldensun/jupiter_djinni.png'),
        mercury: require('../assets/images/goldensun/mercury_djinni.png'),
        zagan: require('../assets/images/lostage/zagan.png'),
    },
    darkdawn: {
        flint: require('../assets/images/darkdawn/flint.png'),
        flower: require('../assets/images/darkdawn/flower.png'),
        sleet: require('../assets/images/darkdawn/sleet.png'),
        doldrum: require('../assets/images/darkdawn/doldrum.png'),
        aurora: require('../assets/images/darkdawn/aurora.png'),
        iris: require('../assets/images/darkdawn/iris.png'),
    }
}

const GAME_LOGOS = {
    goldensun: require('../assets/images/goldensun_logo.png'),
    lostage: require('../assets/images/thelostage_logo.png'),
    darkdawn: require('../assets/images/darkdawn_logo.png'),
}

export const retrieveLogo = (game) => {
    return GAME_LOGOS[game];
}

export const retrieveSprite = (game, file) => {
    if (!game in DJINN_SPRITES) {
        // game does not exist
        return undefined;
    }
    return DJINN_SPRITES[game][file];
}
