import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(data);

    const {name, image, category, price} = data

    if (name && image && category && price){
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    
        const fetchRes = await fetchData.json()
    
        console.log(fetchRes)
        toast(fetchRes.message)

        setData(() => {
            return{
                name : "",
                category : "",
                image : "",
                price : "",
                description : "",
            }
        })
      }
      else{
        toast("Enter required fields")
      }
    };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-neutral-50"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange} value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange} value={data.category}>

          <option value={"other"}>Select category</option>
          <option value={"air max"}>Air Max</option>
          <option value={"Nike Dunks"}>Nike Dunks</option>
          <option value={"Basketball"}>Basketball</option>
          <option value={"Yeezy"}>Yeezy</option>
          <option value={"Air Jordan"}>Air Jordan</option>
          <option value={"New Balance"}>New Balance</option>
          <option value={"Boots"}>Boots</option>
          <option value={"Crocs"}>Crocs</option>
          <option value={"Sandals"}>Sandals</option>
        </select>

        <label htmlFor="image">
          Image
          <div
            id="image-container"
            className="h-40 w-full bg-slate-400 rounded flex items-center justify-center cursor-pointer"
          >
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-5xl">
                <AiOutlineUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type="text"
          id="price"
          className="bg-slate-200 p-1 my-1"
          name="price"
          onChange={handleOnChange} value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={2}
          value = {data.description}
          className="bg-slate-200 p-1 my-1 resize-none"
          name="description"
          onChange={handleOnChange}
        ></textarea>

        <button className="bg-sky-500 hover:bg-sky-600 text-neutral-50 text-lg font-medium my-2 drop-shadow-md">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
