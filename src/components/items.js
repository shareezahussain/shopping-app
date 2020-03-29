 import React from 'react'


 //function, rundion name start with a capital letter



function Items({ items }) {
     let counter = 0;
     return (
         //jsx script

         
        
         <div className="mdc-layout-grid__inner item">
       
    {items.map((item) => (
    
    <div className="mdc-layout-grid__cell" key={counter++}>
    <div className="mdc-card demo-card" >
  <div className="mdc-card__primary-action demo-card__primary-action item__content" tabIndex="0">
    <div className="mdc-card__media mdc-card__media--16-9 demo-card__media item__content--image" style={{ backgroundImage:item.image }}></div>
  </div>
  <div className="mdc-card item__content--details" >

      <div className="item__content--details-text">{item.brand}<br/>{item.text}

      <br/><div className="item__content--details-price"><b>Price:</b> {item.sale==='true' ? <span className="item__content--details-price--original">{item.original_price}</span> : '' }
      
      {item.price}</div>
      </div>
  </div></div>
  
   <ShopItem text="Shop" icon="storefront" link={item.link}/>



     </div>
    ))}
    </div>
     )
 };


function ShopItem(props){
  return (
  
 

  <button className="mdc-button item__content--shop mdc-button--raised" onClick={() => HandlePageRedirect(props.link)}>
    <span className="mdc-button__label">{props.text}</span>
    <i className="material-icons mdc-button__icon" aria-hidden="true">{props.icon}</i>
  </button>

  )
};

function HandlePageRedirect(link){
  return window.open(link,'_blank');
   

   }




 export default Items