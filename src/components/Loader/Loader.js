import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <Loader
      className="loader"
      type="TailSpin"
      color="#00BFFF"
      height={200}
      width={200}
    />
  );
}
