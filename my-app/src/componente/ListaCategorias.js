import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const FiltradoCategorias = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductsByCategoryId(params.id).then((categoryId) => {
      setData(
        categoryId.docs.map((documento) => {
          console.log(documento.data());
          return {
            id: documento.id,
            ...documento.data(),
          };
        })
      );
    });
  }, [params.id]);
  <div>
    {items.length ? (
      items.map((item) => (
        <div>
          <Link to={"../items/categoria/" + item.id}>
            {item.titulo}
          </Link>
        </div>
      ))
    ) : (
      <h3>No Hay Resultados</h3>
    )}
  </div>;
};
export default FiltradoCategorias;
