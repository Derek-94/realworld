import { selectorFamily, selector } from "recoil";

const END_POINT = "https://conduit.productionready.io/api";

const request = async() => {
    try{
        const response = await fetch(END_POINT);
        if(!response.ok) {
            throw Error("There is something wrong in request.");
        }
        const responseData = await response.json();
        return responseData;
    }
    catch (e) {   
        alert("There is something wrong in reponse.");
    }
}

export const fetchArticleData = selectorFamily({
    key: "articleData",
    get: (offset = 0) => async() => {
        const response = await fetch(`${END_POINT}/articles?offset=${offset * 20}`);
        const responseData = await response.json();
        return responseData;
    }
})

export const registerUser = selectorFamily({
    key: "registerUser",
    get: ({params}) => async() => {
        const response = await fetch(`${END_POINT}/users`, {
            method: "POST",
            body: JSON.stringify({
                "user": {
                    "username": params.inputName,
                    "email": params.inputEmail,
                    "password": params.inputPwd
                }
            })
        })
        const responseData = await response.json();
        return responseData;
    }
})