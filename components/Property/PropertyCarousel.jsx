import FeaturedPropertyCard from "./FeaturedPropertyCard";

const PropertyCarousel = ({ properties }) => {
  return <>
    {properties.map((property) => (
      <FeaturedPropertyCard key={property._id} property={property} />
    ))}
  </>;
}
 
export default PropertyCarousel;