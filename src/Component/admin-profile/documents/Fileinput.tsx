import * as React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Theme } from '@mui/material';

// interface UploaderProps {
//   fileType?: string | AcceptedFileType[];
// }

// enum AcceptedFileType {
//   Text = ".txt",
//   Gif = ".gif",
//   Jpeg = ".jpg",
//   Png = ".png",
//   Doc = ".doc",
//   Pdf = ".pdf",
//   AllImages = "image/*",
//   AllVideos = "video/*",
//   AllAudios = "audio/*"
// }

//  const Upload = (props: UploaderProps) => {
//   const { fileType } = props;
//   const acceptedFormats: string | AcceptedFileType[] =
//     typeof fileType === "string"
//       ? fileType
//       : Array.isArray(fileType)
//       ? fileType?.join(",")
//       : AcceptedFileType.Text;
//   const [selectedFiles, setSelectedFiles] = useState<File | undefined>(
//     undefined
//   );

//   const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedFiles(event?.target?.files?.[0]);
//   };

//   const onUpload = () => {
//     console.log(selectedFiles);
//   };
const Upload = () => {
  const handleFileUpload = (file: File) => {
    // Handle the uploaded file here
    console.log('Uploaded file:', file);
  };
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    console.log(selectedFiles);
  };
  return (
      
        <TextField
          className="field"
          type='file'
          ref={hiddenFileInput}
        onClick={handleClick}

          onChange={handleChange}
        >
        Choose File
        </TextField>
  );
}
export default Upload;