const url = "http://localhost:3000/api/v1";

class Adapter {
    constructor(url) {
        this.url = url
    }

    get(route, token = '') {
        return fetch(`${this.url}/${route}`, {
            headers: {
                "content-type": "application/json",
                'Accepts': "application/json",
                'Authorization': `Bearer ${token}`
            }
        }).then(resp => resp.json())
    }

    post(route, token = '', obj) {
        return fetch(`${this.url}/${route}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Accepts': "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(obj)
        })
            .then(resp => resp.json())
    }

    patch(route, token = '', obj) {
        return fetch(`${this.url}/${route}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                'Accepts': "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(obj)
        })
            .then(resp => resp.json())
    }
}

export const getData = new Adapter(url);