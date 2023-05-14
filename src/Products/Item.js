import './Item.css';

function Item({data}) {
   const {url,title,price,currency_code,quantity} = data;
   let currency = price + " GBP";
   if (currency_code === "USD") {
    currency = "$"+ price;
   } else if (currency_code === "EUR") {
    currency = "€"+ price;
   }
   let itemQuantity = 'item-quantity';
   if (quantity < 20 && quantity > 10) {
    itemQuantity = 'item-quantity level-medium';
   } else if (quantity < 10) {
    itemQuantity = 'item-quantity level-low';
   } else if (quantity > 20) {
    itemQuantity = 'item-quantity level-high';
   }

   let titleProd = title;
   if (title) {
    if (titleProd.length > 50) {
        titleProd = titleProd.substr(0,49) + '...';
    }
   }
   let imgSrc = "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg";
   if (data.MainImage) {
    imgSrc = data.MainImage.url_570xN;
   }

    return (
        <div className="item">
                <div className="item-image">
                    <a href={url}>
                        <img src={imgSrc} alt="image"/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{titleProd ? titleProd : "no name"}</p>
                    <p className="item-price">{currency ? currency : "no price"}</p>
                    <p className={itemQuantity}>{quantity} left</p>
                </div>
        </div>
    )
}

Item.defaultProps = {
    currency_code: "no price",
    title: 'no name'
};

export default Item;