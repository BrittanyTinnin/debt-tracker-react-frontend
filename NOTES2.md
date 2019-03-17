You need to bind Agents to AgentsList: Here's a quick example with your code, I had to get rid of some stuff, but you get the idea:

http://jsfiddle.net/vhuumox0/19/

var agentsNodes = agents.map(function(agent, i) {
  if(agent.id_intervention == "") {
    return (
      <Agent agent={agent} key={i} ticket={t} id={row_names} onClick={this.handleClick.bind(this)} />
    );
  }
}, this); // here