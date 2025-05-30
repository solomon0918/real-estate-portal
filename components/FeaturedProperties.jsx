import connectDB from '@/config/database';
import Property from '@/models/Property';
import PropertyCarousel from './Property/PropertyCarousel';

const FeaturedProperties = async () => {
  await connectDB();
    
  const featuredProperty = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  
  return <PropertyCarousel properties={featuredProperty} />;
}
 
export default FeaturedProperties;