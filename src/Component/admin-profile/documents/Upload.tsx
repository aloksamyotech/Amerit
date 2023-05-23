import { Grid, Link, Theme, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Input } from '../style';
import { FileUploadOutlined } from '@mui/icons-material';
import Uploading from ''

const Upload: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        hiddenFileInput?.current?.click();
        setShowComponent(true);
    }
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const files: File[] = Array.from(fileList);
            setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
        }
    };

    return (
        <>
            {selectedFiles.length === 0 && (
                <Grid sx={{
                    cursor: 'pointer',
                    width: '100%',
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
                            <Grid sx={{ color: '#000', mr: '5px', display: 'inline-block' }}>Drag & Drop or</Grid>
                            Choose File<Grid sx={{ color: '#000', ml: '5px', display: 'inline-block' }}> to Upload</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
            {selectedFiles.length > 0 && (
                <>
                    { showComponent ? <Uploading /> : null}
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </>
            )}
           
        </>
    );
};

export default Upload; 