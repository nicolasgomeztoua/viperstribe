import Image from "next/image";
import React from "react";
const Home = () => {
  return (
    <div className="flex justify-center bg-black w-100 h-100 flex-col p-28">
      <h1 className="text-4xl md:text-7xl text-center text-white mb-16 font-bold">
      &quot;Sapientia abscondtia&quot;
        <br />
        Hidden Wisdom
      </h1>
      <div className="lg:grid grid-cols-3 gap-4 pt-3">
        <div className="flex items-center justify-center">
          <Image src="/images/Home1.png" width={800} height={800} style={{maxWidth:"100vw"}} alt="thomas qoute"/>
        </div>
        <div>
          <h2 className="text-white text-center text-2xl">
            We strike at night <br />
            We are the Vipers <br />
            We don&apos;t need light <br />
            Invisible fighters <br /><br />
            They fear our Venom <br /> 
            They call us toxic <br />
            When we come
            <br /> You get neurotic
            <br />
            <br />
            Prepare for death
            <br />
            You got no chance <br />
            Take your last breath
            <br />
            We&apos;re too advanced
            <br />
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/Home2.png" width={800} height={800} style={{maxWidth:"100vw"}} alt="thomas qoute"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
