import { Grid, Link, Theme, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Input } from '../style';
import { FileUploadOutlined } from '@mui/icons-material';
import Uploading from './uploading';

const Upload: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploading, setUploading] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        hiddenFileInput?.current?.click();
        setShowComponent(true)
    }
    useEffect(()=>{
    const handleClick = setTimeout(() => setShowComponent(true),3000)
    return ()=>{
        clearTimeout(handleClick)
    }
    },[])

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const files: File[] = Array.from(fileList);
            setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
        }
    };

    const handleUpload = () => {
        setUploading(true);
        setTimeout(() => {
            // Simulating upload completed
            //   setUploading(false);
            setUploadedFiles(selectedFiles);
            setSelectedFiles([]);
        }, 2000);
    };

    return (
        <>
            {selectedFiles.length === 0 && (
                <Typography sx={{
                    cursor: 'pointer',
                    color: (theme: Theme) => theme.palette.linkBlue.main,
                    border: '2px dotted',
                    borderColor: (theme: Theme) => theme.palette.secondary.main
                }}
                    style={Box}
                    onClick={() => handleClick()}
                >
                    <Grid container lg={12}>
                        <Grid xs={12}>
                            <FileUploadOutlined />
                        </Grid>
                        <Grid xs={12}>
                            <input
                                type='file'
                                ref={hiddenFileInput}
                                style={Input}
                                onChange={handleFileChange}
                            />
                            <Typography sx={{ color: '#000', mr: '5px', display: 'inline-block' }}>Drag & Drop or</Typography>
                            Choose File<Typography sx={{ color: '#000', ml: '5px', display: 'inline-block' }}> to Upload</Typography>
                        </Grid>
                    </Grid>
                </Typography>
            )}
            {selectedFiles.length > 0 && (
                <>
                    { showComponent ? <Uploading />  : null}
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    {/* {!uploading && (
                        <button onClick={handleUpload}>Upload</button>
                    )} */}
                </>
            )}
           
        </>
    );
};

export default Upload; 