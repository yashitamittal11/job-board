import { useEffect } from 'react';
import { ChartsContainer, StatsContainer, Loading } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    ( store ) => store.allJobs
  );

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( showStats() );
  }, []);
  return (
    <>
     <StatsContainer />
      { monthlyApplications.length > 0 && <ChartsContainer /> }
    </>
  );
};
export default Stats;
