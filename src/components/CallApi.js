import axios from 'axios';

const [collection, setCollection] = useState({});
const CallApi = () => {
  const collectionAxios = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setCollection(res.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    collectionAxios();
  }, []);
  return;
};
export const getProducts = () => {
  return collection;
};

export const getProduct = id => {
  return collection.find(product => product.id == id);
};
export default CallApi;
