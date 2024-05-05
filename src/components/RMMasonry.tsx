import { useEffect, useState } from "react"
import _ from 'lodash'
import { Masonry } from "@mui/lab"
import axios from "axios"
import { isMobile } from "react-device-detect"
import {   CellMeasurer,
    CellMeasurerCache,
    createMasonryCellPositioner,Masonry } from 'react-virtualized'

import RMCard from "./RMCard"

interface DataProps {
    name: string;
    image: string;
    species: string;
    status: string;
}[]

function RMMasonry(){
    const [data, setData] = useState([])

    const fetchData = async () =>{
        try{
            const res = (await axios.get(`https://rickandmortyapi.com/api/character/?page=1`)).data.results
            console.log(res)
            setData(res)
        } catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return(
        <Masonry columns={isMobile ? 2 : 4} spacing={2}>
            {
                _.map(data, (d: DataProps, index: number)=>
                    <RMCard 
                        key={index}
                        name={d.name}
                        image={d.image}
                        species={d.species}
                        status={d.status}
                    />
                )
            }
        </Masonry>
    )
}

export default RMMasonry