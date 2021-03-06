import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../Features/MetricsSelector/reducer';
import { useQuery } from 'urql';

const query = `
    {
        getMetrics
    }
`;

const useGetMetricNames = () => {
  const [result] = useQuery({
    query,
  });

  const metrics = useSelector((state: any) => state.metricsSelector.metricsNames);

  const dispatch = useDispatch();
  const { fetching, data } = result;

  useEffect(() => {
    if (!fetching) {
      dispatch(actions.metricsNamesRetreaved(data));
    }
  }, [fetching, dispatch, data]);

  return metrics;
};

export default useGetMetricNames;
