import { Card, CardContent, CardMedia, Typography } from "@mui/material"

interface DataProps {
    name: string;
    image: string;
    species: string;
    status: string;
}

function RMCard({
    name,
    image, 
    species,
    status
}: DataProps){

    return(
        <Card className='card'>
            <div className="position-relative">
                <CardMedia
                    component="img"
                    height="auto"
                    image={image}
                />
                <Typography className={`position-absolute card-status ${status === 'Alive'? 'bg-green' :  status === 'Dead' ? 'bg-red' : 'bg-grey' }`}>{status}</Typography>
            </div>
            <CardContent>
                <Typography variant='h6'>{name}</Typography>
                <Typography>{species}</Typography>
            </CardContent>
        </Card>
    )
}

export default RMCard