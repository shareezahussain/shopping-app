import React, { Component }from 'react';



class Header extends Component {

state = {toogle:false,
  navs:[{id:1,text:"Home",link:"#"}, {id:2,text:"Blog",link:"https://www.yneedthis.com"}]

}

Toggle = () => {
        this.setState({toggle:!this.state.toggle})
        console.log('hey');
    }



render() {
  return (
        //jsx script
        <div className="mdc-top-app-bar__row" data-mdc-auto-init="MDCTopAppBar">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          
          <span className="mdc-top-app-bar__title">{this.props.title}</span>
        </section>
       <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
       <button onClick={this.Toggle} className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button navbar--mobile">menu</button>
          <ul className={this.state.toggle ? "navbar-items show-nav" : "navbar-items"}>
          {this.state.navs.map((nav) => (
            <li  key={nav.id} className={nav.text === 'Home' ? "mdc-top-app-bar__action-item active-nav" : "mdc-top-app-bar__action-item"} aria-label={nav.text}>
             <a target="_blank" href={nav.link}>{nav.text}</a> 
            </li>
            ))}
          </ul>
        </section>
    </div>
      )


}

}
export default Header;