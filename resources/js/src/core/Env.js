export const psl = (env, call) => {
    let pslenv = {
        local: {
            'url': 'http://192.168.1.80:5500'   
        },
        dev: {
            'url': 'https://dev-personal.pofsis.com'   
        },
        test: {
            'url': 'https://test-personal.pofsis.com'   
        },
        prod: {
            'url': 'https://personal.pofsis.com'   
        },
    }

    return pslenv[env][call]

}

export const biz = (env, call) => {
    let psldev = {
        local: {
            'url': 'http://192.168.1.80:5500'   
        },
        dev: {
            'url': 'https://dev-business.pofsis.com'   
        },
        test: {
            'url': 'https://test-business.pofsis.com'   
        },
        prod: {
            'url': 'https://business.pofsis.com'   
        },
    }

    return psldev[env][call]
}
export const mt = (env, call) => {
    let psldev = {
        local: {
            'url': 'http://192.168.1.80:5300'   
        },
        dev: {
            'url': 'https://dev-management.pofsis.com'   
        },
        test: {
            'url': 'https://test-management.pofsis.com'   
        },
        prod: {
            'url': 'https://management.pofsis.com'   
        },
    }

    return psldev[env][call]
}

export const env = () => {
    return 'local'
}

