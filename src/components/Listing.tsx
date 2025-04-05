import React from 'react';

interface ItemModel {
  listing_id: number;
  url: string;
  MainImage: string | null;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: ItemModel[]; // Массив предложений, где каждое предложение соответствует структуре interface выше
  render: (data: ItemModel[]) => React.ReactNode; // Render props
}

const Listing = ({ items, render }: ListingProps) => {
  return <>{render(items)}</>;
};

export default Listing;