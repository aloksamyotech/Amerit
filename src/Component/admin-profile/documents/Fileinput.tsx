import * as React from "react";
import { Box, Button, Link, TextField, Typography,Theme } from "@mui/material";
import { useState, useRef } from "react";
import { FileUploadOutlined } from "@mui/icons-material";

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
const Upload = ({ fileType }) => {
  const fileRef = React.useRef();
  const acceptedFormats =
    typeof fileType === 'string'
      ? fileType
      : Array.isArray(fileType)
        ? fileType?.join(',')
        : AcceptedFileType.Text;
  const handleFileUpload = (file: File) => {
    console.log('Uploaded file:', file);
  };
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    console.log(files)
    const selectedFiles = files as FileList;
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
          accept={acceptedFormats}
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