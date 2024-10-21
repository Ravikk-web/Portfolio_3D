import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const {progress} = useProgress();
  return (

    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 animate-spin'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>

  );
};

export default Loader;