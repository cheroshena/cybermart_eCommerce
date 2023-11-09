import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {cabej,carrot,garlic,onion,potato,kome,mixer,mrpop,Pic121600,scanjumbo,tetos,bread01,bread02,frenchbread} from "../../../assets/images/index";

const SpecialOffers = () => {

  return (

    <div className="w-full pb-20">
      <Heading heading="Our Products" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
       
      <Product
          _id="1104"
          img={cabej}
          productName="Vegitables"
          price="220.00"
          color="Cabbage"
          badge={true}
          shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
         <Product
          _id="1104"
          img={carrot}
          productName="Vegitables"
          price="220.00"
          color="Carrot"
          badge={true}
          shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
         <Product
          _id="1104"
          img={garlic}
          productName="Vegitables"
          price="220.00"
          color="Garlic"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
         <Product
          _id="1104"
          img={onion}
          productName="Vegitables"
          price="220.00"
          color="Onions"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
         <Product
          _id="1104"
          img={potato}
          productName="Vegitables"
          price="220.00"
          color="Potato"
          badge={true}
            shopName="Silva's Market"
        location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
         <Product
          _id="1104"
          img={kome}
          productName="Snacks"
          price="220.00"
          color="Munche Kome"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
         <Product
          _id="1104"
          img={mixer}
          productName="Snacks"
          price="220.00"
          color="Noas Super Indian Mix"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
         <Product
          _id="1104"
          img={mrpop}
          productName="Snacks"
          price="220.00"
          color="Mr.Pop Classic 25g"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
         <Product
          _id="1104"
          img={Pic121600}
          productName="Snacks"
          price="220.00"
          color="Black"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
          <Product
          _id="1104"
          img={scanjumbo}
          productName="Snacks"
          price="220.00"
          color="Scan Jumbo Pack"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
          <Product
          _id="1104"
          img={tetos}
          productName="Snacks"
          price="220.00"
          color="Tetos"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
          <Product
          _id="1104"
          img={frenchbread}
          productName="Daily Products"
          price="220.00"
          color="Bread"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
          <Product
          _id="1104"
          img={bread01}
          productName="Daily Products"
          price="220.00"
          color="Bread"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
          <Product
          _id="1104"
          img={bread02}
          productName="Daily Products"
          price="220.00"
          color="Bread"
          badge={true}
            shopName="Silva's Market"
    location="Wennappuwa"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
