import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateProducts = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [Type, setType] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const handleSaveProduct = () => {
        const data = {
            name,
            description,
            type,
        }
        setLoading(true)
        axios
        .post("http://localhost:5555/products", data)
        .then(() => {
            setLoading(false)
            enqueueSnackbar("Product Created Successfully", { variant: "success" })
            navigate("/")
        })
        .catch((error) => {
            setLoading(false)
            // alert("An error happened. Please check console")
            enqueueSnackbar('Error', { variant: "error" })
            console.log(error)
        })
    }
    return (
        <div className="p-4">
          <BackButton />
          <h1 className="text-3xl my-4">Create Product</h1>
          {loading ? <Spinner /> : ''}
          <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500">Name</label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-2 border-gray-500 px-4 py-2 w-full"
                />
            </div>
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500">Description</label>
                <input 
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border-2 border-gray-500 px-4 py-2 w-full"
                />
            </div>
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500">Type</label>
                <input 
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="border-2 border-gray-500 px-4 py-2 w-full"
                />
            </div>
            <button className="p-2 bg-sky-300 m-8" onClick={handleSaveProduct}>
                Save
            </button>
          </div>
        </div>
    )
}

export default CreateProducts