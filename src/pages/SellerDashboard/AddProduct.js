import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const product = {
  pName:"",
  pBrand:"",
  pCategory:"",
  pUnit:"",
  pMinqty:"",
  pLotnum:"",
  pDate:"",
  pBarcode:"",
  pImage:"",
  pPrice:"",
  ptax:"",
  pPurches:"",
  pDiscount:"",
  pTaxtype:"",
  pMargin:"",
  pSalePrice:"",
  pFinalPrice:""

}
const AddProduct = () => {
 
  const [values , setValues] =  useState(product);
  const [startDate, setStartDate] = useState(new Date());
  const [price, setPrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [profitMargin, setProfitMargin] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const baseUrl = 'http://127.0.0.1:8000/api/product';

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handlePurchasePriceChange = (event) => {
    setPurchasePrice(event.target.value);
  };

  const handleInputChange = (e) =>{
    const {name , value} = e.target;
    setValues({
      ...values,
      [name]:value,
    });
  };

  const handlePriceChange = (event) => {
    const newPrice = event.target.value;
    const profitMarginPercentage = parseFloat(profitMargin) || 0;
    const costPrice = parseFloat(newPrice) || 0;

    // Calculate final price based on cost price and profit margin percentage
    const profitAmount = (costPrice * profitMarginPercentage) / 100;
    const calculatedFinalPrice = costPrice + profitAmount;

    // Update the state variables
    setPrice(newPrice);
    setFinalPrice(calculatedFinalPrice.toFixed(2)); // Round to 2 decimal places
  };

  const handleProfitMarginChange = (event) => {
    const newProfitMargin = event.target.value;
    const costPrice = parseFloat(price) || 0;
    const profitMarginPercentage = parseFloat(newProfitMargin) || 0;

    // Calculate final price based on cost price and profit margin percentage
    const profitAmount = (costPrice * profitMarginPercentage) / 100;
    const calculatedFinalPrice = costPrice + profitAmount;

    // Update the state variables
    setProfitMargin(newProfitMargin);
    setFinalPrice(calculatedFinalPrice.toFixed(2)); // Round to 2 decimal places
  };

  const handleSalesPriceChange = (event) => {
    setSalesPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   

    const formData = {
      p_name:event.target.elements
    }

  };

  return (
   
    <div >
      <form  onSubmit={handleSubmit}
      className="col-span-1  m-4 rounded-lg border bg-white p-4">
        <div className="-mx-3 mb-6 flex flex-wrap ">
          <h1 className="block pl-2 font-extrabold uppercase ">
            Create Product
          </h1>
        </div>

        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-first-name"
            >
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Product"
              required
              value={values.pName}
              onChange={handleInputChange}
              name="pName"
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-state"
            >
              Brand
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
              >
                <option>Select</option>
                <option>mng</option>
                <option>lmlkkuh</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-state"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
                required
              >
                <option value="">Select</option>
                <option>xplx</option>
                <option>jksuh</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-unit"
            >
              Unit <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
                required
              >
                <option value="">Select</option>
                <option>xplx</option>
                <option>jksuh</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Minimum Qty
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder=""
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Lot Number
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder=""
            ></input>
          </div>
    
        </div>
        <div className="-mx-3 mb-2 flex flex-wrap">
         
        
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-zip"
            >
              Expire Date
            </label>

            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              className="w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none "
            />
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Barcode
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="Barcode"
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Product Image
            </label>
            <button
              className="focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-300 focus:outline-none"
              type="button"
            >
              Choose File
            </button>
            <p className="text-xs italic text-red-500">
              Max Width/Height: 1000px * 1000px & Size: 1MB
            </p>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Price <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              value={price}
              onChange={handlePriceChange}
              required
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-unit"
            >
              Tax <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
                required
              >
                <option value="">Select</option>
                <option>xplx</option>
                <option>jksuh</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className=" mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Purchase Price <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              value={purchasePrice}
              onChange={handlePurchasePriceChange}
              disabled
              required
            ></input>
          </div>
        </div>

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Discount <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-unit"
            >
              Tax Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
              >
                <option value="">Select</option>
                <option>xplx</option>
                <option>jksuh</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="relative mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Profit Margin (%)
              <span
                className="absolute h-4 w-4 -translate-y-1/4 translate-x-1/4 transform justify-center rounded-full bg-red-500 text-center font-serif text-xs lowercase text-white"
                onMouseEnter={() => setShowPopup2(true)}
                onMouseLeave={() => setShowPopup2(false)}
              >
                i
              </span>
              {showPopup2 && (
                <div className="popup-box absolute left-0 top-8 rounded border border-gray-300 bg-white p-4 shadow-md">
                  Based on Purchased Price
                </div>
              )}
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder=""
              value={profitMargin}
              onChange={handleProfitMarginChange}
            />
          </div>
        </div>

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              sales Price <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              value={salesPrice}
              onChange={handleSalesPriceChange}
              required
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Final Price <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              value={finalPrice}
              readOnly
              required
            ></input>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className="mb-4 flex justify-end  ">
          <button type="sumbit" className="mr-2 rounded-lg border bg-blue-500 px-4 py-2 text-white">
            Save
          </button>
          {/* Export Product Button */}
          <button className="mr-2 rounded-lg border bg-yellow-500 px-4 py-2 text-white">
            Close
          </button>
        </div>
      </form>
    </div>
    
  );
};

export default AddProduct;
