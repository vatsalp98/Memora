import React from 'react';
import { useForm } from "react-hook-form";
import { Box, IconButton } from "@mui/material";
import { Close, InsertPhoto, VideoCameraBack, Edit } from '@mui/icons-material';
import CapsuleDatePicker from './capsule_date_picker';

type Inputs = {
	postText: string,
	visibility: string,
};

const AddCapsule = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
	const onSubmit = (data: Inputs) => console.log(data);

	return (
	
		<div className="w-full max-w-2xl mx-auto rounded-md shadow-md overflow-hidden bg-[#171717]">
			<div className="flex items-center justify-between px-4 py-2 bg-[#171717]">
				<div className="flex items-center">
					<img className="h-12 w-12 rounded-full" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="Your name" />
					<div className="ml-4 flex flex-col">
						<h2 className="font-semibold text-white">Your Username</h2>
						<select
							{...register('visibility', { required: true })}
							className="mt-1 block w-full py-2 px-3 border border-r-8 border-[#1B272F] bg-[#1B272F] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md text-[#D1E4F2]">
						
							<option value="public">Public</option>
							<option value="private">Private</option>
							<option value="friends">Friends Only</option>
						</select>
						{errors.visibility && <span className="text-red-500 text-sm">Please select visibility</span>}
					</div>
				</div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<textarea
					className="w-full px-4 py-2 text-[#A4A6A8] border-[#171717]  rounded-lg focus:outline-none bg-[#171717]"
					rows={7}
					{...register('postText', { required: true })}
					placeholder="What do you want to talk about?">
				</textarea>
				{errors.postText && <span className="text-red-500 text-sm">This field is required</span>}
				<div className="flex items-center justify-between px-4 py-2 bg-[#171717]">
					<div className="flex items-center">
						
						<div className="w-12 h-12 rounded-full bg-[#293138] flex items-center justify-center hover:bg-[#1B272F]">
							<InsertPhoto
								sx={{
									
									color: 'white',
								}}
							/>
						</div>
						

						<Box sx={{ width: 10 }}/>
						<div className="w-12 h-12 rounded-full bg-[#293138] flex items-center justify-center hover:bg-[#1B272F]">
							<VideoCameraBack
								sx={{
									
									color: 'white',
								}}
							/>
						</div>
						<Box sx={{ width: 10 }}/>
						<CapsuleDatePicker/>
					</div>
					<button className="px-4 py-1 text-white font-light tracking-wider bg-[#126EAB] rounded" type="submit">Post</button>
				</div>
			</form>
		</div>
	
	);
};

export default AddCapsule;
