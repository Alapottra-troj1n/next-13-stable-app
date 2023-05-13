import { FC } from 'react';

interface DashboardProps {}

const session = null;

const Dashboard: FC<DashboardProps> = ({}) => {

  if(!session) throw new Error('Auth is required')

  return <div>Auth Only Page</div>
}

export default Dashboard;