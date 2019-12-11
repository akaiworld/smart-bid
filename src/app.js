import React from 'react';

// simple
import Card from '@/components/ui/card';
import CollapsibleCard from '@/components/ui/card/collapsible';
import CardHighlight from '@/components/ui/card/highlight';
import CardSubInfo from '@/components/ui/card/sub-info';
import Btn from '@/components/ui/btn';
import BtnGroup from '@/components/ui/btn/group';

// logical
import Menu from '@/components/logical/menu';
import Orders from '@/components/logical/orders';
import Mail from '@/components/logical/mail';
import Projects from '@/components/logical/projects';
import ToDo from '@/components/logical/todo';
import Transactions from '@/components/logical/transactions';

const App = () => {
	return (
		<div className='page-wrap'>
			<nav>
				<Menu />
			</nav>
			<main>
				<div className='row'>
					<div className='col col-12 col-md-6 col-lg-3'>
						<Card
							header={<>
								<div className='card-header-title'>Income</div>
								<div className='badge badge-sm bg-blue'>Monthly</div>
							</>}
							body={<>
								<CardHighlight>
									40 886,200
								</CardHighlight>
								<CardSubInfo
									title='Total income'
									value={<div className='color-blue'>
										98% <i className='fas fa-bolt'></i>
									</div>}
								/>
							</>}
						/>
					</div>
					<div className='col col-12 col-md-6 col-lg-3'>
						<Card
							header={<>
								<div className='card-header-title'>Orders</div>
								<div className='badge badge-sm bg-blue-green'>Annual</div>
							</>}
							body={<>
								<CardHighlight>
									275,800
								</CardHighlight>
								<CardSubInfo
									title='New orders'
									value={<div className='color-blue-green'>
										20% <i className="fas fa-level-up-alt"></i>
									</div>}
								/>
							</>}
						/>
					</div>
					<div className='col col-12 col-md-6 col-lg-3'>
						<Card
							header={<>
								<div className='card-header-title'>visits</div>
								<div className='badge badge-sm bg-green'>Today</div>
							</>}
							body={<>
								<CardHighlight>
									106,120
								</CardHighlight>
								<CardSubInfo
									title='New visits'
									value={<div className='color-green'>
										44% <i className="fas fa-level-up-alt"></i>
									</div>}
								/>
							</>}
						/>
					</div>
					<div className='col col-12 col-md-6 col-lg-3'>
						<Card
							header={<>
								<div className='card-header-title'>User activity</div>
								<div className='badge badge-sm bg-pink'>Low value</div>
							</>}
							body={<>
								<CardHighlight>
									80,600
								</CardHighlight>
								<CardSubInfo
									title='In first month'
									value={<div className='color-pink'>
										38% <i className="fas fa-level-down-alt"></i>
									</div>}
								/>
							</>}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col col-12'>
						<Card
							header={<>
								<div className='card-header-title'>Orders</div>
								<BtnGroup>
									<Btn pressed={true}>Today</Btn>
									<Btn>Monthly</Btn>
									<Btn>Annual</Btn>
								</BtnGroup>
							</>}
							body={<Orders />}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col col-12 col-md-4'>
						<CollapsibleCard
							title='Messages'
							body={<Mail />}
						/>
					</div>
					<div className='col col-12 col-md-8' style={{paddingTop: '0px'}}>
						<div className='row'>
							<div className='col col-12 col-xl-6'>
								<CollapsibleCard
									title='User project list'
									body={<Projects />}
								/>
							</div>
							<div className='col col-12 col-xl-6'>
								<CollapsibleCard
									title='Small todo list'
									body={<ToDo />}
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col col-12'>
								<CollapsibleCard
									title='Transactions worldwide'
									body={<Transactions />}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div className='floating-settings'>
				<i className='fas fa-cogs'></i>
			</div>
		</div>
	)
}
export default App;