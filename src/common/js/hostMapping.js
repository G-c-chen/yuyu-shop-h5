const mapping = {
    default: {
        development: 'https://sandbox-api-nl.feelsowarm.com',
        production: 'https://api-nl.feelsowarm.com',
    },
}

export default function getApiHost(flag) {
    let env = window.location.origin.indexOf('home-nl.feelsowarm.com') > -1 ? 'production' : 'production'
    return mapping[flag || 'default'][env]
}
