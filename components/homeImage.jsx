import Image from "next/image";

const HomeImage = () => {
  return (
    <div className="fixed bottom-96" style={{ zIndex: "-1" }}>
      <Image
        className="absolute"
        width={"900px"}
        height={"600px"}
        src="https://i.imgur.com/iRfeg7C.jpg"
      />
    </div>
  );
};

export default HomeImage;
