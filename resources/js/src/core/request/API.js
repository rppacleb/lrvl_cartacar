export const request = (method, link, body='sd', qsp='') => {
    return new Promise(resolve => {
        let h = new Headers();
        h.append('Content-Type', 'application/json');

        let param = {
            method: method,
            headers: h,
            body: JSON.stringify(body),
            redirect: 'follow'
        };

        body==='' && delete param.body;

        if (qsp !== '') {
            let subqsp = []
            for (let k in qsp) { subqsp.push(`${k}=${qsp[k]}`) }
            qsp = `?${subqsp.join('&')}`
        }

        fetch(`${link}${qsp}`, param)
        .then(result => {
            return resolve(result.text())
        })
        .catch(error => console.log('error', error));
    })
}