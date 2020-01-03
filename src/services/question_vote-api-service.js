import config from '../config';
import TokenService from './token-service';

const questionVoteApiService = {
    patchVote({questionId, vote}) {
        return fetch(`${config.API_ENDPOINT}/qvotes/${questionId}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({vote}),
        })
    }
}

export default questionVoteApiService;