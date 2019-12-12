import React, {useState} from 'react';

const MenuItem = ({item}) => {

	const [open, setOpen] = useState(item.subMenuOpen);
	
	return (
		<div>
			<div 
				className={`
					menu-item 
					${item.highlighed ? 'bg-green' : ''}
					${item.subMenu && open ? 'open-sub-menu' : ''}
				`}
				onClick={() => setOpen(!open)}
			>
				<div>
					{item.icon}
					{item.text}
				</div>
				<div>
					{item.badge ? (
						<div 
							className={`
								badge 
								${item.badgeColor ? 'bg-'+item.badgeColor : ''} 
								${item.badgeTextColor ? 'color-'+item.badgeTextColor : ''}
							`}
						>
							{item.badge}
						</div>
					) : null}
					{item.subMenu ? (
						open ? <i className='fas fa-chevron-down'></i> :
						<i className='fas fa-chevron-left'></i>
					) : null}
				</div>
			</div>
			{item.subMenu && open ? (
				item.subMenu.map(subItem => (
					<div
						className='sub-menu-item'
						key={subItem.id}
					>
						{subItem.text}
					</div>
				))
			) : null}
		</div>
	);
}
export default MenuItem;