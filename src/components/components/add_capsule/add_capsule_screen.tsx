/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useForm } from "react-hook-form";
import { Box, IconButton } from "@mui/material";
import { Close, InsertPhoto, VideoCameraBack, Edit } from "@mui/icons-material";
import CapsuleDatePicker from "./capsule_date_picker";

type Inputs = {
  postText: string;
  visibility: string;
};

const AddCapsule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-md bg-[#171717] shadow-md">
      <div className="flex items-center justify-between bg-[#171717] px-4 py-2">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt="Your name"
          />
          <div className="ml-4 flex flex-col">
            <h2 className="font-semibold text-white">Your Username</h2>
            <select
              {...register("visibility", { required: true })}
              className="md:text-md mt-1 block w-full rounded-md border border-r-8 border-[#1B272F] bg-[#1B272F] px-3 py-2 text-[#D1E4F2] shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
            {errors.visibility && (
              <span className="text-sm text-red-500">
                Please select visibility
              </span>
            )}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="w-full rounded-lg border-[#171717] bg-[#171717] px-4  py-2 text-[#A4A6A8] focus:outline-none"
          rows={7}
          {...register("postText", { required: true })}
          placeholder="What do you want to talk about?"
        ></textarea>
        {errors.postText && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
        <div className="flex items-center justify-between bg-[#171717] px-4 py-2">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#293138] hover:bg-[#1B272F]">
              <InsertPhoto
                sx={{
                  color: "white",
                }}
              />
            </div>

            <Box sx={{ width: 10 }} />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#293138] hover:bg-[#1B272F]">
              <VideoCameraBack
                sx={{
                  color: "white",
                }}
              />
            </div>
            <Box sx={{ width: 10 }} />
            <CapsuleDatePicker />
          </div>
          <button
            className="rounded bg-[#126EAB] px-4 py-1 font-light tracking-wider text-white"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCapsule;
