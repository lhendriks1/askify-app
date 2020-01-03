import config from '../config';
import TokenService from './token-service';

const answerVoteApiService = {
    patchVote({answerId, vote}) {
        return fetch(`${config.API_ENDPOINT}/avotes/${answerId}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({vote: vote})
        })
    }
}

export default answerVoteApiService;