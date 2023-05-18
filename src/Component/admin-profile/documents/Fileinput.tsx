import * as React from "react";
import { Box, Button, Link, TextField, Typography,Theme } from "@mui/material";
import { useState, useRef } from "react";
import { FileUploadOutlined } from "@mui/icons-material";
interface FileInputProps {
  onFileUpload: (file: File) => void;
}
const AcceptedFileType = {
  Text: '.txt',
  Gif: '.gif',
  Jpeg: '.jpg',
  Png: '.png',
  Doc: '.doc',
  Pdf: '.pdf',
  AllImages: 'image/*',
  AllVideos: 'video/*',
  AllAudios: 'audio/*',
};
const Upload: React.FC<FileInputProps> = ({ onFileUpload }) => {
  const fileRef = React.useRef();
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    const  Nmfiles  = event.target.files;
    console.log(Nmfiles[0].name)
    if (Nmfiles && Nmfiles.length > 0) {
      const file = Nmfiles[0];
      onFileUpload(file);
    }
    console.log(Nmfiles)
    const selectedFiles = Nmfiles as FileList;
    console.log(selectedFiles);
  };
  return (
    <Box>
      <FileUploadOutlined />
      <Typography>Drag & Drop or
        <Link sx={{
          cursor: 'pointer',
          mr: '10px',
          ml: '10px',
          color: (theme: Theme) =>  theme.palette.linkBlue.main
        }}
        onClick={() => handleClick()} 
        >
        <input
          type='file'
          ref={hiddenFileInput}
          onChange={handleChange}
          hidden
        />
          Choose File
        </Link>
        to Upload</Typography>
      <Typography variant='caption'>
        Jpg,Png,Pdf or Doc
      </Typography>
    </Box>

  )
}
export default Upload;