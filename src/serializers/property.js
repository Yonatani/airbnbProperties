export default function serialize(property) {
  return {
    id: property.listing.id,
    picture: property.listing.picture_url,
    address: property.listing.public_address,
    title: property.listing.name,
    price: property.pricing_quote.nightly_price
  }
}
