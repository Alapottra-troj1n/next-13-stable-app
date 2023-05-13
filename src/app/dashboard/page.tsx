import { AuthRequiredError } from '@/lib/exceptions';
import { FC } from 'react';

interface DashboardProps {}

const session = null;

const Dashboard: FC<DashboardProps> = ({}) => {

  if(!session) throw new AuthRequiredError()

  return <div>Auth Only Page</div>
}

export default Dashboard;