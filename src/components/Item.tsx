interface ItemProps {
  listing_id: number;
  url: string;
  MainImage: string | null;
  title?: string;
  currency_code: string;
  price: string;
  quantity: number;
}

const Item = ({
  url,
  MainImage,
  title,
  currency_code,
  price,
  quantity,
}: ItemProps) => {

  const truncatedTitle =
    title && title.length > 50 ? `${title.slice(0, 50)}...` : title || 'No title available';

  const formattedPrice =
    currency_code === 'USD'
      ? `$${price}`
      : currency_code === 'EUR'
      ? `€${price}`
      : `${price} ${currency_code}`;

  const quantityClass =
    quantity <= 10
      ? 'level-low'
      : quantity <= 20
      ? 'level-medium'
      : 'level-high';

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          {/* рендерим тег img только если есть изобр. */}
          {MainImage && <img src={MainImage} alt={title} />}
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{truncatedTitle}</p>
        <p className="item-price">{formattedPrice}</p>
        <p className={`item-quantity ${quantityClass}`}>{quantity} left</p>
      </div>
    </div>
  );
};

export default Item;
