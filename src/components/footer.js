import React, { Component }from 'react';




function Footer(props){
return (
 <div className="mdc-layout-grid footer__content">
  <div className="mdc-layout-grid__inner">
    <div className="mdc-layout-grid__cell">
    <ul> <strong> Follow me </strong>
    <span className="footer__social">
     {props.socialAccounts.map((socialAccount) => 
   <li key={socialAccount.id}> 
   <a href={socialAccount.link} className={socialAccount.icon}></a>
  </li>
     )}
     </span>
     </ul>
    </div>
    <div className="mdc-layout-grid__cell"><ul><li><strong>{props.createdBy}</strong></li></ul></div>

    <div className="mdc-layout-grid__cell">
    <ul className="footer__remarks-items"><strong> Disclaimer </strong>
    {props.remarks.map((remark) => 
    <li key={remark.id}>{remark.text}</li>
    
    )}
    </ul>

    </div>
  </div>
</div>
)


}

export default Footer;