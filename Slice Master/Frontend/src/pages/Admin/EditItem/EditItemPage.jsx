import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Input, CheckboxInput, Select, Button, FileInput, TextArea } from '../../../components'
import toast from 'react-hot-toast'
import adminService from '../../../services/adminService'

function EditItemPage() {

  const ItemData = useLoaderData()
  const {data} = ItemData;
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [Img, setImg] = useState(null);
  const [fileName, setFileName] = useState("Upload Image Here");
  const [previewImg, setpreviewImg] = useState(null);


  const FileHandler = (event) => {
    const selectedFile = event.target.files[0];

    // Check if a file is selected
    if (selectedFile) {
      setImg(selectedFile);
      setFileName(selectedFile.name);

      // Read the selected file and set the preview image
      const reader = new FileReader();
      reader.onload = (e) => {
        setpreviewImg(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };


  const EditItemHandler = async (data) => {
      try {
        await toast.promise(
          adminService.EditItem(data,Img,ItemData.data._id),{
            loading: 'Processing...',
            success: (response) =>{
              return `${response.message}`
            },
            error: (error) => {
              return `${error}`
            }
          }
          
        )
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    setValue("itemname", data.name);
    setValue("regularprice", data.price.regular);
    setValue("medimumprice", data.price.medium);
    setValue("largeprice", data.price.large);
    setValue("istrending", data.isTrending);
    setValue("description", data.description);
    setValue("category", data.category);
    setpreviewImg(data.imgUrl);
  }, [data, setValue]);


  return (
    <div className='w-full'>
      <div className='px-10 py-5 flex flex-col items-center'>
        <h2 className='text-orange-300 font-kaushan text-4xl text-center flex'>Edit Item </h2>
      </div>
      <div className='min-h-[1px]  bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray'></div>
      <div className='py-5 px-32'>
        <form className='grid grid-cols-2 gap-16 items-start' onSubmit={handleSubmit(EditItemHandler)}>
          <div>
            <Input label="Item Name" className='bg-transparent border-white text-white font-light' labelclassName='text-white font-light ' {...register("itemname", {
              required: true,
            })} />
            {errors.itemname && <p className='text-red-500'>*Please check the item name</p>}
          </div>
          <div className='flex flex-col gap-y-3'>
            <Input label="Price" placeholder="Regular Size" className='bg-transparent border-white text-white' labelclassName='text-white font-light' {...register("regularprice", {
              required: true,
              pattern: /^[0-9]+$/,
            })} />
            <Input placeholder="Medium Size" className='bg-transparent border-white text-white' labelclassName='text-white font-light' {...register("medimumprice", {
              pattern: /^[0-9]+$/,
            })} />
            <Input placeholder="Large Size" className='bg-transparent border-white text-white' labelclassName='text-white font-light' {...register("largeprice", {
              pattern: /^[0-9]+$/,
            })} />
            {errors.price && <p className='text-red-500'>*Please check the price field</p>}
          </div>
          <div className='flex flex-col  justify-center w-full space-y-5'>
            <h1 className='text-white'>Image</h1>
            <img src={previewImg} alt="" className='w-32 object-contain border-2 border-orange-200 rounded-xl drop-shadow-3xl' />
            <FileInput labelname={fileName} onChange={FileHandler}  />
          </div>
          <div className='w-full'>
            <CheckboxInput {...register("istrending")} />
          </div>
          <TextArea className="border-white text-white" label="Description" rows='4' cols='10' {...register("description")} />
          <div>
            <Select label="Category" options={['Veg Pizza', 'Non Veg Pizza', 'Beverages']} {...register("category", {
              required: true,
            })} />
          </div>
          <Button btnName="Edit" className="w-[50%]" onClick={handleSubmit(EditItemHandler)} />
        </form>
      </div>
    </div>
  )
}

export default EditItemPage

