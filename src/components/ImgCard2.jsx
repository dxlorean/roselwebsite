import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

export default function ActivityCard({ 
    title = "Card", 
    img = "/massagevector.webp", 
    description, 
    activities = [] ,
    type="null",
    onSelect
}) {
    return (
        <Card sx={{
            maxWidth: 400,
            height: '100%', // Ensures cards in a grid layout stretch to match heights
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fffbeb', // Equivalent to amber-50
            border: '1px solid #fde68a', // Equivalent to amber-200
            borderRadius: '16px', // Rounded corners
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 8px 30px rgba(217, 119, 6, 0.15)', // Golden shadow
            }
        }}>
            <CardActionArea onClick={() => onSelect(type)}
            
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <CardMedia
                    component="img"
                    height="180" // Slightly taller to showcase the activity imagery better
                    image={img}
                    alt={title}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {/* Title */}
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontFamily: 'serif',
                            fontWeight: 700,
                            color: '#064e3b', // Deep Emerald
                            letterSpacing: '0.02em',
                            mb: 0.5
                        }}
                    >
                        {title}
                    </Typography>

                    {/* Optional Short Description/Intro */}
                    {description && (
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: 'serif',
                                fontStyle: 'italic',
                                color: '#064e3b',
                                opacity: 0.85,
                                lineHeight: 1.5,
                                mb: 1
                            }}
                        >
                            {description}
                        </Typography>
                    )}

                    {/* The Bulleted List of Activities */}
                    {activities.length > 0 && (
                        <Box component="ul" sx={{
                            listStyle: 'none',
                            p: 0,
                            m: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.2
                        }}>
                            {activities.map((activity, index) => (
                                <Box component="li" key={index} sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 1.5
                                }}>
                                    {/* Custom Golden Bullet Point */}
                                    <Typography component="span" sx={{
                                        color: '#d97706', // Amber-600
                                        fontSize: '1.2rem',
                                        lineHeight: '1.2rem'
                                    }}>
                                        •
                                    </Typography>
                                    
                                    {/* Activity Text */}
                                    <Typography sx={{
                                        fontFamily: 'serif',
                                        color: '#022c22', // Emerald-950
                                        lineHeight: 1.4,
                                        fontSize: '0.95rem'
                                    }}>
                                        {activity}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}