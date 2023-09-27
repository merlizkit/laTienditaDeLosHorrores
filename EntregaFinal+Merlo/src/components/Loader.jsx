import { ThreeCircles } from 'react-loader-spinner';

export const Loader = ({ loading }) => {
  return (
    <>
      {loading === true && (
        <h2>
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </h2>
      )}
    </>
  );
};