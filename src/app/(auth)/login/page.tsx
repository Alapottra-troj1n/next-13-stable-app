import axios from 'axios';

interface LoginProps {}

const Login = async() => {

 const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')


  return <div>{JSON.stringify(data)}</div>
}

export default Login;