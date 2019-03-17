class AgentsList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.props);
  }

  render() {
    const { agents } = this.props;

    ...

    var agentsNodes = agents.map(function(agent, i) {
      if(agent.id_intervention == "") {
        return (
          <Agent agent={agent} key={i} ticket={t} id={row_names} onClick={this.handleClick.bind(this)} />
        );
      }
    });
    return (
      <div id="agents">
        <div className="agents-title">
          <h3>Title</h3>
        </div>
        {agentsNodes}
      </div>
    );
  }
}

class Agent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { agent, t } = this.props;

    return (
      <Link to='/' onClick={this.props.onClick}>
        ...
      </Link>
    );
  }
}