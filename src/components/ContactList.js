import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Avatar, Box} from "@mui/material";

export const ContactList=({contact})=>{
   const name = `${contact.name.title} ${contact.name.first} ${contact.name.last}`;
   const avatar = contact.picture.large;
   const email = contact.email;
   const age = contact.dob.age;
   const phone = contact.phone;
   const location = `${contact.location.street.name},${contact.location.city}
                    ,${contact.location.state},${contact.location.country}`
    return(
        <>
            <Card sx={{ maxWidth: 500,height:250}}>

                <CardContent>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Avatar
                            alt={name}
                            src={avatar}
                            sx={{ width: 56, height: 56 }}
                        />
                        <Typography gutterBottom variant="h5" component="div" marginLeft={3}>
                            {name}
                        </Typography>
                    </Box>

                    <Typography variant="h6" color="text.primary">
                        Email : {email}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        Age : {age}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        Phone : {phone}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        Location : {location}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}