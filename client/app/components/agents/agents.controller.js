
import service from './agents.service';

class AgentsController {

  constructor() {
    this.name = 'agents';
  }
}

function findAgents(){
    service.getAgents(this.searchInput)
    .then(
        (res) => {
          this.agents = res.agents;
        }
      );
}
export default AgentsController;
