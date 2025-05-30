import Image from 'next/image';

const FeaturedPropertyCard = ({ property }) => {
    
  return (
    <div className='rounded-xl shadow-md relative'>
      <Image
        src={property.images[0]}
        alt=''
        width='0'
        height='0'
        sizes='100vw'
        className='w-full h-auto rounded-t-xl'
      />
    </div>
  );
}
 
export default FeaturedPropertyCard;