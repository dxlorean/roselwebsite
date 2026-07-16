import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({ type="null", children, title = "Card", img, onSelect, ...rest }) {
    return (
        <Card sx={{
            maxWidth: 400,
            backgroundColor: '#fffbeb', // Equivalent to amber-50
            border: '1px solid #fde68a', // Equivalent to amber-200
            borderRadius: '16px', // Rounded corners
            transition: 'transform 0.3s ease-in-out',
            // Hover effects use standard CSS nested syntax
            '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 8px 30px rgba(217, 119, 6, 0.15)', // Golden shadow
            }
        }}>
            <CardActionArea onClick={() => onSelect(type)}>
                {img && <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt=""
                    
                />}
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{
                            fontFamily: 'serif',
                            fontWeight: 700,
                            color: '#064e3b', // Deep Emerald
                            letterSpacing: '0.02em'
                        }}
                    >
                        {title}
                    </Typography>

                    {/* The Description: Subtle, italicized, and easy to read */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'serif',
                            fontStyle: 'italic',
                            lineHeight: 1.6
                        }}
                    >
                        {children}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
