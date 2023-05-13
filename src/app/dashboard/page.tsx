import axios from 'axios';

export const revalidate = 10;

const Dashboard = async ({}) => {

  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return <div>{JSON.stringify(data)}</div>;
};

export default Dashboard;
