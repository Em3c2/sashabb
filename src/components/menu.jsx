import React , { useRef, useState, useEffect} from 'react';
import style from './menu.module.css'


const Menu = () => {
	const menuRef  = useRef(null);
	const [scrollMenu,setScrollMenu] = useState(null)

	const handleScroll = event => {
		event.preventDefault();
		if (menuRef.current !== null) {
			if (window.pageYOffset < 58 && scrollMenu === true) {
				menuRef.current.style.height = window.pageYOffset / 2 + 5 + 'px'
			} else if (window.pageYOffset > 400){
				setScrollMenu(false)
				if (parseInt(menuRef.current.style.height) > 5){
					menuRef.current.style.height = (parseInt(menuRef.current.style.height) - 3) + 'px'
				} else {
					menuRef.current.style.height = '5px'
				}
			}
		}
	}

	useEffect( () => {
			if (window.pageYOffset === 0) {
				setScrollMenu(true)
			}
		},
		[]
	)

	window.addEventListener('scroll',handleScroll)

	return (
		<div className={style.container} ref={menuRef}>
			<a href="mailto:candelariakitana@hotmail.com"><h2>Contacto</h2></a>
			<a href="https://sashasathya.bandcamp.com/" target="_blank"><h2>Bandcamp</h2></a>
			<a href="https://www.youtube.com/user/sashasathya" target="_blank"><h2>Youtube</h2></a>
			<a href="https://www.paypal.com/paypalme/sashasathyabb" target="_blank"><h2>Aportes</h2></a>
		</div>
		)
}

export default Menu