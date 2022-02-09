import React from 'react';

interface IAppProps {
	pharse: string
}

export const App: React.FC<IAppProps> = ({ pharse }) => {
	return <div className='app'>{pharse}</div>
}