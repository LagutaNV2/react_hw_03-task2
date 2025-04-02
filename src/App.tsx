import './main.css';
import Listing from './components/Listing';
import Item from './components/Item';

// Система сборки (например, TS) результат преобразования
// автоматически присвоит переменной из строки импорта
import etsyData from './data/etsy.json';

console.log('data', etsyData);

const App = () => {
  // Преобразуем JSON в массив объектов
  const items = etsyData.map((item) => ({
    listing_id: item.listing_id,
    url: item.url || '',
    MainImage: item.MainImage?.url_570xN || null,
    title: item.title || '',
    currency_code: item.currency_code || '',
    price: item.price || '',
    quantity: item.quantity || 0,
  }));

  return (
    <div className="wrapper">
      <Listing
        items={items}
        render={(data) => (
          <div className="item-list">
            {data.map((item) => (
              <Item key={item.listing_id} {...item} />
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default App;