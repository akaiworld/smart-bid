import React, {useState} from 'react';

import MenuItem from '@/components/logical/menu/item';

const Menu = ({}) => {
	
	return (
		<div className='menu'>
			{items.map(item => (
				<MenuItem
					item={item}
					key={item.id}
				/>
			))}
		</div>
	);
}
export default Menu;

const items = [{
	id: 1,
	icon: <i className='fas fa-th-large'></i>,
	text: 'Dashboard',
	subMenu: [{
		id: 1,
		text: 'Dashboard v.1',
	},{
		id: 2,
		text: 'Dashboard v.2',
	},{
		id: 3,
		text: 'Dashboard v.3',
	},{
		id: 4,
		text: 'Dashboard v.4',
	},{
		id: 5,
		text: 'Dashboard v.5',
	}],
	subMenuOpen: true,
},{
	id: 2,
	icon: <i className='far fa-gem'></i>,
	text: 'Layouts',
	highlighed: false,
},{
	id: 3,
	icon: <i className='far fa-chart-bar'></i>,
	text: 'Graphs',
	subMenu: [{
		id: 1,
		text: 'Submenu 1',
	},{
		id: 2,
		text: 'Submenu 2',
	},{
		id: 3,
		text: 'Submenu 3',
	},{
		id: 4,
		text: 'Submenu 4',
	},{
		id: 5,
		text: 'Submenu 5',
	}]
},{
	id: 4,
	icon: <i className='fas fa-envelope'></i>,
	text: 'Mailbox',
	badge: '16/24',
	badgeColor: 'orange',
},{
	id: 5,
	icon: <i className='fas fa-chart-pie'></i>,
	text: 'Metrics',
},{
	id: 6,
	icon: <i className='fas fa-flask'></i>,
	text: 'Widgets',
},{
	id: 7,
	icon: <i className='fas fa-edit'></i>,
	text: 'Forms',
	subMenu: [{
		id: 1,
		text: 'Submenu 1',
	},{
		id: 2,
		text: 'Submenu 2',
	},{
		id: 3,
		text: 'Submenu 3',
	},{
		id: 4,
		text: 'Submenu 4',
	},{
		id: 5,
		text: 'Submenu 5',
	}]
},{
	id: 8,
	icon: <i className='fas fa-desktop'></i>,
	text: 'App views',
	badge: 'SPECIAL',
	badgeColor: 'green',
},{
	id: 9,
	icon: <i className='far fa-copy'></i>,
	text: 'Other pages',
	subMenu: [{
		id: 1,
		text: 'Submenu 1',
	},{
		id: 2,
		text: 'Submenu 2',
	},{
		id: 3,
		text: 'Submenu 3',
	},{
		id: 4,
		text: 'Submenu 4',
	},{
		id: 5,
		text: 'Submenu 5',
	}]
},{
	id: 10,
	icon: <i className='fas fa-globe-europe'></i>,
	text: 'Miscellanious',
	badge: 'NEW',
	badgeColor: 'blue',
},{
	id: 11,
	icon: <i className='fas fa-flask'></i>,
	text: 'UI elements',
	subMenu: [{
		id: 1,
		text: 'Submenu 1',
	},{
		id: 2,
		text: 'Submenu 2',
	},{
		id: 3,
		text: 'Submenu 3',
	},{
		id: 4,
		text: 'Submenu 4',
	},{
		id: 5,
		text: 'Submenu 5',
	}]
},{
	id: 12,
	icon: <i className='fas fa-laptop'></i>,
	text: 'Grid options',
},{
	id: 13,
	icon: <i className='fas fa-table'></i>,
	text: 'Tables',
	subMenu: [{
		id: 1,
		text: 'Submenu 1',
	},{
		id: 2,
		text: 'Submenu 2',
	},{
		id: 3,
		text: 'Submenu 3',
	},{
		id: 4,
		text: 'Submenu 4',
	},{
		id: 5,
		text: 'Submenu 5',
	}]
},{
	id: 14,
	icon: <i className='fas fa-shopping-cart'></i>,
	text: 'E-commerce',
	subMenu: [{
		id: 1,
		text: 'Submenu 1',
	},{
		id: 2,
		text: 'Submenu 2',
	},{
		id: 3,
		text: 'Submenu 3',
	},{
		id: 4,
		text: 'Submenu 4',
	},{
		id: 5,
		text: 'Submenu 5',
	}]
},{
	id: 15,
	icon: <i className='far fa-image'></i>,
	text: 'Gallery',
	subMenu: [{
		id: 1,
		text: 'Submenu 1',
	},{
		id: 2,
		text: 'Submenu 2',
	},{
		id: 3,
		text: 'Submenu 3',
	},{
		id: 4,
		text: 'Submenu 4',
	},{
		id: 5,
		text: 'Submenu 5',
	}]
},{
	id: 16,
	icon: <i className='fas fa-th-large'></i>,
	text: 'Menu levels',
	subMenu: [{
		id: 1,
		text: 'Submenu 1',
	},{
		id: 2,
		text: 'Submenu 2',
	},{
		id: 3,
		text: 'Submenu 3',
	},{
		id: 4,
		text: 'Submenu 4',
	},{
		id: 5,
		text: 'Submenu 5',
	}]
},{
	id: 17,
	icon: <i className='fas fa-magic'></i>,
	text: 'Animations',
	badge: '62',
	badgeColor: 'blue-green',
},{
	id: 18,
	icon: <i className='fas fa-star'></i>,
	text: 'Landing page',
	badge: 'NEW',
	badgeColor: 'white',
	badgeTextColor: 'green',
	highlighed: true,
},];