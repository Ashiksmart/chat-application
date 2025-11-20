import { TextField, Button} from '@mui/material';

export default function LoginForm(){
    const LoginFormStyle = {
        border:"1px solid",
        display: "inline-grid",
        padding:"50px",
        width: "300px",
        height: "300px",
        textAlign: "center"
    }
    const handleLogin = () => {
        alert('login')
    }
    return (
        <div style={LoginFormStyle}>
            <h2>Login</h2>
            <TextField id="standard-basic" label="User Id" variant="standard" /><br/>
            <TextField id="standard-basic" label="Passowrd" variant="standard" /><br/>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </div>
    )
}