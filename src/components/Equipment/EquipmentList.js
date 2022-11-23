import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getEquipment } from "../../api/dbApi";

export const EquipmentList = () => {
  const queryClient = useQueryClient();

  const query = useQuery(["equipment"], getEquipment, {
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  console.log(query);
  return (
    <>
      <Link onClick={() => queryClient.invalidateQueries(["equipment"])} to="/">
        Take me away
      </Link>
    </>
  );
};
