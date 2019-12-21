import config from '../config'
import TokenService from './token-service'

const questionApiService = {
    getQuestions() {
        return fetch(`${config.API_ENDPOINT}/questions`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },
    getQuestionById(questionId) {
        return fetch(`${config.API_ENDPOINT}/questions/${questionId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getQuestionAnswers(questionId) {
        return fetch(`${config.API_ENDPOINT}/questions/${questionId}/answers`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postAnswer({question_id, answer}) {
        return fetch(`${config.API_ENDPOINT}/answers`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({question_id, answer})
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postQuestion(question) {
        return fetch(`${config.API_ENDPOINT}/questions`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(question)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateQuestionFields({questionId, questionFields}) {
        return fetch(`${config.API_ENDPOINT}/questions/${questionId}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(questionFields)
        })
    },
    updateAnswerFields({answerId, answerFields}) {
        return fetch(`${config.API_ENDPOINT}/answers/${answerId}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(answerFields)
        })
    }
}
export default questionApiService