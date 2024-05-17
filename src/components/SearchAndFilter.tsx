import { useState } from "react"

import { Box, TextField, Select, InputLabel, MenuItem, FormControl } from "@mui/material"

function SearchAndFilter(){
    const [status, setStatus] = useState('')
    const [race, setRace] = useState('')

    return(
        <div className="d-flex justify-content-center my-3">
            <TextField label="Search by name" />

            <Box className='mx-1' sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={(e)=>setStatus(e.target.value)}
                        >
                        <MenuItem value={'Alive'}>Alive</MenuItem>
                        <MenuItem value={'Dead'}>Dead</MenuItem>
                        <MenuItem value={'Unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Race</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={race}
                        label="Race"
                        onChange={(e)=>setRace(e.target.value)}
                        >
                        <MenuItem value={'Human'}>Human</MenuItem>
                        <MenuItem value={'Alien'}>Alien</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
} 

export default SearchAndFilter