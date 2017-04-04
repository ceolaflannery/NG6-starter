class AgentsService {
    "ngInject"
    constructor($http) {
        this.$http = $http;
    }

    getAgents(searchInput) {
        return this.$http.get('https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=${searchInput}')
            .then((res) => res.data);
    }
}

export default AgentsService;